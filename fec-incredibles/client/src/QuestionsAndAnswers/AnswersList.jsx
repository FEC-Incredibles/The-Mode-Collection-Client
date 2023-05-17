import React, {useState, useEffect} from 'react';
import Answers from './Answers.jsx';
import axios from 'axios';
import AddAnswer from './AddAnswer.jsx';

const AnswersList = ({question, questionHelpful, setQuestionHelpful}) => {
  const [answerList, setAnswerList] = useState([]);
  const [answerDisplay, setAnswerDisplay] = useState([]);
  const [helpfulAnswer, setHelpfulAnswer] = useState(0);
  const [questionVoted, setQuestionVoted] = useState(false);
  const [loadClicked, setLoadClicked] = useState(false);
  const [addAnswer, setAddAnswer] = useState(false);

    useEffect(() => {
      axios.get(`/qa/questions/${question.question_id}/answers`)
        .then((response) => {
          setAnswerList(response.data.results);
        })
        .catch((err) => {
          console.log('ERR GETTING ANSWERS LIST', err)
        })
      }, [question, helpfulAnswer])

    useEffect(() => {
      if (!answerList) return;
      if (!loadClicked) {
        setAnswerDisplay(answerList.slice(0, 2))
      } else {
        setAnswerDisplay(answerList.slice(0))
      }
    }, [answerList, loadClicked])

    const handleQHelpful = (questionID) => {
      axios.put(`/qa/questions/${questionID}/helpful`, {
        body: questionID
      })
      .then((response) => {
        console.log('updated QHelpful')
        setQuestionVoted(true);
        setQuestionHelpful(questionHelpful + 1)
      })
      .catch((err) => {
        console.log('ERROR PUTING QHELPFUL', err)
      })
    }

    const handleLoadMoreAnswers = () => {
      setLoadClicked(true);
    }

    const handleCollapseAnswers = () => {
      setLoadClicked(false);
    }

    const handleAddAnswer = () => {
      setAddAnswer(true);
    }


    return (
      <div className='oneQuestion'>
        <div className='questionHelpful'>
          <p className='question'>Q: {question.question_body} </p>
          <div className='helpfulAddAnswer'>
            <div className='addanswerbtn' onClick={handleAddAnswer}>Add Answer</div>
            <div>
            {!questionVoted ? <div className='helpful' onClick={() => {handleQHelpful(question.question_id)}}>Helpful? Yes {question.question_helpfulness}</div>
            : <div className='helpful'>Helpful? Yes {question.question_helpfulness}</div>}
            </div>
          </div>
        </div>
        {addAnswer && (<AddAnswer currentQuestion={question.question_body}/>)}
        <div className='answerContainer'>{answerDisplay.map((answer, index) => {
          return (<Answers answer={answer} key={index} helpfulAnswer={helpfulAnswer} setHelpfulAnswer={setHelpfulAnswer} />)
        })}</div>
        <div data-testid='answerBody'>
          {answerList.length > 2 && (!loadClicked ? <div className='loadAnswers' onClick={handleLoadMoreAnswers}>Load More Answers</div>
          : <div className='collapseAnswers' onClick={handleCollapseAnswers}>Collapse Answers</div>)}
        </div>
      </div>
    )
}

export default AnswersList;