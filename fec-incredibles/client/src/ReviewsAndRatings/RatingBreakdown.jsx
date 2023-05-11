import React from 'react';

import StarRating from '../StarRating.jsx';
import { getAvgRating, starRating } from './helper.js';

const RatingBreakdown = ({ reviewsMeta, numOfReviews, avgRating }) => {

  // const avgRating = getAvgRating(reviewsMeta);
  // const avgRating = 3.6;


  const getPercentRecommended = () => {
    return Math.round((reviewsMeta.recommended.true / numOfReviews) * 100);
  }

  const breakdownByStar = (numString) => {
    return Math.round((Number(reviewsMeta['ratings'][numString]) / numOfReviews) * 100);
  }

  const percentRecommended = getPercentRecommended();





  return (
    <div className="" id="rating-breakdown">

      <div className="breakdown-summary">
        <h1 className="breakdown-heading">{avgRating}</h1>
        {/* {starRating(Math.round(avgRating))} */}
        <StarRating rating={avgRating} />
      </div>

      <br />
      <div>
        {percentRecommended}% of reviews recommend this product
      </div>

      <br />
      {numOfReviews > 0 && Object.keys(reviewsMeta.ratings).reverse().map((rating, idx) => {
        return (
          <div className="breakdown-by-star" key={idx} >
            {/* TODO: click on it will filter the displaying reviews */}
            <i>{rating} stars</i>
            <div className="breakdown-bar">
              <div className="bar" style={{ width: `${breakdownByStar(rating)}%` }}>
              </div>
            </div>
            <i>{breakdownByStar(rating)}%</i>
          </div>
        );
      })}



    </div>
  )
}

export default RatingBreakdown;