import React from 'react';


import ReviewTile from './ReviewTile.jsx';

const ReviewList = ({ reviews }) => {



  return (
    <div className="review-container">

    {reviews.map((review, idx) => {
      return (
       <ReviewTile review={review} key={idx}/>
      )
    })}

    <button> More Review </button>
    <button> Add New Review </button>

    </div>
  )
}

export default ReviewList;