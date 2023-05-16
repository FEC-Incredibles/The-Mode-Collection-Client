import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Product from './ProductOverview/Product.jsx'
import Questions from './QuestionsAndAnswers/Questions.jsx'
import Related from './RelatedItems/Related.jsx'
import Reviews from './ReviewsAndRatings/Reviews.jsx'
import ProductDetailsExtra from './ProductOverview/ProductDetailsExtra.jsx';

import { getAvgRating, emptyMeta } from './ReviewsAndRatings/helper.js';


const App = () => {
  const [currentItemID, setCurrentItemID] = useState(37315);
  const [currentItem, setCurrentItem] = useState();
  const [typedID, setTypedID] = useState();
  const [currentAvgRating, setCurrentAvgRating] = useState(0);
  const [currentReviewsMeta, setCurrentReviewsMeta] = useState();

    /**
     * 373__
     * 11 => camo onesie
     * 12 => [out of stock] sunglasses
     * 13 - 14 => pants
     * 15-19 => shoes
     * 20 => infinity stones
     * 21 => CURSED BROKEN EMPTY PRODUCT DATA
     * 22+ => "unknown area"
     */
  useEffect(() => {
    axios.get(`/products/${currentItemID}`)
    .then((response) => {
      setCurrentItem(response.data)
    })
  }, [currentItemID])

  useEffect(() => {
    axios.get(`/reviews/meta/?product_id=${currentItemID}`)
    .then(response => {
      // console.log('Reviews metadata: ', response.data)
      let avgRating = getAvgRating(response.data);
      setCurrentAvgRating(avgRating);
      setCurrentReviewsMeta(response.data);
    })
    .catch(error =>
      console.log('Error getting metadata at home page :melting_face:', error))
  }, [currentItemID])

  if (!currentItem) {
    return <div>loading</div>
  }
  return (
    <div id="main">
      <div >
        <img  src='https://i.pinimg.com/736x/a7/af/d9/a7afd91574d49720996cf0ea8b938cf4.jpg'></img>
        <p >MODE COLLECTION</p>
        <p >the clothing store for incredible people</p>
      </div>
      <div id="productRelated">
        <div className='widget'>
          <Product currentItem={currentItem} averageRating={currentAvgRating} />
          <ProductDetailsExtra productDetails={currentItem}/>
        </div>
        <Related currentItemID={currentItemID} />
      </div>
      <div id="questionsOutfit">
        <Related currentItemID={currentItemID} />
        <Questions currentItemID={currentItemID} />
      </div>
      {currentReviewsMeta && <Reviews
        currentItemID={currentItemID}
        avgRating={currentAvgRating}
        reviewsMeta={currentReviewsMeta}
      />}
      <nav style={{ display: "flex" }}>
        <h1>current item id {currentItemID}:exploding_head:</h1>
        <button
          type="button"
          onClick={() => {
            setCurrentItemID(currentItemID - 1);
          }}
        >
          previous
        </button>
        <button
          type="button"
          onClick={() => {
            setCurrentItemID(Number(currentItemID) + 1);
          }}
        >
          next
        </button>
        <input
          type="text"
          onChange={(e) => {
            setTypedID(e.target.value);
          }}
        ></input>
        <button
          type="button"
          onClick={() => {
            setCurrentItemID(typedID);
          }}
        >
          enter specific id
        </button>
      </nav>
    </div>
  );
};

export default App;