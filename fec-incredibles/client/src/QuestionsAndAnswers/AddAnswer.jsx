import React, {useEffect, useState} from 'react';
import axios from 'axios';

const AddAnswer = ({currentQuestion, setAnswerList, addAnswer, setAddAnswer}) => {
  const [answerAnswer, setAnswerAnswer] = useState('');
  const [answerNickname, setAnswerNickname] = useState('');
  const [answerEmail, setAnswerEmail] = useState('');
  const [answerPosted, setAnswerPosted] = useState(false);


  const handleAnswerAnswer = (e) => {
    setAnswerAnswer(e.target.value);
  }

  const handleAnswerNickname = (e) => {
    setAnswerNickname(e.target.value);
  }

  const handleAnswerEmail = (e) => {
    setAnswerEmail(e.target.value);
  }

  const handleAnswerSubmit = (e) => {
    e.preventDefault();
    axios.post(`/qa/questions/${currentQuestion.question_id}/answers`, {
        body: answerAnswer,
        name: answerNickname,
        email: answerEmail,
        photos: []
    })
      .then((response) => {
        console.log('posted answer ', response.data)
        setAnswerPosted(true);
        setAddAnswer(false);
      })
      .catch((err) => {
        console.log('ERR POSTING AN ANSWER ', err)
      })
  }

  const handleCancel = () => {
    setAddAnswer(false);
  }

  useEffect(() => {
    axios.get(`/qa/questions/${currentQuestion.question_id}/answers?count=10`)
      .then((response) => {
        setAnswerList(response.data.results);
      })
      .catch((err) => {
        console.log('ERR GETTING THE NEW ANSWER LIST ', err)
      })
  }, [answerPosted, addAnswer])


  return (<div className='answerModal'>
        <form className='answerForm'>
          <div className='answerModalTitle'>
            <div>Submit Your Answer</div>
          </div>
          <div className='answerModalQuestion'>
            <label>{currentQuestion.question_body}</label>
          </div>
          <div>
            <input onChange={handleAnswerAnswer} className='answerModalAnswer' placeholder='Your Answer'/>
          </div>
          <div>
            <input onChange={handleAnswerNickname} className='answerModalInput' placeholder='Your Nickname'/>
          </div>
          <div>
            <input onChange={handleAnswerEmail} className='answerModalInput' placeholder='Your Email'/>
          </div>
          <div>
            <button onClick={handleCancel} className='answerCancel'>Cancel</button><button onClick={handleAnswerSubmit} className='answerSubmitBtn'>Submit</button>
          </div>
        </form>
    </div>
  )
}

export default AddAnswer;