import React, {useState, useEffect} from 'react'
import QuestionEntry from './QuestionEntry.jsx';
import Axios from 'axios';

const Questions = ({currentItemID}) => {

  useEffect = () => {
    axios.get
  }

  return (
    <div>
      <input placeholder={'search'}></input>
      <div>
        <p>this is the Questions section</p>
        <QuestionEntry />
      </div>
    </div>
  )
}

export default Questions