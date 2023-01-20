

import { useMutation, useQuery } from "@apollo/client"
import * as AddPlayersToDB from "gql/mutations/AddPlayers.gql"
// import * as GetTeams from 'gql/queries/GetTeams.gql'
import * as GetPlayers from 'gql/queries/GetPlayers.gql'
import * as AddPlayerAttributes from 'gql/mutations/AddPlayersAttributes.gql'

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
  // const [addPlayers, {data, loading, error}] = useMutation(AddPlayersToDB)
  const [addPlayerAttributesMutation, {data}] = useMutation(AddPlayerAttributes)
  const { data: playerData, loading: playerLoading } = useQuery(GetPlayers)
  const add_players = () => {
    const playerArray: object[] = []
    for (let i=0; i<199; i++){
      const player = {
        name: `${i}TestFella`,
        position: positions[i % 10],
        team: teams[Number(String(i/20)[0])]
      }
      playerArray.push(player)
    }
    // addPlayers({
    //   variables: {
    //     input: playerArray
    //   }
    // })
    // console.log(data)
  }
  interface PlayerJustRightHereThough {
    id: number
    ___typename: "players"
  }
  const assignRandomPlayerAttributes = (player: PlayerJustRightHereThough) => {
    const composure = Math.floor(Math.random() * 100)
    const endurance = Math.floor(Math.random() * 100)
    const intellect = Math.floor(Math.random() * 100)
    const reflexes = Math.floor(Math.random() * 100)
    const speed = Math.floor(Math.random() * 100)
    const strength = Math.floor(Math.random() * 100)
    const willpower = Math.floor(Math.random() * 100)
    return {
      player_id: player.id,
      composure,
      endurance,
      intellect,
      reflexes,
      speed,
      strength,
      willpower,
    }
  }

  const addPlayerAttributes = (players: PlayerJustRightHereThough[]) => {
    addPlayerAttributesMutation({
      variables: {
        input: players.map(player => assignRandomPlayerAttributes(player))
      }
    })
  }
  let magicButton
  if(playerLoading) {
    magicButton = <span>loading...</span>
  } else if (playerData?.players){
    magicButton = <button onClick={() => addPlayerAttributes(playerData.players)}>press it</button>
  }
  return (
    <div>
      {/* {magicButton} */}
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