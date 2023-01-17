import { TeamDropDown } from "../components/game/TeamDropDown";
import * as GetTeams from 'gql/queries/GetTeams.gql'
import { useQuery } from "@apollo/client"
import { useState } from "react";
import { Team } from '../classes'

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

  return (
    <div>
      <h1 className="text-center text-3xl p-8">
        Try the Sim Pls
      </h1>
      <div className="w-1/2 m-auto">
        <h2>
          Choose Teams:
        </h2>
        <TeamDropDown 
          homeOrAway="Away"
          teams={data?.teams}
          loading={loading}
          onTeamChange={setTeam}
        />
        <div>{awayTeam.name}</div>
        <TeamDropDown
          homeOrAway="Home"
          teams={data?.teams}
          loading={loading}
          onTeamChange={setTeam}
        />
        <div>{homeTeam.name}</div>
      </div>
    </div>
  )
}