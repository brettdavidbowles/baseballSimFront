

import { useMutation, useQuery } from "@apollo/client"
import * as AddPlayersToDB from "gql/mutations/AddPlayers.gql"
// import * as GetTeams from 'gql/queries/GetTeams.gql'


const positions = [
  "pitcher",
  "catcher",
  "firstBase",
  "secondBase",
  "shortStop",
  "thirdBase",
  "leftField",
  "centerField",
  "rightField",
  "designatedHitter"
]

const teams = [
  "testOne",
  "testTwo",
  "testThree",
  "testFour",
  "testFive",
  "testSix",
  "testSeven",
  "testEight",
  "testNine",
  "testTen"
]

export default function AddPlayers() {
  const [addPlayers, {data, loading, error}] = useMutation(AddPlayersToDB)
  // const addOnePlayer = async (name: string, position: string, team: string) => {
  //   setTimeout(() => {
  //     // b/c of hasura's damn rate limit
  //   addPlayer({
  //     variables: {
  //       name: name,
  //       position: position,
  //       team: team
  //     }
  //   })
  // }, 1000)
  //   const player = await data
  //   console.log(player)
  // }
  // const test = () => {
  //   addOnePlayer('test2', 'pitcher', 'testTwo')
  // }
  const add_players = () => {
    const playerArray: object[] = []
    for (let i=0; i<199; i++){
      const player = {
        name: `${i}TestBaller`,
        position: positions[i % 10],
        team: teams[Number(String(i/20)[0])]
      }
      playerArray.push(player)
    }
    console.log(playerArray)
    addPlayers({
      variables: {
        input: playerArray
      }
    })
  }
  return (
    <div>
      <button onClick={add_players}>
        Add a bunch of players
      </button>
    </div>
  )
  // interface team {
  //   name: string
  //   league: string
  // }
  // const { data, loading, error } = useQuery(GetTeams);

  // if (loading) {
  //   return <h2>Loading...</h2>;
  // }

  // if (error) {
  //   console.error(error);
  //   return null;
  // }

  // const teams = data.teams;

  // return (
  //   <div>
  //     {teams.map((team: team) => (
  //       <div key={team.name}>
  //         <h3>{team.name}</h3>
  //       </div>
  //     ))}
  //   </div>
  // );
}