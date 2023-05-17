import React, {useState, useEffect} from 'react'
import QuestionEntry from './QuestionEntry.jsx';
import axios from 'axios';
import ExampleData from './ExampleData.json';


const Questions = ({currentItemID}) => {

  const [questionList, setQuestionList] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [matchedList, setMatchedList] = useState([]);
  const [questionHelpful, setQuestionHelpful] = useState(0);
  const [questionDisplay, setQuestionDisplay] = useState([]);


  useEffect(() => {
    if (currentItemID) {
      axios.get(`/qa/questions/?product_id=${currentItemID}`)
      .then((response) => {
        setQuestionList(response.data.results)
      })
      .catch((err) => {
        console.log('ERR GETTING QUESTIONS FOR PRODUCT ', err)
      })
    }}, [currentItemID, questionHelpful]);


  useEffect(() => {
      setQuestionDisplay(questionList.slice(0, 4))
  }, [questionList])

  // useEffect(() => {
  //   if (answerDisplay.length === 0) {
  //     setAnswerDisplay(answerList.slice(0, 2))
  //   }
  // }, [answerList])

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




  return (
    <div className='widget' id='QA'>
      <h1 className='pageTitle'>Question & Answer</h1>
        <input className='searchBar' placeholder='Have A Question? Search For Answers...' onChange={handleSearch}></input>
      <div className='questionEntry'>
        <QuestionEntry questions={questionDisplay} questionHelpful={questionHelpful} setQuestionHelpful={setQuestionHelpful}/>
      </div>
      <div className='buttons'>
        <button className='moreAnsweredBtn'>More Answered Questions</button> <button className='addQuestionBtn'>Add A Question +</button>
      </div>
    </div>
  )
}

export default Questions;