import React from 'react';
import AnswersList from './AnswersList.jsx';


const QuestionEntry = ({questions}) => {

// console.log('questions', questions.results);
// var sortedQuestions = questions.results.sort((a, b) => {return a.question_helpfullness - b.question_helpfullness});
// console.log('sorted', sortedQuestions);
console.log('quesitons', questions);
  return (
    <div className='questionContainer'>
      {questions.map((question, index) => {
        return (<AnswersList question={question} key={index}/>)
      })}
    </div>
  )
}

export default QuestionEntry;