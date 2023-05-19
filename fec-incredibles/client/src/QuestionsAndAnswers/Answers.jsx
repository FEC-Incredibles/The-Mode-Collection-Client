import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { format, parseISO} from 'date-fns';

const Answers = ({answer, helpfulAnswer, setHelpfulAnswer}) => {
  const [answerReported, setAnswerReported] = useState(false);
  const [reportButtonText, setReportButtonText] = useState('Report');
  const [answerVoted, setAnswerVoted] = useState(false);


  const handleAReport = () => {
    if(!answerReported) {
      axios.put(`/qa/answers/${answer.answer_id}/report`, {
        body: answer.answer_id
      })
      .then((response) => {
        console.log('Answer reported')
      })
      .catch((err) => {
        console.log('ERR REPORTING ANSWER ', err)
      })
    }
    setAnswerReported(true);
  }

  useEffect(() => {
    if (answerReported) {
      setReportButtonText('Reported')
    }
  }, [answerReported])

  const handleAnswerHelpful = () => {
      axios.put(`/qa/answers/${answer.answer_id}/helpful`, {
        body: answer.answer_id
      })
        .then((response) => {
          console.log('Answer Helpful')
          setHelpfulAnswer(helpfulAnswer + 1);
          setAnswerVoted(true);
        })
        .catch((err) => {
          console.log('ERR VOTING ANSWER HELPFUL ', err)
        })
  }

  return (
    <div className='answerModule'>
      <p>A: {answer.body}</p>
      <div className='answerInfo'>
        <div className='userDate'> <p> by: {answer.answerer_name} on {format(parseISO(answer.date), 'MMMM dd, yyyy')} |</p></div>
        {!answerVoted ? <div className='answerHelpful' onClick={handleAnswerHelpful}>Helpful? yes ({answer.helpfulness})</div>
         : <div className='answerHelpful'><p>Helpful? yes ({answer.helpfulness})</p></div>}
        <div className='answerReport' onClick={handleAReport}><p>| {reportButtonText}</p></div>
      </div>
    </div>
  )
}

export default Answers;