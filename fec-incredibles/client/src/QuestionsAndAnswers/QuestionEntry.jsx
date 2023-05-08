import React from 'react';
import AnswersList from './AnswersList.jsx';


const QuestionEntry = ({questions}) => {
  return (
    <div className='questionContainer'>
      {questions.results.map((question, index) => {
        return (<AnswersList question={question} key={index}/>)
      })}
    </div>
  )
}

export default QuestionEntry;