import React, { useState, useEffect } from 'react';

import ReviewTile from './ReviewTile.jsx';
import NewReviewForm from './NewReviewForm/NewReviewForm.jsx';

const ReviewList = (props) => {
  const {
    reviews,
    removeReview,
    currentDisplay,
    handleClickMoreReview,
    characteristics,
    reviewsMeta,
    togglePostedReview,
    productName } = props;

  const [createMode, setCreateMode] = useState(false);
  const [moreReview, setMoreReview] = useState(reviews.length >= 2);

  const toggleCreateMode = () => {
    setCreateMode(!createMode);
  }

  const toggleMoreReview = () => {
    setMoreReview(false);
    handleClickMoreReview();
  }

  return (
    <div id="review-list">

      {currentDisplay.length === 0 && (
        <div > No (unreported) reviews found. </div>
      )}

      {currentDisplay.length > 0 && (
        <div className="scrollable-list" data-testid="list">
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
        <button onClick={toggleMoreReview}> More Review </button>
      )}

      <button onClick={toggleCreateMode} > Add New Review </button>

      {createMode && (
        <div className="modal" data-testid="modal">
          <div className="modal-content">
            <button className="btn-close" onClick={toggleCreateMode}>
            <i class="fa-solid fa-xmark fa-2xl"></i></button>
            <NewReviewForm
              reviewsMeta={reviewsMeta}
              setCreateMode={setCreateMode}
              togglePostedReview={togglePostedReview}
              productName={productName} />
          </div>
        </div>
      )}

    </div>
  )
}

export default ReviewList;