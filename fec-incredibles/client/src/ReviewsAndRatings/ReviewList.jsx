import React from 'react';

import ReviewTile from './ReviewTile.jsx';

const ReviewList = ({ reviews }) => {

  const starRating = (numRating) => {
    return ('★').repeat(numRating) +('✩').repeat(5 - numRating);
  }

  return (
    <div className="review-container">
    {reviews.map((review, idx) => {
      return (
        <div className="review-tile review-container" key={idx}>

          <div>{starRating(review.rating)} </div>
          <h5>{review.summary} </h5>
          <p>{review.body}</p>
        </div>
      )
    })}

    </div>
  )
}

export default ReviewList;