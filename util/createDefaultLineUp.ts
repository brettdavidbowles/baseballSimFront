import { POSITIONS } from '../constants/positions'

interface Player {
  id: number,
  name: string
}
// need to put this in a file, i have it in two places

export const createDefaultLineUp = (players: Player[]) => {
  // const defaultLineUp: Player[] = []
  // POSITIONS.forEach(position => {
  //   const player = players?.find(player => player.position === position.value)
  //   if(player){
  //     defaultLineUp.push(player)
  //   } else {
  //     defaultLineUp.push({
  //       id: 0,
  //       name: 'Team must draft',
  //       position: position.value
  //     })
  //   }
  // })
  return players.slice(0, 10)
}