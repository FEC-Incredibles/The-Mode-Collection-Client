import React, {useState, useEffect} from 'react'
import QuestionEntry from './QuestionEntry.jsx';
import axios from 'axios';
import ExampleData from './ExampleData.json';


const Questions = ({currentItemID}) => {

  //let [questions, setQuestions] = useState([]);


  return (
    <div className='widget' id='QA'>
      <h1 className='pageTitle'>Question & Answer</h1>
        <input className='searchBar' placeholder='Have A Question? Search For Answers...'></input>
      <div>
        <QuestionEntry questions={ExampleData}/>
      </div>
      <div>
        <button>Load More Answers</button>
      </div>
      <div className='buttons'>
        <button className='moreAnsweredBtn'>More Answered Questions</button> <button className='addQuestionBtn'>Add A Question</button>
      </div>
    </div>
  )
}

export default Questions;