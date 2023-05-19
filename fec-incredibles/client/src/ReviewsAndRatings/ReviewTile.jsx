import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import axios from 'axios';

import ReviewImage from './ReviewImage.jsx';
import StarRating from '../StarRating.jsx';



const ReviewTile = ({ review, removeReview }) => {

  const LIMIT_BODY = 250;
  const LIMIT_TITLE = 60;

  const truncatedText = (text, limit) => {
    let result = [text];
    if (text.length > limit) {
      result[0] = text.substring(0, limit + 1) + '...';
      result[1] = '...' + text.substring(limit + 1);
    }
    return result;
  }

  const [expandBody, setExpandBody] = useState(false);
  const [truncatedBody, SetTruncatedBody] = useState(
    truncatedText(review.body, LIMIT_BODY)
  );
  const [truncatedSummary, SetTruncatedSummary] = useState(
    truncatedText(review.summary, LIMIT_TITLE)
  );
  const [helpfulness, setHelpfulness] = useState(review.helpfulness);
  const [voted, setVoted] = useState(false);

  useEffect(() => {
    SetTruncatedBody(truncatedText(review.body, LIMIT_BODY));
    SetTruncatedSummary(truncatedText(review.summary, LIMIT_TITLE));
    setHelpfulness(review.helpfulness);
    // TODO: this is reset every time review updated,
    // meaning even clicking sorting resets it
    // maybe using session_id to ensure users can only click once
    setVoted(false);
  }, [review])

  // console.log('Single Review', review)

  const handleClickHelpful = () => {
    axios.put(`/reviews/${review.review_id}/helpful`)
      .then(() => {
        // console.log('Voted helpful for review: 🤩 ', review.review_id)
        setHelpfulness(helpfulness + 1);
        setVoted(true);
      })
      .catch(error => {
        console.log('Error voting helpful for review: ', review.review_id)
      })

  }

  const handleClickReport = () => {
    axios.put(`/reviews/${review.review_id}/report`)
      .then(() => {
        // console.log('Reported review: 👎 ', review.review_id)
        removeReview(review.review_id);
      })
      .catch(error => {
        console.log('Error reporting review: ', review.review_id, error)
      })

  }

  const handleExpandBody = () => {
    setExpandBody(!expandBody);
  }


  return (
    <div className="review-tile" data-testid="review-tile">

      <div className="review-tile-header">

        {/* <StarRating rating={review.rating} color={"#453f3d"} /> */}
        <StarRating rating={review.rating} size={24} />

        {/* TODO: verified users */}
        <i>{review.reviewer_name}</i>
        <i>{format(parseISO(review.date), 'MMMM dd, yyyy')}</i>
      </div>


      {truncatedSummary[1] ? (
        <p className="review-tile-title">
          {truncatedSummary[0]}
          <p className="review-tile-title-capped">{truncatedSummary[1]}</p>
        </p>
      ) : (
        <p className="review-tile-title">
          {truncatedSummary[0]}
        </p>
      )}

      {truncatedBody[1] ? (
        <div className="review-tile-body">
          <p data-testid="review-body">
            {expandBody ? review.body : truncatedBody[0]}
          </p>
          {expandBody || <i id="btn-show-more" onClick={handleExpandBody} >Show more</i>}
          {expandBody && <i onClick={handleExpandBody} >Show less</i>}
        </div>
      ) : (
        <p className="review-tile-body">
          {review.body}
        </p>
      )}

      <div className="review-tile-thumbnail">
        {review.photos.map((photo, idx) => {
          return (
            <ReviewImage photo={photo} key={idx} />
          )
        })}
      </div>

      {review.recommend && (
        <div className="review-tile-recommend">
          <i className="fa-solid fa-circle-check"></i>
          I recommended this product.
        </div>
      )}

      {review.response && (
        <div className="review-tile-response">
          <b>Response:</b>
          <p>{review.response}</p>
        </div>
      )}


      <div className="review-tile-footer" data-testid="review-footer">
        Helpful?
        {voted || <i onClick={handleClickHelpful} data-testid="markHelpful">YES</i>}
        {voted && <i className="voted">Thanks, we <span className="fa-solid fa-heart"></span> feedback!</i>}
        ({helpfulness})  |
        <i onClick={handleClickReport}> REPORT </i>
      </div>

    </div>
  )
}

export default ReviewTile;