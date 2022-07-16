import React from 'react'

function Scoreboard(props) {

  return (
    <div className='ScoreBoard'>
        <div>Score : {props.score}</div>
        <div>Best score : {props.bestScore}</div>
    </div>
  )
}

export default Scoreboard