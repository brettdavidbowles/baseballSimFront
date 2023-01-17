// import { useQuery } from "@apollo/client"
// import * as GetTeams from 'gql/queries/GetTeams.gql'
// import { Team } from '../classes'
// import playBall from '../sim/game'
// import { Batter, Pitcher } from '../sim/classes'
// import { attributes } from '../sim/constants/attributes'

// import createRandomLineup from '../sim/functions/createRandomLineup'

// const warlyWarlocks: Batter[] = createRandomLineup('Warly')
// const warlyPitcher = new Pitcher('dan', 34, attributes.map(attribute => ({
//       name: attribute,
//       level: Math.random() * 100
//     })))
// const bzaBallers: Batter[] = createRandomLineup('BZA')
// const bzaPitcher = new Pitcher('brett', 34, attributes.map(attribute => ({
//       name: attribute,
//       level: Math.random() * 100
//     })))
const wtf = () => {
  console.log('asdfl')
}

// const testGame = (homeTeam: Batter[], homePitcher: Pitcher, awayTeam: Batter[], awayPitcher: Pitcher) => {
//   playBall(homeTeam, homePitcher, awayTeam, awayPitcher)
// }

export default function Teams() {
  // const { loading, error, data } = useQuery(GetTeams)
  // if (loading) return 'Loading...';
  // if (error) return `Error! ${error.message}`;
  return (
    <div>
    {/* <div>
      {
        data.teams.map((team: Team) => (
          <div key={team.name}>
            <h4>Team</h4>
            {team.name}
          </div>
        ))
      }
    </div> */}
    {/* <button type="button" onClick={wtf}>pressherebitch</button> */}
    </div>
  )
}