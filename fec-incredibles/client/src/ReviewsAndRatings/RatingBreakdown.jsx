import React from 'react';

import StarRating from '../StarRating.jsx';
import { getAvgRating, starRating } from './helper.js';

const RatingBreakdown = ({ reviewsMeta, numOfReviews, avgRating }) => {

  // const avgRating = getAvgRating(reviewsMeta);
  // const avgRating = 3.6;


  console.log('numOfReviews inside RatingBreakdown: ', numOfReviews)

  const getPercentRecommended = () => {
    let count = Number(reviewsMeta.recommended.true);
    if (count === 0) {
      return 0;
    }

    return Math.round((count / numOfReviews) * 100);
  }

  const breakdownByStar = (numString) => {
    let count = Number(reviewsMeta['ratings'][numString])
    if (!count || count === 0 || numOfReviews === 0) {
      return 0;
    }

    let result = Math.round((count / numOfReviews) * 100);
    console.log('result: ', result)
    return result;
  }

  const percentRecommended = getPercentRecommended();


const ratingBreakdowns = ['5', '4', '3', '2', '1'];

if (numOfReviews === 0) {
  return (
    <div className="" id="rating-breakdown">

    <div className="breakdown-summary">
      <h1 className="breakdown-heading">{avgRating}</h1>
      {/* {starRating(Math.round(avgRating))} */}
      <StarRating rating={avgRating} />
    </div>

    <br />


    <br />
    {ratingBreakdowns.map((rating, idx) => {
      return (
        <div className="breakdown-by-star" key={idx} >
          {/* TODO: click on it will filter the displaying reviews */}
          <i>{rating} stars</i>
          <div className="breakdown-bar">
            <div className="bar" style={{ width: `0%` }}>
            </div>
          </div>
          <i>{0}%</i>
        </div>
      );
    })}
  </div>
  )
}


  return (
    <div className="" id="rating-breakdown">

      <div className="breakdown-summary">
        <h1 className="breakdown-heading">{avgRating}</h1>
        {/* {starRating(Math.round(avgRating))} */}
        <StarRating rating={avgRating} />
      </div>

      <br />
      {numOfReviews > 0 && (
        <div>
        {percentRecommended}% of reviews recommend this product
      </div>
      )}

      <br />
      {ratingBreakdowns.map((rating, idx) => {
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