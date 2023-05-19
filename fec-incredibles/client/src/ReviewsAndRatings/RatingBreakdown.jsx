import React from 'react';

import StarRating from '../StarRating.jsx';
import { getTotalNumOfReviews, getAvgRating, getPercentage } from './helper.js';

const RatingBreakdown = ({ reviewsMeta, filters, setFilters }) => {

  const numOfReviews = getTotalNumOfReviews(reviewsMeta);
  const avgRating = getAvgRating(reviewsMeta);

  const breakdownByStar = (numString) => {
    let count = reviewsMeta['ratings'][numString];
    return getPercentage(count, numOfReviews);
  }

  const percentRecommended = () =>
    getPercentage(reviewsMeta.recommended.true, numOfReviews);

  const handleToggleFilter = (rating) => {
    rating = Number(rating)

    if (filters.indexOf(rating) === -1) {
      setFilters([...filters, rating])
    } else {
      setFilters(filters.filter(x => x != rating));
    }
  }

  const handleClearFilter = () => {
    setFilters([]);
  }

  return (
    <div className="" id="rating-breakdown">

      <div className="breakdown-summary">
        <h1 className="breakdown-heading" data-testid="avg-rating">
          {Number(avgRating).toFixed(1)}
        </h1>
        <StarRating rating={avgRating} size={34}/>
      </div>

      <br />
      <div className="breakdown-recommended" data-testid="recommended">
        {percentRecommended()}% of reviews recommend this product
      </div>


      <br />
      {['5', '4', '3', '2', '1'].map((rating, idx) => {
        return (
          <div className="breakdown-by-star" key={idx}
            onClick={() => handleToggleFilter(rating)}
            data-testid={`rating-bar-${rating}`}>
            <i>{rating} stars</i>
            <div className="breakdown-bar">
              <div className="bar" style={{ width: `${breakdownByStar(rating)}%` }}>
              </div>
            </div>
            <i>{breakdownByStar(rating)}%</i>
          </div>
        );
      })}

      <br />
      {filters.length > 0 && (
        <div className="filters-container">
          Filters:
          {filters.map((rating, idx) =>
            <i key={idx} onClick={() => handleToggleFilter(rating)}>
              {rating} stars ✘
            </i>
          )}
          <button onClick={handleClearFilter}>Clear all filters</button>
        </div>
      )}

    </div>
  )
}

export default RatingBreakdown;