import React, {useState, useEffect} from 'react'
import QuestionEntry from './QuestionEntry.jsx';
import axios from 'axios';
import ExampleData from './ExampleData.json';


const Questions = ({currentItemID}) => {

  const [questionList, setQuestionList] = useState([]);
  const [searchInput, setSearchInput] = useState('');


  useEffect(() => {
    if (currentItemID) {
      axios.get(`/qa/questions/${currentItemID}`)
      .then((response) => {
        console.log('resposne.data.results', response.data);
        setQuestionList(response.data.results);
      })
      .catch((err) => {
        console.log('ERR GETTING QUESTIONS FOR PRODUCT ', err)
      })
    }}, [currentItemID]);

    const handleSearch = (e) => {
      var value = e.target.value;
      if (value.length > 2) {
        questionList.forEach(question => {
          if (question.question_body.includes(value)) {
            setQuestionList([question]);
          }
        })
      }
    }

  //   if (!questionList) {
  //   return <div>Loading</div>
  // }
  return (
    <div className='widget' id='QA'>
      <h1 className='pageTitle'>Question & Answer</h1>
        <input className='searchBar' placeholder='Have A Question? Search For Answers...' onChange={handleSearch}></input>
      <div>
        <QuestionEntry questions={questionList}/>
      </div>
      <div className='buttons'>
        <button className='moreAnsweredBtn'>More Answered Questions</button> <button className='addQuestionBtn'>Add A Question</button>
      </div>
    </div>
  )
}

export default Questions;