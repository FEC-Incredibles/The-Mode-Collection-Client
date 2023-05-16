import React from 'react';

import characteristicsScale from './characteristics.js';
import { getPercentage } from './helper.js';

const ProductBreakdown = ({ characteristics }) => {

  const breakdownByFactor = (factor) => {
    let count = characteristics[factor].value;
    return getPercentage(count, 5);
  }

  return (
    <div className="" id="product-breakdown">

      {Object.keys(characteristics).map((factor, idx) => {
        return (
          <div className="breakdown-by-factor" key={idx}>
            <div>{factor}</div>

            <div className="breakdown-bar">
              {breakdownByFactor(factor) >= 0 &&
                <i data-testid={factor}
                style={{ left: `${breakdownByFactor(factor)}%` }}>▼</i>
              }
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