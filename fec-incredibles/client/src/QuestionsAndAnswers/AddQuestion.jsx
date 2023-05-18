import react, {useEffect, useState} from 'react';
import axios from 'axios';


const AddQuestion = ({currentItemID, setAddQuestion, addQuestion, setQuestionList}) => {
  const [questionInput, setQuestionInput] = useState('');
  const [questionNickname, setQuestionNickname] = useState('');
  const [questionEmail, setQuestionEmail] = useState('');
  const [questionPosted, setQuestionPosted] = useState(false);

  const handleQuestionInput = (e) => {
    setQuestionInput(e.target.value);
  }

  const handleQuestionNickname = (e) => {
    setQuestionNickname(e.target.value);
  }

  const handleQuestionEmail = (e) => {
    setQuestionEmail(e.target.value);
  }

  const handleQuestionSubmit = (e) => {
    e.preventDefault();
    axios.post(`/qa/questions/?product_id=${currentItemID}`, {
      body: questionInput,
      name: questionNickname,
      email: questionEmail,
      product_id: currentItemID
    })
    .then((response) => {
      console.log('POSTED QUESTION');
      setQuestionPosted(true);
      setAddQuestion(false);
    })
  }

  useEffect(() => {
    axios.get(`/qa/questions/?product_id=${currentItemID}&count=100`)
      .then((response) => {
        setQuestionList(response.data.results)
      })
      .catch((err) => {
        console.log('ERR GETTING NEW Q LIST ', err)
      })
  }, [questionPosted, addQuestion])

  return (<div className='questionModal'>
        <form className='questionForm'>
          <div className='questionModalTitle'>
            <div>Submit Your Question</div>
          </div>
          <div>
            <input onChange={handleQuestionInput} className='questionModalInput' placeholder='Your Question'/>
          </div>
          <div>
            <input onChange={handleQuestionNickname} className='questionModalInput' placeholder='Your Nickname'/>
          </div>
          <div>
            <input onChange={handleQuestionEmail} className='questionModalInput' placeholder='Your Email'/>
            <label>For authentication reasons you will not be emailed.</label>
          </div>
          <div>
            <button onClick={handleQuestionSubmit} >Submit</button>
          </div>
        </form>
    </div>
  )
}

export default AddQuestion;
