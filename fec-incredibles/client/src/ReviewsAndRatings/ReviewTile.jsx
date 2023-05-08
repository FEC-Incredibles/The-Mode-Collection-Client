import React from 'react';
import { format, parseISO } from 'date-fns';

const ReviewTile = ({ review }) => {

  // TODO: consistent stars through out the page
  const starRating = (numRating) => {
    return ('★').repeat(numRating) + ('✩').repeat(5 - numRating);
  }

  return (
    <div className="review-tile review-container">

      <div className="review-tile-header">
        <div>{starRating(review.rating)} </div>
        {/* TODO: verified users */}
        <i>{review.reviewer_name}</i>
        <i>{format(parseISO(review.date), 'MMMM dd, yyyy')}</i>
      </div>

      <br />
      <h5>Summary: {review.summary} </h5>
      {/* TODO: truncate body if it's longer than 250 characters */}
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
      )}

      {review.response && (
        <div>Response:
          <p>{review.response}</p>
        </div>
      )}

      <br />
      {/* TODO: enable users to click on icon and vote for helpfulness */}
      <div>Helpful?
        <i>👍 {review.helpfulness}  / </i>
        {/* TODO: figure out number of votes for not helpful */}
        <i>👎 {0} </i>
      </div>

    </div>
  )
}

export default ReviewTile;