
const getTotalNumOfReviews = (reviewMeta) => {
  return Object.values(reviewMeta.recommended)
      .reduce(
          (accumulator, currentValue) => accumulator + Number(currentValue)
          , 0);
};

const getAvgRating = (reviewMeta) => {
  let ratings = reviewMeta.ratings;
  let sum = Object.keys(ratings).reduce(
    (accumulator, currentKey) => {
      let currentValue = ratings[currentKey];
      accumulator += Number(currentKey) * Number(currentValue);
      return accumulator;
    }
    , 0);
  return (sum / getTotalNumOfReviews(reviewMeta)).toFixed(1);
};

module.exports = {
  getTotalNumOfReviews,
  getAvgRating
 }