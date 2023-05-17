import React from 'react';
import AnswersList from './AnswersList.jsx';


const QuestionEntry = ({questions, questionHelpful, setQuestionHelpful}) => {

  return (
    <div className='questionContainer'>
      {questions.map((question, index) => {
        return (<AnswersList  question={question} key={index} questionHelpful={questionHelpful} setQuestionHelpful={setQuestionHelpful}/>)
      })}
    </div>
  )
}

export default QuestionEntry;