import * as React from 'react'
import { Team } from '../../classes'

interface TeamDropDownProps {
  homeOrAway: 'Home' | 'Away'
  teams: Team[],
  loading: boolean,
  onTeamChange: Function
  // handleChange: React.ChangeEventHandler<HTMLSelectElement>
}

export class TeamDropDown extends React.Component<TeamDropDownProps>{
  constructor(props: TeamDropDownProps) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e: { target: { value: string } }) {
    this.props.onTeamChange(this.props.homeOrAway, e.target.value)
  }
  render() {
    let select
    if(this.props.loading){
      select = <span>Loading...</span>
    } else {
      select = 
      <select 
        id={`${this.props.homeOrAway}-select`}
        onChange={this.handleChange}  
      >
        <option value="">Select Team</option>
        {
          this.props.teams.map((team) => (
            <option 
              value={team.name}
              key={team.name}
            >
              {team.name}
            </option>
          ))
        }
      </select>
    }
    return (
      <div>
        <label
          htmlFor={`${this.props.homeOrAway}-select`}
        >
          {this.props.homeOrAway} Team:
        </label>
        {select}
      </div>
    )
  }
}