import React from 'react';

import characteristicsScale from './characteristics.js';

const ProductBreakdown = ({ characteristics, numOfReviews }) => {

  const breakdownByFactor = (factor) => {
    return Math.round((Number(characteristics[factor].value) / 5) * 100);
  }

  return (
    <div className="" id="product-breakdown">

      {Object.keys(characteristics).map((factor, idx) => {
        return (
          <div className="breakdown-by-factor" key={idx}>
            <div>{factor}</div>

            <div className="breakdown-bar">
              <i style={{ left: `${breakdownByFactor(factor)}%` }}>▼</i>
            </div>

            <div className="factor-labels">
              {characteristicsScale.scale[factor].map((scale, idx) =>
                <i key={idx} >{scale}</i>
                )}
            </div>

          </div>
        );
      })}
      </div>
  )
}

export default ProductBreakdown;