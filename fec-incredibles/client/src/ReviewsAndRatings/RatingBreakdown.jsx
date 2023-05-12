import React from 'react';

import StarRating from '../StarRating.jsx';
import { getTotalNumOfReviews, getAvgRating, getPercentage } from './helper.js';

const RatingBreakdown = ({ reviewsMeta, updateFilters }) => {

  const numOfReviews = getTotalNumOfReviews(reviewsMeta);
  const avgRating = getAvgRating(reviewsMeta);

  const breakdownByStar = (numString) => {
    let count = reviewsMeta['ratings'][numString];
    return getPercentage(count, numOfReviews);
  }

  const percentRecommended = () =>
    getPercentage(reviewsMeta.recommended.true, numOfReviews);

  const handleClickFilter = (rating) => {
    console.log("Clicked ", rating)
    updateFilters(Number(rating));
  }

  return (
    <div className="" id="rating-breakdown">

      <div className="breakdown-summary">
        <h1 className="breakdown-heading">{Number(avgRating).toFixed(1)}</h1>
        <StarRating rating={avgRating} />
      </div>

      <br />
      <div>
        {percentRecommended()}% of reviews recommend this product
      </div>


      <br />
      {['5', '4', '3', '2', '1'].map((rating, idx) => {
        return (
          <div className="breakdown-by-star" key={idx}
          onClick={() => handleClickFilter(rating)}>
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