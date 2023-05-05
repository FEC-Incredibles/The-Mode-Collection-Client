import React from 'react'

import ProductBreakdown from './ProductBreakdown.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import SortOption from './SortOption.jsx';
import ReviewList from './ReviewList.jsx';

const Reviews = ({currentItemID}) => {

  return (
    <div className="review-container" id="review-module">
      {/* <p>this is the Reviews section</p> */}

      <div className="col-25">
        <ProductBreakdown />
        <RatingBreakdown />
      </div>


      <div className="col-75">
        <SortOption />
        <ReviewList />
      </div>

    </div>
  )
}

export default Reviews