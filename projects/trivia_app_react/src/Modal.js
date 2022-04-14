import React from 'react'
import { useGlobalContext } from './context'

const Modal = () => {
  const { questions, score, questionNum, handleAnswer,isModal,resetQuiz } = useGlobalContext();
  const { question, correct_answer, incorrect_answers } = questions[questionNum]
  const numberAnswers = incorrect_answers.length+1
  const randomPosition = Math.floor(Math.random() * numberAnswers)
  

  return <>
    <div className={`modal-container ${isModal&&'isOpen'}`}>
      <div className="modal-content">
        <h2>Congrats!</h2>
        <p>You answered {parseInt(score / questions.length * 100)}% of questions correctly</p>
        <button className="close-btn" onClick={()=>{resetQuiz()}}>Play Again</button>
        </div>
    </div>
    <div className="quiz">
      <p className="correct-answers">Correct Answers: {score}/{questions.length} </p>
      <article className="container">
        <h2 dangerouslySetInnerHTML={{ __html: question }}></h2>
        <div className="btn-container">
          {[...Array(numberAnswers)].map((_,i) => {
            if (i === randomPosition) {
              return <button key={i} className='answer-btn'
                onClick={() => { handleAnswer(true) }}
                dangerouslySetInnerHTML={{__html:correct_answer}}
              ></button>
            }
            const randomIncorrect = incorrect_answers.splice(Math.floor(Math.random()*incorrect_answers.length),1)
            return <button key={i} className='answer-btn'
              onClick={() => { handleAnswer(false) }}
              dangerouslySetInnerHTML={{ __html: randomIncorrect }}
            ></button>
          })}
        </div>
      </article>
      <button className="next-question" onClick={()=>{handleAnswer(false)}}>Next Question</button>
  </div>
  </>
}

export default Modal
