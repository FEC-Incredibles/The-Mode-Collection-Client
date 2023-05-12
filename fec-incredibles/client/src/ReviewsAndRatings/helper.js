/**
 * Helper function
 * that takes a review metadata object
 * returns the number of reviews
 */
const getTotalNumOfReviews = (reviewsMeta) => {
  return Object.values(reviewsMeta.recommended)
    .reduce(
      (accumulator, currentValue) => accumulator + Number(currentValue)
      , 0);
};

/**
 * Helper function
 * that takes a review metadata object
 * returns the average rating as a number with two decimal places
 */
const getAvgRating = (reviewsMeta) => {
  let ratings = reviewsMeta.ratings;
  let { sum, count } = Object.keys(ratings).reduce(
    (accumulator, currentKey) => {
      let currentValue = ratings[currentKey];
      accumulator.sum += Number(currentKey) * Number(currentValue);
      accumulator.count += Number(currentValue);
      return accumulator;
    }
    , { sum: 0, count: 0 });
  return count === 0 ? 0 : (sum / count).toFixed(2);
};

/**
 * Helper function
 * that takes a numerator and a denominator
 * returns the percentage of num over den
 */
const getPercentage = (num, den) => {
  num = Number(num);
  den = Number(den);
  if (!num || num === 0 || den === 0) {
    return 0;
  }
  return Math.round((num / den) * 100);
}


module.exports = {
  getTotalNumOfReviews,
  getAvgRating,
  getPercentage
}