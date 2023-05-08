import React from 'react';

const AnswersList = ({question}) => {
  return (
    <div className='answerContainer'>
      <div className='question'>Q: {question.question_body}</div>
      <div>{Object.keys(question.answers).map((answer, index) => {
        return (<div key={index} className='answer'>
        <div>A: {question.answers[answer].body}</div>
        <div className='userDate'>by: {question.answers[answer].answerer_name} on {question.answers[answer].date}</div>
        </div>)
      })}</div>
    </div>
  )
}

export default AnswersList;