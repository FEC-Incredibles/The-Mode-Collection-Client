import React, { useState } from 'react';
import axios from 'axios';

import Characteristics from './Characteristics.jsx';
import { ratings } from '../characteristics.js';
import StarRating from '../../StarRating.jsx';

const NewReviewForm = ({ reviewsMeta, setCreateMode, togglePostedReview }) => {

  const [rating, setRating] = useState(0);

  const features = Object.keys(reviewsMeta.characteristics).map(feature => {
    return { "name": feature, "id": reviewsMeta.characteristics[feature].id };
  })
  // console.log("features", features)

  const handleClickStar = (num) => {
    // console.log("Clicked", typeof num, num);
    setRating(num);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    let formData = new FormData(e.target);
    const formObj = Object.fromEntries(formData.entries());
    // console.log("formObj", formObj);

    const characteristics = Object.keys(formObj).reduce((accumulator, currentKey) => {
      if (currentKey.includes('factor-')) {
        let id = currentKey.split('-')[1];
        accumulator[id] = Number(formObj[currentKey]);
      }
      return accumulator;
    }, {});

    // console.log("characteristics", characteristics);

    // process data
    let newReview = {
      "product_id": Number(reviewsMeta.product_id),
      "rating": rating,
      "summary": formObj.summary,
      "body": formObj.body,
      "recommend": formObj.recommended === 'yes',
      "name": formObj.name,
      "email": formObj.email,
      "photos": [],
      "characteristics": characteristics
    }

    // console.log("newReview", newReview);

    axios.post('/reviews', newReview)
    .then((response) => {
      // console.log("Posted review", response)
      setCreateMode(false);
      togglePostedReview();
    })
    .catch(error => console.error(error))
  }

  return (
    <form className="form-new-review" onSubmit={handleSubmit}>
      <h3>Write Your Review
        {/* <h4>About the  </h4> */}
      </h3>

      <div className='form-row'>
        <label htmlFor='new-rating'>How would you rate it? *</label>
        <StarRating rating={rating} handler={handleClickStar} />
        <i>{ratings[rating]}</i>
      </div>

      <div className='form-row'>
        <div >Do you recommend this product? *</div>

        <div>
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
        {Object.keys(reviewsMeta.characteristics).map((factor, idx) => {
          // console.log('factor', factor)
          let id = reviewsMeta.characteristics[factor].id;
          return (
            <Characteristics key={idx} factor={factor} id={id}/>
          );
        })}
      </div>

      <div className="">
        <label htmlFor="name">
          Nickname *
          <input type="text" name="name" required/>
        </label>
      </div>

      <div className="">
        <label htmlFor="email"> Email * </label>
        <input type="email" name="email" required/>
      </div>

      <br />
      {/* <input type="button" value="Submit Photos" /> */}

      <br />
      <div className="form-group">
        <div>
          <input type="text" name="summary" placeholder="Example: Best purchase ever!" />
        </div>

        {/* <label htmlFor="body"></label> */}
        <textarea name="body" rows={4} cols={40}
          placeholder="Why did you like the product or not?" required/>

      </div>

      <button type="submit"> Submit Review </button>

    </form>
  );
}

export default NewReviewForm;