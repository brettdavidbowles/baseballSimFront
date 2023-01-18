import { TeamDropDown } from "../components/game/TeamDropDown";
import * as GetTeams from 'gql/queries/GetTeams.gql'
import { useQuery } from "@apollo/client"
import { useState, useEffect } from "react";
import { Team } from '../classes'
import * as GetTeamPlayers from 'gql/queries/GetTeamPlayers.gql'
import { LineUp } from "../components/game/LineUp";

export default function RunGame() {
  const { loading, error, data } = useQuery(GetTeams)
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
      </div>
    </div>
  )
}