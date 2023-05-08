import React, {useState, useEffect} from 'react'
import QuestionEntry from './QuestionEntry.jsx';
import axios from 'axios';

const Questions = ({currentItemID}) => {

  let [questions, setQuestions] = useState([]);


  return (
    <div>
      <input placeholder={'search'}></input>
      <div>
        <p>this is the Questions section</p>
        <QuestionEntry questions={questions}/>
      </div>
    </div>
  )
}

export default Questions