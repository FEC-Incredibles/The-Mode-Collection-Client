import React from 'react';



const RatingBreakdown = ({ reviewsMeta, numOfReviews }) => {

  // const getTotalNumOfReviews = () => {
  //   return Object.values(reviewsMeta.recommended)
  //   .reduce(
  //     (accumulator, currentValue) => accumulator + Number(currentValue)
  //     , 0);
  //   };
  // const numOfReviews = getTotalNumOfReviews();

  const getAvgRating = () => {
    let ratings = reviewsMeta.ratings;
    let sum = Object.keys(ratings).reduce(
      (accumulator, currentKey) => {
        let currentValue = ratings[currentKey];
        accumulator += Number(currentKey) * Number(currentValue);
        return accumulator;
      }
      , 0);
    return (sum / numOfReviews).toFixed(1);
  };
  const avgRating = getAvgRating();

  const getPercentRecommended = () => {
    return Math.round((reviewsMeta.recommended.true / numOfReviews) * 100);
  }

  const breakdownByStar = (numString) => {
    return Math.round((Number(reviewsMeta['ratings'][numString]) / numOfReviews) * 100);
  }

  const starRating = (numRating) => {
    return ('★').repeat(numRating) + ('✩').repeat(5 - numRating);
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
            <a>{rating} stars</a>
            <div className="breakdown-bar">
              <div className="bar" style={{ width: `${breakdownByStar(rating)}%` }}>
              </div>
            </div>
          </div>
        );
      })}



    </div>
  )
}

export default RatingBreakdown;