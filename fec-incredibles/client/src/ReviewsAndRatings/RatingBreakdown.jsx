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

  // quantity
  const numOfReviews = Object.values(exampleMeta.recommended)
    .reduce(
      (accumulator, currentValue) => accumulator + Number(currentValue)
      , 0);


  const avgRating1 = () => {
    let ratings = exampleMeta.ratings;
    let sum = Object.keys(ratings).reduce(
      (accumulator, currentKey) => {
        let currentValue = ratings[currentKey];
        accumulator += Number(currentKey) * Number(currentValue);
        return accumulator;
      }
      , 0);
    return (sum / numOfReviews).toFixed(1);
  }

  const avgRating = (Object.keys(exampleMeta.ratings)
    .reduce(
      (accumulator, currentKey) => {
        let currentValue = exampleMeta.ratings[currentKey];
        accumulator += Number(currentKey) * Number(currentValue);
        return accumulator;
      }
      , 0) / numOfReviews).toFixed(1);


  const percentRecommended = Math.round((exampleMeta.recommended.true / numOfReviews) * 100);

  const breakdownByStar = (numString) => {
    return Math.round((Number(exampleMeta['ratings'][numString]) / numOfReviews) * 100);
  }


  const starRating = (numRating) => {
    return ('★').repeat(numRating) + ('✩').repeat(5 - numRating);
  }


  return (
    <div className="" id="rating-breakdown">

      {/* TODO: partially filled stars */}
      <div>
        <h1>{avgRating}</h1>
        {starRating(Math.round(avgRating))}
      </div>

      <br />
      <div>
        {percentRecommended}% of reviews recommend this product
      </div>

      <br />
      {Object.keys(exampleMeta.ratings).reverse().map((rating, idx) => {
        return (
          <div key={idx}>
            {/* TODO: click on it will filter the displaying reviews */}
            <a>{rating} stars</a>
            <div className="breakdown-by-star">

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