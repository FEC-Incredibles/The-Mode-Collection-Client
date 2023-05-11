
const getTotalNumOfReviews = (reviewsMeta) => {
  return Object.values(reviewsMeta.recommended)
      .reduce(
          (accumulator, currentValue) => accumulator + Number(currentValue)
          , 0);
};

const getAvgRating = (reviewMeta) => {
  let numOfReviews = getTotalNumOfReviews(reviewMeta);
  if (numOfReviews === 0) {
    return 0;
  }

  let ratings = reviewMeta.ratings;
  let sum = Object.keys(ratings).reduce(
    (accumulator, currentKey) => {
      let currentValue = ratings[currentKey];
      accumulator += Number(currentKey) * Number(currentValue);
      return accumulator;
    }
    , 0);
  return (sum / numOfReviews).toFixed(1);
};

const starRating = (numRating) => {
  return ('★').repeat(numRating) + ('✩').repeat(5 - numRating);
}

module.exports = {
  getTotalNumOfReviews,
  getAvgRating,
  starRating
 }