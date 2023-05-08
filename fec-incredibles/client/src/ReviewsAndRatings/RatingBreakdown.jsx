import React from 'react';

const exampleMeta = {
  "product_id": "37313",
  "ratings": {
    "1": "6",
    "2": "3",
    "3": "20",
    "4": "45",
    "5": "31"
  },
  "recommended": {
    "false": "34",
    "true": "71"
  },
  "characteristics": {
    "Fit": {
      "id": 125036,
      "value": "2.4534883720930233"
    },
    "Length": {
      "id": 125037,
      "value": "2.6486486486486486"
    },
    "Comfort": {
      "id": 125038,
      "value": "2.7820512820512821"
    },
    "Quality": {
      "id": 125039,
      "value": "2.9397590361445783"
    }
  }
}

const RatingBreakdown = () => {

  const getTotalNumOfReviews = () => {
    return Object.values(exampleMeta.recommended)
    .reduce(
      (accumulator, currentValue) => accumulator + Number(currentValue)
      , 0);
    };

  const getAvgRating = () => {
    let ratings = exampleMeta.ratings;
    let sum = Object.keys(ratings).reduce(
      (accumulator, currentKey) => {
        let currentValue = ratings[currentKey];
        accumulator += Number(currentKey) * Number(currentValue);
        return accumulator;
      }
      , 0);
    return (sum / numOfReviews).toFixed(1);
  };

  const getPercentRecommended = () => {
    return Math.round((exampleMeta.recommended.true / numOfReviews) * 100);
  }

  const breakdownByStar = (numString) => {
    return Math.round((Number(exampleMeta['ratings'][numString]) / numOfReviews) * 100);
  }

  const starRating = (numRating) => {
    return ('★').repeat(numRating) + ('✩').repeat(5 - numRating);
  }

  const numOfReviews = getTotalNumOfReviews();
  const avgRating = getAvgRating();
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
      {Object.keys(exampleMeta.ratings).reverse().map((rating, idx) => {
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