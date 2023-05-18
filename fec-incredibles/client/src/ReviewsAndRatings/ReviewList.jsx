import React, { useState, useEffect } from 'react';

import ReviewTile from './ReviewTile.jsx';
import NewReviewForm from './NewReviewForm/NewReviewForm.jsx';

const ReviewList = (props) => {
  const {
    reviews,
    removeReview,
    currentDisplay,
    handleClickMoreReview,
    characteristics,
    reviewsMeta,
    togglePostedReview } = props;

  const [createMode, setCreateMode] = useState(false);
  const [moreReview, setMoreReview] = useState(reviews.length >= 2);

  const toggleCreateMode = () => {
    setCreateMode(!createMode);
  }

  return (
    <div id="review-list">

      {currentDisplay.length === 0 && (
        <div > No (unreported) reviews found. </div>
      )}

      {currentDisplay.length > 0 && (
        <div className="scrollable-list" data-testid="list">
          {currentDisplay.map((review, idx) =>
            <ReviewTile
              review={review} key={idx} removeReview={removeReview} />
          )}
          {reviews.length > currentDisplay.length || (
            <h6> --- end of list --- </h6>
          )}
        </div>
      )}

      <br />
      {reviews.length > currentDisplay.length && (
        <button onClick={handleClickMoreReview}> More Review </button>
      )}

      <button onClick={toggleCreateMode} > Add New Review </button>

      {createMode && (
        <div className="modal" data-testid="modal">
          <div className="modal-content">
            <button onClick={toggleCreateMode}> ❌ </button>
            {/* <form className="form-new-review">
              <h3>Write Your Review
              </h3>

              <div className='form-row'>
                <div className='col-50'>
                  <label htmlFor='new-rating'>How would you rate it? *</label>
                </div>
                <div className='col-50'>
                  <input id='new-rating' name='address_line1' type="text" />
                </div>
              </div>

              <div className='form-row'>
                <div className='col-50'>
                  <label >Do you recommend this product? *</label>
                </div>

                <div className='col-50'>
                  <label>
                    <input type="radio" name="recommended" value="yes" />
                    YES
                  </label>
                  <label>
                    <input type="radio" name="recommended" value="no" />
                    NO
                  </label>

                </div>
              </div>

              <div className="form-group">

                <h4>characteristics *</h4>
                {Object.keys(characteristics).map((factor, idx) => {
                  return (
                    <div key={idx}>
                      <div className='form-row' key={idx}>

                        <label htmlFor='address_line1'>{factor}</label>


                        <div>
                          {scaleDetail[factor].map((scale, idx) =>
                            <input type="radio" name="factor" value={scale} id={"factor" + scale} />
                          )}
                        </div>


                      </div>
                      <div className="factor-labels">
                        {scaleDetail[factor].map((scale, idx) =>
                          <i key={idx} >{scale}</i>
                        )}
                      </div>

                    </div>

                    // <div className="breakdown-by-factor" key={idx}>
                    //   <div>{factor}</div>

                    //   <div className="breakdown-bar">
                    //     {breakdownByFactor(factor) >= 0 &&
                    //       <i data-testid={factor}
                    //         style={{ left: `${breakdownByFactor(factor)}%` }}>▼</i>
                    //     }
                    //   </div>

                    //   <div className="factor-labels">
                    //     {characteristicsScale.scale[factor].map((scale, idx) =>
                    //       <i key={idx} >{scale}</i>
                    //     )}
                    //   </div>

                    // </div>
                  );
                })}
              </div>
              <div className='form-row'>
                <div className='col-50'>
                  <label htmlFor='address_line1'>Address:</label>
                </div>
                <div className='col-50'>
                  <input id='address_line1' name='address_line1' type="text" />
                </div>
              </div>

              <div className='form-row'>
                <div className='col-50'>
                  <label htmlFor='address_line1'>Address:</label>
                </div>
                <div className='col-50'>
                  <input id='address_line1' name='address_line1' type="text" />
                </div>
              </div>



            </form> */}
            <NewReviewForm
            reviewsMeta={reviewsMeta}
            setCreateMode={setCreateMode}
            togglePostedReview={togglePostedReview} />
          </div>
        </div>
      )}

    </div>
  )
}

export default ReviewList;