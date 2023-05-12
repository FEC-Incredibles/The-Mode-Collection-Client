import React from 'react';

const AnswersList = ({question}) => {
  if (Object.keys(question.answers).length >= 2) {
    var answers = Object.keys(question.answers).map((answer, index) => {
      return answer;
    })
    var firstTwo = [question.answers[answers[0]], question.answers[answers[1]]];
  } else {
    var firstTwo = Object.keys(question.answers).map((answer, index) => {
      return answer;
    })
  }

  return (
    <div className='answerContainer'>
      <div className='question'>Q: {question.question_body} <button className='helpful'>helpful? {question.question_helpfulness}</button> <button className='addanswerbtn'>Add Answer</button></div>
        <div>{firstTwo.map((answer, index) => {
          return (<div key={index} className='answer'>
          <div>A: {answer.body}</div>
          <div className='userDate'>by: {answer.answerer_name} on {answer.date}</div>
          </div>)
        })}</div>
        <button>load more answers</button>
    </div>
  )
}

export default AnswersList;