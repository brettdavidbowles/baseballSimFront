import * as React from 'react'
import { createDefaultLineUp } from '../../util/createDefaultLineUp'
interface Player {
  id: number,
  name: string,
  position: string
}
interface LineUpProps {
  loading: boolean,
  players: Player[]
}

export class LineUp extends React.Component<LineUpProps>{
  constructor(props: LineUpProps) {
    super(props)
  }

  render() {
    if(this.props.loading){
      return (
        <div>loading...</div>
      )
    }
    if(this.props.players?.length){
      return (
        <div>
          {
            createDefaultLineUp(this.props.players)?.map(player => (
              <div key={player.id}>
                {player.position}: {player.name}
              </div>
            ))
          }
        </div>
      )
    }
  }
}