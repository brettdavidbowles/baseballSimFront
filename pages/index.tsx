import { TeamDropDown } from "../components/game/TeamDropDown";
import * as GetTeams from 'gql/queries/GetTeams.gql'
import { useQuery, useMutation } from "@apollo/client"
import { useState, useEffect } from "react";
import { Team } from '../classes'
import * as GetTeamPlayers from 'gql/queries/GetTeamPlayers.gql'
import { LineUp } from "../components/game/LineUp";
import * as AddFullGame from 'gql/mutations/AddFullGame.gql'
import atBat from "./api/sim/atBat";

export default function RunGame() {
  const { loading, error, data } = useQuery(GetTeams)
  const [ addFullGame, { data: mutationData }] = useMutation(AddFullGame)
  const [ homeTeam, setHomeTeam ] = useState<Team>({
    name: ''
  })
  const [ awayTeam, setAwayTeam ] = useState<Team>({
    name: ''
  })
  const setTeam = (homeOrAway: 'Home' | 'Away', teamName: string) => {
    if(homeOrAway === 'Home') {
      setHomeTeam({ name: teamName })
    } else {
      setAwayTeam({ name: teamName })
    }
  }
  const { loading: homeTeamLoading, data: homeTeamData } = useQuery(
    GetTeamPlayers, {
      variables: { name: homeTeam.name},
      skip: !homeTeam.name
  })
  const { loading: awayTeamLoading, data: awayTeamData } = useQuery(
    GetTeamPlayers, {
      variables: { name: awayTeam.name},
      skip: !awayTeam.name
  })
  const makeLineUpArray = (playerData: any) => {
    const arr = []
    for(let i=0; i<10; i++) {
      arr.push({
        number_in_lineup: i,
        player_id: playerData[i].id
      })
    }
    return arr
  }

  const makePlayerArray = (playerData: any) => {
    const arr = []
    for(let i=0; i<10; i++) {
      arr.push({
        number_in_lineup: i,
        player_id: playerData[i].id,
        name: playerData[i].name,
        attributes: playerData[i].player_attribute
      })
    }
    return arr
  }

  const addGame = (atBatArray: object[]) => {
    const randomId = Math.floor(Math.random() * 1000)
    // change this to a higher number for any sort of demo to avoid repeating games... need to make it incremental at some point
    addFullGame({
      variables: {
        id: randomId,
        date: new Date(),
        teams: {
          data: [
            {
              is_home_team: false,
              team_name: awayTeam.name
            },
            {
              is_home_team: true,
              team_name: homeTeam.name
            }
          ]
        },
        lineups: {
          data: [
            {
              id: randomId,
              isHomeTeam: false,
              line_up_players: {
                data: makeLineUpArray(awayTeamData?.teams_by_pk?.players)
              }
            },
            {
              id: randomId + 1,
              isHomeTeam: true,
              line_up_players: {
                data: makeLineUpArray(homeTeamData?.teams_by_pk?.players)
              }
            }
          ]
        },
        atBats: {
          data: atBatArray
        }
      }
    })
  }

  const createRunnerArray = (runnersOn: any) => {
    const arr = []
    for(let i=0; i<runnersOn.length; i++) {
      if(runnersOn[i]?.id) {
        arr.push({
          base: i + 1,
          player_id: runnersOn[i].id
        })
      }
    }
    return arr
  }
  
  const runSim = async () => {
    const data = {
      awayTeam: makePlayerArray(awayTeamData?.teams_by_pk?.players),
      homeTeam: makePlayerArray(homeTeamData?.teams_by_pk?.players)
    }
    const postData = async () => {
      const response = await fetch('/api/runSim', {
        method: 'POST',
        body: JSON.stringify(data),
      })
      return response.json()
    }
    postData().then(data => {
      const { game } = data
      const atBatArray = game.atBatArray.map((atBat: any) =>{
        return {
          balls: atBat.balls,
          strikes: atBat.strikes,
          batterId: atBat.batterId,
          inning: atBat.inning,
          outcome: atBat.outcome,
          pitcherId: atBat.pitcherId,
          rbis: atBat.rbis,
          runners_ons: {
            data: {
              runnersOn_players: {
                data: createRunnerArray(atBat.newRunnersOn)
              }
            }
          }
        }
      })
      addGame(atBatArray)
    })
  }

  return (
    <div>
      <h1 className="text-center text-3xl p-8">
        Try the Sim Pls
      </h1>
      <div className="w-1/2 m-auto">
        <h2>
          Choose Teams:
        </h2>
        <div className="flex justify-between space-x-2">
          <div>
            <TeamDropDown 
              homeOrAway="Away"
              teams={data?.teams}
              loading={loading}
              onTeamChange={setTeam}
            />
            <LineUp
              players={awayTeamData?.teams_by_pk?.players}
              loading={awayTeamLoading}
            />
          </div>
          <div>
            <TeamDropDown
              homeOrAway="Home"
              teams={data?.teams}
              loading={loading}
              onTeamChange={setTeam}
            />
            <LineUp
              players={homeTeamData?.teams_by_pk?.players}
              loading={homeTeamLoading}
            />
          </div>
        </div>

        {/* <button onClick={addGame}>Run Game</button> */}
        <button onClick={runSim}>testapi</button>
        {/* for the love of god add some disabled state here */}
      </div>
    </div>
  )
}