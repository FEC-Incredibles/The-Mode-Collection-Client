import React from 'react';
import { format, parseISO } from 'date-fns';

const ReviewTile = ({ review  }) => {

  const starRating = (numRating) => {
    return ('★').repeat(numRating) + ('✩').repeat(5 - numRating);
  }

  return (
    <div className="review-tile review-container">

    <div className="review-tile-header">
      <div>{starRating(review.rating)} </div>
      <i>{review.reviewer_name}</i>
      <i>{format(parseISO(review.date), 'MMMM dd, yyyy')}</i>
    </div>

    <br />
    <h5>Summary: {review.summary} </h5>
    <p>Body: {review.body}</p>

    <div className="review-tile-thumbnail">
      {review.photos.map((photo, idx) => {
        return (
          <img
          key={idx}
          className="review-img"
          src={photo.url}
          alt={`Photo ${photo.id}`}
          />
        )
      })}
    </div>

    <br />
    {review.recommend && (
      <div>✔️ I recommended this product.</div>
    ) }

    {review.response && (
      <div>Response:
        <p>{review.response}</p>
      </div>
    )}

    <br />
    <div>Helpful?
      <i>👍 {review.helpfulness}  / </i>
      <i>👎 </i>
      </div>

  </div>
  )
}

export default ReviewTile;