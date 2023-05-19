import React from 'react';

/**
 * props:
 * (required) numRating: a number
 * (optional) size: size of the stars in pixel, default = 18
 * (optional) color: color of the stars, default = Candlelight
 * (optional) handler: handler for clicking on stars
 */
const StarRating = ({ rating, size, color, handler }) => {

  const starSize = size || 18;
  const starColor = color || "#F9D949";
  const handleClick = handler || function(){};

  /**
   * Helper function
   * that takes a number with any number of decimal digits
   * and returns an array of percents
   * e.g. (4.511) => [100, 100, 100, 100, 51]
   */
  const percentsRating = (numRating) => {
    let percentArray = new Array(5).fill(0);

    let wholeNumDigit = Math.trunc(numRating);
    let decimalDigit = (numRating - wholeNumDigit).toFixed(2);

    percentArray = percentArray.fill(100, 0, wholeNumDigit);
    percentArray = percentArray.fill(decimalDigit * 100, wholeNumDigit, wholeNumDigit + 1)

    return percentArray;
  }


  return (
    <div className="rating-star">
      {percentsRating(rating).map((percent, idx) =>
        <svg
          key={idx}
          height={starSize} width={starSize}
          viewBox="0 0 24 24"
          data-testid={`star:grad-${percent}-${starColor}`}
          onClick={() => handleClick(idx + 1) }>
          <defs>
            <linearGradient id={`grad-${percent}-${starColor}`}>
              <stop offset="0%" stopColor={starColor} />
              <stop offset={`${percent}%`} stopColor={starColor} />
              <stop offset={`${percent}%`} stopColor="#e8e6e3" />
              <stop offset="100%" stopColor="#e8e6e3" />
            </linearGradient>
          </defs>
          <path
            fill={`url(#grad-${percent}-${starColor})`}
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