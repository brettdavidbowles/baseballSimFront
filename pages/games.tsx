import { ScoreBoard } from "../components/ScoreBoard";

export default function Games () {
  return (
    <main>
      <h1 className="w-full text-center text-4xl p-8">
        Current Games
      </h1>
      <div className="w-1/2">
        <ScoreBoard 
          teamOne="BZA's Ballers"
          visitorScores={[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
          homeScores={[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]}
          pitchCount={{
            balls: 1,
            strikes: 2
          }}
          outs={2}
          visitorHits={20}
          homeHits={23}
        />
      </div>
    </main>
  )
}