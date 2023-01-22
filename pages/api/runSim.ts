import type { NextApiRequest, NextApiResponse } from 'next'
import { Batter, Pitcher, PlayerAttribute } from './sim/classes'
import playBall from './sim/game'


// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => {
  const { awayTeam, homeTeam } = JSON.parse(req.body)

  const mapAttributesToArray = (attributes: any) => {
    const attributesArray: PlayerAttribute[] = []
    for (const attribute in attributes) {
      attributesArray.push({
        name: attribute,
        level: attributes[attribute]
      })
    }
    return attributesArray
  }
  const awayPitcher = new Pitcher(awayTeam[0].name, awayTeam[0].player_id, mapAttributesToArray(awayTeam[0].attributes))
  const homePitcher = new Pitcher(homeTeam[0].name, homeTeam[0].player_id, mapAttributesToArray(homeTeam[0].attributes))
  const awayLineup = awayTeam.slice(1).map((batter: any) => new Batter(batter.name, batter.player_id, mapAttributesToArray(batter.attributes)))
  const homeLineup = homeTeam.slice(1).map((batter: any) => new Batter(batter.name, batter.player_id, mapAttributesToArray(batter.attributes)))
  res.status(200).json({ game: playBall(homeLineup, homePitcher, awayLineup, awayPitcher)})
}
