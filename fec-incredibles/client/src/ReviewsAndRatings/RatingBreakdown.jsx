import React from 'react';

import { getAvgRating, starRating } from './helper.js';

const RatingBreakdown = ({ reviewsMeta, numOfReviews }) => {

  const avgRating = getAvgRating(reviewsMeta);

  const getPercentRecommended = () => {
    return Math.round((reviewsMeta.recommended.true / numOfReviews) * 100);
  }

  const breakdownByStar = (numString) => {
    return Math.round((Number(reviewsMeta['ratings'][numString]) / numOfReviews) * 100);
  }

  const percentRecommended = getPercentRecommended();


  return (
    <div className="" id="rating-breakdown">

      {/* TODO: partially filled stars */}
      <div className="breakdown-summary">
        <h1 className="breakdown-heading">{avgRating}</h1>
        {starRating(Math.round(avgRating))}
      </div>

      <br />
      <div>
        {percentRecommended}% of reviews recommend this product
      </div>

      <br />
      {Object.keys(reviewsMeta.ratings).reverse().map((rating, idx) => {
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