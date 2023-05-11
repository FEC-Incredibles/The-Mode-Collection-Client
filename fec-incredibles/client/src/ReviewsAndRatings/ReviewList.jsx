import React, { useState, useEffect } from 'react';


import ReviewTile from './ReviewTile.jsx';

const ReviewList = ({ reviews }) => {

  const [createMode, setCreateMode] = useState(false);
  const [moreReview, setMoreReview] = useState(reviews.length >= 2);
  const [currentDisplay, setCurrentDisplay] = useState(reviews.slice(0, 2));

  // useEffect(() => {
  //   if (reviews.length === currentDisplay.length) {
  //     setMoreReview(false);
  //   }
  // }, [currentDisplay])

  const toggleCreateMode = () => {
    setCreateMode(!createMode);
  }

  const handleClickMore = () => {
    let currentLength = currentDisplay.length;
    if (reviews.length > currentLength) {
      setCurrentDisplay(reviews.slice(0, currentLength + 2));
      if (reviews.length <= currentLength + 2) {
        setMoreReview(false);
      }
    }
  }

  return (
    <div id="review-list">

      <div className="scrollable-list">
        {currentDisplay.map((review, idx) => {
          return (
            <ReviewTile review={review} key={idx} />
          )
        })}
        {moreReview || (
          <h6> --- No more reviews --- </h6>
        )}
      </div>

      {moreReview && (
        <button onClick={handleClickMore}> More Review </button>
      )}

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