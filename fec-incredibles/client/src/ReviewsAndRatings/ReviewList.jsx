import React, { useState } from 'react';


import ReviewTile from './ReviewTile.jsx';

const ReviewList = ({ reviews }) => {

const [ createMode, setCreateMode ] = useState(false);

const toggleCreateMode = () => {
  setCreateMode(!createMode);
}

  return (
    <div className="">

      {reviews.map((review, idx) => {
        return (
          <ReviewTile review={review} key={idx} />
        )
      })}

      <button> More Review </button>
      <button onClick={toggleCreateMode} > Add New Review </button>

      {createMode && (
        <div className="modal">
          <div className="modal-content">
            <button onClick={toggleCreateMode}> ❌ </button>


              <form className="form-new-review">

              </form>

          </div>
        </div>
      )}

    </div>
  )
}

export default ReviewList;