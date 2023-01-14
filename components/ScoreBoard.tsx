import * as React from 'react'

interface PitchCount {
  balls: number,
  strikes: number
}

interface ScoreBoardProps {
  teamOne: string,
  visitorScores: number[],
  homeScores: number[],
  pitchCount: PitchCount,
  outs: number,
  visitorHits: number,
  homeHits: number
}
const tableHeaders : JSX.Element[]= []
for(let i=1; i<10; i++) {
  tableHeaders.push(
    <th key={`header-${i}`}>
      { i }
    </th>
  )
}
const makeNineInnings = (scores : number[]) => {
  const newScores = [...scores]
  newScores.length = 9
  return newScores
}


export class ScoreBoard extends React.Component<ScoreBoardProps>{
  constructor(props: any) {
    super(props)
  }
  render() {
    return (
      <div className='p-2 bg-[#098568]'>
        <div className="m-1 border-4">
          {/* {this.props.teamOne} */}
          <table>
            <thead>
              <tr>
                <td>&nbsp;</td>
                {tableHeaders}
                <th>
                  EI
                </th>
                <td>&nbsp;</td>
                <th>
                  R
                </th>
                <th>
                  H
                </th>
                <th>
                  E
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {/* move these to another component */}
                <th className='px-2 text-left'>
                  VISITOR
                </th>
                {
                  makeNineInnings(this.props.visitorScores).map((score, index) => (
                    <td key={`vistor-score-inning-${index}`}>
                      {score}
                    </td>
                  ))
                }
                <td>
                  {
                    this.props.visitorScores.slice(9).reduce((a, b) => a + b, 0)
                  }
                </td>
                <td>&nbsp;</td>
                <td>
                  { this.props.homeScores.reduce((a, b) => a + b, 0)}
                </td>
              </tr>
              <tr>
                <th className='px-2 text-left'>
                  HOME
                </th>
                {
                  makeNineInnings(this.props.homeScores).map((score, index) => (
                    <td key={`vistor-score-inning-${index}`}>
                      {score}
                    </td>
                  ))
                }
                <td>
                  {
                    this.props.homeScores.slice(9).reduce((a, b) => a + b, 0)
                  }
                </td>
                <td>&nbsp;</td>
                <td>
                  { this.props.homeScores.reduce((a, b) => a + b, 0)}
                </td>
              </tr>
              
            </tbody>
          </table>
          <div className='px-4 flex justify-between w-full'>
            <span>
              BALLS: { this.props.pitchCount.balls }
            </span>
            <span>
              STRIKES: { this.props.pitchCount.strikes }
            </span>
            <span>
              OUTS: { this.props.outs}
            </span>
          </div>
        </div>
      </div>
    )
  }
}
