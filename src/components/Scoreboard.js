import React from "react";

function Scoreboard(props) {
  const { score, bestScore } = props;

  return (
    <div className="ScoreBoard">
      <div>Score : {score}</div>
      <div>Best score : {bestScore}</div>
    </div>
  );
}

export default Scoreboard;
