import React, { useState } from 'react';
import axios from 'axios';

import Characteristics from './Characteristics.jsx';
import { ratings } from '../characteristics.js';
import StarRating from '../../StarRating.jsx';

const exampleSummary = "Best purchase ever! Incredible!!";
const exampleBody = "This is an incredible review! I just wanted to add a few more words to meet the minimum character requirement. Thank you for making this far."

const NewReviewForm = ({ reviewsMeta, setCreateMode, togglePostedReview, productName }) => {

  const [rating, setRating] = useState(0);
  const [summary, setSummary] = useState(exampleSummary);
  const [body, setBody] = useState(exampleBody);
  const [name, setName] = useState("Team Incredible");
  const [email, setEmail] = useState("Incredible@example.com");

  const features = Object.keys(reviewsMeta.characteristics).map(feature => {
    return { "name": feature, "id": reviewsMeta.characteristics[feature].id };
  })
  // console.log("features", features)

  const handleClickStar = (num) => {
    // console.log("Clicked", typeof num, num);
    setRating(num);
  }

  const handleWriteSummary = (e) => {
    setSummary(e.target.value);
  }

  const handleWriteBody = (e) => {
    setBody(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    let formData = new FormData(e.target);
    const formObj = Object.fromEntries(formData.entries());
    console.log("formObj", formObj);

    const characteristics = Object.keys(formObj).reduce((accumulator, currentKey) => {
      if (currentKey.includes('factor-')) {
        let id = currentKey.split('-')[1];
        accumulator[id] = Number(formObj[currentKey]);
      }
      return accumulator;
    }, {});

    // verify input
    let invalidInput = [];
    if (rating === 0) {
      invalidInput.push("Rating can not be empty.");
    }
    // if (!formObj.recommended) {
    //   invalidInput.push("Recommended can not be empty.");
    // }
    // if (Object.keys(characteristics).length < Object.keys(reviewsMeta.characteristics)) {
    //   invalidInput.push("Characteristics can not be empty.");
    // }
    if (formObj.body.length < 50) {
      invalidInput.push("Review body should have at least 50 characters.");
    }

    if (invalidInput.length > 0) {
      alert(invalidInput.join('\n'));
      return;
    }

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

    console.log("newReview", newReview);

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
      <h3>Write Your Review</h3>
      <h4>  about the {productName} </h4>
      <hr />


      <div className='form-row'>
        <label htmlFor='new-rating'>How would you rate it? *</label>
        <StarRating rating={rating} handler={handleClickStar} size={24} />
        <i>{ratings[rating]}</i>
      </div>

      <div className='form-row'>
        <label >Do you recommend this product? *</label>

        <div>
          <label>
            <input type="radio" name="recommended" value="yes" required/>
            YES
          </label>
          <label>
            <input type="radio" name="recommended" value="no" />
            NO
          </label>
        </div>
      </div>


      <div className="form-group">
        <h4>Characteristics *</h4>
        {Object.keys(reviewsMeta.characteristics).map((factor, idx) => {
          // console.log('factor', factor)
          let id = reviewsMeta.characteristics[factor].id;
          return (
            <Characteristics key={idx} factor={factor} id={id} />
          );
        })}
      </div>

      <hr />
      <div className="form-row">
        <label htmlFor="name"> Name * </label>
        <input type="text" name="name" required
        value={name} onChange={(e) => { setName(e.target.value) }}/>
        <div></div>
      </div>

      <div className="form-row">
        <label htmlFor="email"> Email * </label>
        <input type="email" name="email" required
        value={email} onChange={(e) => { setEmail(e.target.value)  }}/>
        <div></div>
      </div>

      {/* <input type="button" value="Submit Photos" /> */}

      <div className="form-row-main">
        <label htmlFor="summary"> Summary</label>
        <input type="text" name="summary" size="60"
        placeholder="Example: Best purchase ever!"
        value={summary} onChange={handleWriteSummary}/>
        <div></div>
      </div>

      <div className="form-row-main">
        <label htmlFor="body">Body *</label>
        <textarea name="body" row={5} col={50}
          placeholder="Why did you like the product or not?" required
          pattern={/^.{50,}$/} title="Please enter at least 50 characters"
          value={body} onChange={handleWriteBody}/>
      </div>



      <button type="submit"> Submit Review </button>

    </form>
  );
}

export default NewReviewForm;