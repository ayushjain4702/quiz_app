import React,{useState} from 'react'
import "./App.css";
import questions from './components/quiz.js'
import Results from "./components/Results.js"


const App = () => {



  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score ,setScore] = useState(0);
  const [correctAns , setCorrectAns] = useState(0);
  const [showResult , setShowResult] = useState(false);
  const [clicked , setClicked] = useState(false);

  const handleNextOptions = () => {
    const nextQuestion = currentQuestion + 1;
    setClicked(false);
    if(nextQuestion < questions.length){
      setCurrentQuestion(nextQuestion);
    }else{
      setShowResult(true);
    }
    
  }

  const handleAnwerOptions = (isCorrect) =>{

    if(isCorrect){
      setScore(score + 5);
      setCorrectAns(correctAns +1);
    }
    setClicked(true);
  }

  const handlePlayAgain = () => {
    setCurrentQuestion(0);
    setScore(0);
    setCorrectAns(0);
    setShowResult(false);
  }

  return (
    <>
    <h1 className='heading'>Quiz App</h1>
    <div className='app'>
      
      {showResult ? (<Results score={score} correctAns = {correctAns} handlePlayAgain={handlePlayAgain}/>): ( 
      <>
        <div className='question-section'>
        <h5>Score: {score}</h5>
        <div className='question-count'>
          <span>Question {currentQuestion + 1} of {questions.length}</span>
        </div>
        <div className='question-text'>
          {questions[currentQuestion].questionText}
        </div>
        </div>
        <div className='answer-section'>
        {questions[currentQuestion].answerOptions.map((ans,key)=>{
          return <button  className={`button ${clicked && ans.isCorrect? "correct" :"button"}`}
          disabled={clicked} key={key} onClick={()=>handleAnwerOptions(ans.isCorrect)}>{ans.answerText}</button>
        })}
      
        <div className='actions'>
          <button onClick={handlePlayAgain}>Quit</button>
          <button disabled = {!clicked} onClick={handleNextOptions}>Next</button>
        </div>
        </div>
      </>
      )}
      

    </div>
    </>
  )
}

export default App