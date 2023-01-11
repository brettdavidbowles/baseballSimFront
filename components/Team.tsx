import * as React from 'react'
import { Batter } from '../classes'
import { PlayerForm } from './PlayerForm'

// type TeamState = {
//   batters: Batter[]
// }

export class Team extends React.Component{
  constructor(props : any) {
    super(props)
    this.state = {
      batters: []
    }
    this.addBatter = this.addBatter.bind(this)
  }
  addBatter(batter : Batter) {
    this.setState(this.state.batters.push(batter))
  }
  // render() {
  //   return (
  //     <PlayerForm2
  //   )
  // }

}