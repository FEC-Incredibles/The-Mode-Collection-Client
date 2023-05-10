import React from 'react';

/**
 * props:
 * (required) numRating: a number with one decimal digit
 * (optional) size: size of the stars in pixel, default = 18
 * (optional) color: color of the stars, default = Candlelight
 */
const StarRating = ({ numRating, size, color }) => {

  const starSize = size || 18;
  const starColor = color || "#fbd323";

  /**
   * Helper function
   * that takes a number with one decimal digit
   * and returns an array of percents
   * e.g. (4.5) => [100, 100, 100, 100, 50]
   */
  const percentsRating = (numRating) => {
    let percentArray = new Array(5).fill(0);

    let wholeNumDigit = Math.trunc(numRating);
    let decimalDigit = (numRating - wholeNumDigit).toFixed(1) * 100;

    percentArray = percentArray.fill(100, 0, wholeNumDigit);
    percentArray = percentArray.fill(decimalDigit, wholeNumDigit, wholeNumDigit + 1)

    return percentArray;
  }


  return (
    <div className="star-rating">
      {percentsRating(numRating).map((percent, idx) =>
        <svg
          key={idx}
          height={starSize} width={starSize}
          viewBox="0 0 24 24" >
          <defs>
            <linearGradient id={`grad-${percent}-${color}`}>
              <stop offset="0%" stopColor={starColor} />
              <stop offset={`${percent}%`} stopColor={starColor} />
              <stop offset={`${percent}%`} stopColor="white" />
              <stop offset="100%" stopColor="white" />
            </linearGradient>
          </defs>
          <path
            fill={`url(#grad-${percent}-${color})`}
            stroke="black"
            strokeWidth="0.8"
            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
          />
        </svg>
      )}
    </div>
  )
}

export default StarRating;