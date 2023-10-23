import React from 'react'
import questions from './quiz'

const Results = (props) => {
  return (
    <div className='score-section'>
        <h2>Completed</h2>
        <h4>Total Score {props.score}/{questions.length*5}</h4>
        <h4>Your correct answers are {props.correctAns} out of {questions.length}</h4>
        <button onClick={props.handlePlayAgain}>Play Again</button>
    </div>
  )
}

export default Results