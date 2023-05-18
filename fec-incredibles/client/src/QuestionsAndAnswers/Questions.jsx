import React, {useState, useEffect} from 'react'
import QuestionEntry from './QuestionEntry.jsx';
import axios from 'axios';
import ExampleData from './ExampleData.json';
import AddQuestion from './AddQuestion.jsx';


const Questions = ({currentItemID}) => {

  const [questionList, setQuestionList] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [matchedList, setMatchedList] = useState([]);
  const [questionHelpful, setQuestionHelpful] = useState(0);
  const [questionDisplay, setQuestionDisplay] = useState([]);
  const [addQuestion, setAddQuestion] = useState(false);
  const [loadMoreQuestions, setLoadMoreQuestions] = useState(false);



  useEffect(() => {
      axios.get(`/qa/questions/?product_id=${currentItemID}&count=25`)
      .then((response) => {
        setQuestionList(response.data.results)
      })
      .catch((err) => {
        console.log('ERR GETTING QUESTIONS FOR PRODUCT ', err)
      })
    }, [currentItemID, questionHelpful]);


  useEffect(() => {
    if (!loadMoreQuestions) {
      setQuestionDisplay(questionList.slice(0, 4))
    } else {
      setQuestionDisplay(questionList.slice(0))
    }
  }, [questionList, loadMoreQuestions])


  const handleSearch = (e) => {
    var value = e.target.value;

    if(value.length < 3) {
      if (!loadMoreQuestions) {
        setQuestionDisplay(questionList.slice(0, 4))
      } else {
        setQuestionDisplay(questionList.slice(0))
      }
    } else if (value.length > 2) {
      var matchedList = questionList.filter((question) => {
        if (question.question_body.includes(value)) {
          return question;
        }
      })
      setQuestionDisplay(matchedList);
    }
  }




  const handleAddQuestion = () => {
    setAddQuestion(true);
  }

  const handleLoadMoreQuestions = () => {
    setLoadMoreQuestions(true);
  }

  const handleCollapseQuestions = () => {
    setLoadMoreQuestions(false);
  }


 if (questionList.length === 0) {
   return <div>Loading...</div>
 }

  return (
    <div className='widget' id='QA'>
        <h1 className='pageTitle'>Question & Answer</h1>
          <input className='searchBar' placeholder='Have A Question? Search For Answers...' onChange={handleSearch}></input>
        <div>
          {addQuestion && (<AddQuestion currentItemID={currentItemID} setAddQuestion={setAddQuestion} addQuestion={addQuestion} setQuestionList={setQuestionList}/> )}
        </div>
        <div className='questionEntry'>
          <QuestionEntry questions={questionDisplay} questionHelpful={questionHelpful} setQuestionHelpful={setQuestionHelpful}/>
        </div>
        <div className='buttons'>
            {/* {questionList > 4 && (!loadMoreQuestions ? <button className='moreAnsweredBtn' onClick={handleLoadMoreQuestions} >More Answered Questions</button>
            : null) } */}
            {(!loadMoreQuestions) ? <button className='moreAnsweredBtn' onClick={handleLoadMoreQuestions} >More Answered Questions</button>
            : <button className='moreAnsweredBtn' onClick={handleCollapseQuestions} >Collapse Questions</button>}
          <button className='addQuestionBtn' onClick={handleAddQuestion} >Add A Question +</button>
        </div>
    </div>
  )
}

export default Questions;