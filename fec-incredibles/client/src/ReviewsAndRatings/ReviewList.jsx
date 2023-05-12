import React, { useState, useEffect } from 'react';


import ReviewTile from './ReviewTile.jsx';

const ReviewList = ({ reviews, removeReview, currentDisplay, displayTwoMoreReviews }) => {

  const [createMode, setCreateMode] = useState(false);
  const [moreReview, setMoreReview] = useState(reviews.length >= 2);
  // const [currentDisplay, setCurrentDisplay] = useState(reviews.slice(0, 2));

  // const displayTwoMoreReviews = () => {
  //   let currentLength = currentDisplay.length;
  //   if (reviews.length > currentLength) {
  //     setCurrentDisplay(reviews.slice(0, currentLength + 2));
  //   }
  // }

  // useEffect(() => {
  //   // update currentDisplay
  //   // let currentLength = currentDisplay.length;
  //   // if (reviews.length > currentLength) {
  //   //   setCurrentDisplay(reviews.slice(0, currentLength + 2));
  //   // }
  //   // console.log("Reviews inside list: ", reviews);
  //   if (currentDisplay.length === 0) {
  //     setCurrentDisplay(reviews.slice(0, 2));
  //   } else {
  //     setCurrentDisplay(reviews.slice(0, currentDisplay.length));
  //   }

  // }, [reviews])

  // useEffect(() => {
  //   // if (reviews.length > currentDisplay.length) {
  //   //   setMoreReview(true);
  //   // } else {
  //   //   setMoreReview(false);
  //   // }
  //   setMoreReview(reviews.length > currentDisplay.length);
  // }, [currentDisplay])

  const toggleCreateMode = () => {
    setCreateMode(!createMode);
  }

  return (
    <div id="review-list">

      {currentDisplay.length === 0 && (
        <div >
          No (unreported) reviews found.
        </div>
      )}

      {currentDisplay.length > 0 && (
        <div className="scrollable-list">
          {currentDisplay.map((review, idx) =>
            <ReviewTile
              review={review} key={idx} removeReview={removeReview} />
          )}
          {reviews.length > currentDisplay.length || (
            <h6> --- end of list --- </h6>
          )}
        </div>
      )}

      <br />
      {reviews.length > currentDisplay.length && (
        <button onClick={displayTwoMoreReviews}> More Review </button>
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