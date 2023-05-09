import React, { useState } from 'react';
import { format, parseISO } from 'date-fns';

import ReviewImage from './ReviewImage.jsx';

import { starRating } from './helper.js';

const ReviewTile = ({ review }) => {

  const truncatedText = (text, limit) => {
    let result = [text];
    if (text.length > limit) {
      result[0] = text.substring(0, limit + 1) + '...';
      result[1] = '...' + text.substring(limit + 1);
    }
    return result;
  }
  let truncatedSummary = truncatedText(review.summary, 60);
  let truncatedBody = truncatedText(review.body, 250);

  const [ reviewBody, setReviewBody ] = useState(truncatedBody[0]);
  const [ expandBody, setExpandBody ] = useState(false);


  const handleClickHelpful = () => {
    // TODO: make a PUT request to /reviews/:review_id/helpful
  }

  const handleClickReport = () => {
    // TODO: make a PUT request to /reviews/:review_id/report
  }

  const handleExpandBody = () => {
    if (expandBody) {
      setReviewBody(truncatedBody[0]);
    } else {
      setReviewBody(review.body);
    }
    setExpandBody(!expandBody);
  }


  return (
    <div className="review-tile">

      <div className="review-tile-header">
        <div>{starRating(review.rating)} </div>
        {/* TODO: verified users */}
        <i>{review.reviewer_name}</i>
        <i>{format(parseISO(review.date), 'MMMM dd, yyyy')}</i>
      </div>


      {truncatedSummary[1] ? (
        <div className="review-tile-title">
          {truncatedSummary[0]}
          <div className="review-tile-title-capped">{truncatedSummary[1]}</div>
        </div>
      ) : (
        <div className="review-tile-title">
          {truncatedSummary[0]}
        </div>
      )}

      {truncatedBody[1] ? (
        <div className="review-tile-body">
          <div data-testid="review-body">{reviewBody} </div>
          {expandBody || <i id="btn-show-more" onClick={handleExpandBody} >Show more</i>}
          {expandBody && <i onClick={handleExpandBody} >Show less</i>}
        </div>
      ) : (
        <div className="review-tile-body">
          {review.body}
        </div>
      )}

      <div className="review-tile-thumbnail">
        {review.photos.map((photo, idx) => {
          return (
            <ReviewImage photo={photo} key={idx} />
          )
        })}
      </div>

      {review.recommend && (
        <div className="review-tile-recommend">✔️ I recommended this product.</div>
      )}

      {review.response && (
        <div className="review-tile-response">
          <b>Response:</b>
          <p>{review.response}</p>
        </div>
      )}


      <div className="review-tile-footer">
        Helpful?
        <i onClick={handleClickHelpful}>YES</i>
        ({review.helpfulness})  |
        <i onClick={handleClickReport}> REPORT </i>
      </div>

    </div>
  )
}

export default ReviewTile;