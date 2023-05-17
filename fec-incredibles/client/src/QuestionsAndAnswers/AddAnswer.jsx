import React from 'react';

const AddAnswer = ({currentQuestion}) => {
  return (<div className='answerModal'>
        <form className='answerForm'>
          <div className='answerModalTitle'>
            <div>Submit Your Answer</div>
          </div>
          <div className='answerModalQuestion'>
            <label>{currentQuestion}</label>
          </div>
          <div>
            <input className='answerModalAnswer' placeholder='hello'/>
          </div>
          <div>
            <input/>
          </div>
          <div>
            <input/>
          </div>
          <div>
            <input/>
          </div>
        </form>
    </div>
  )
}

export default AddAnswer;