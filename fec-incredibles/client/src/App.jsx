import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Product from './ProductOverview/Product.jsx'
import Questions from './QuestionsAndAnswers/Questions.jsx'
import Related from './RelatedItems/Related.jsx'
import Reviews from './ReviewsAndRatings/Reviews.jsx'
import NavBar from './NavBar.jsx';

import { getTotalNumOfReviews, getAvgRating, emptyMeta } from './ReviewsAndRatings/helper.js';


const App = () => {
  const [currentItemID, setCurrentItemID] = useState(37315);
  const [currentItem, setCurrentItem] = useState();
  const [typedID, setTypedID] = useState();
  const [currentAvgRating, setCurrentAvgRating] = useState(0);
  const [currentReviewsMeta, setCurrentReviewsMeta] = useState();
  const [outfit, setOutfit] = useState([])
  const [numOfReviews, setNumOfReviews] = useState(0);

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
      let avgRating = getAvgRating(response.data);
      let totalReviews = getTotalNumOfReviews(response.data);
      setCurrentAvgRating(avgRating);
      setNumOfReviews(totalReviews);
      setCurrentReviewsMeta(response.data);
    })
    .catch(error => console.error(error))
  }, [currentItemID])

  if (!currentItem) {
    return <div>loading</div>
  }
  return (
    <div id="main">
      <div id='logo-container'>
        <img id='logo-image' src='https://i.pinimg.com/736x/a7/af/d9/a7afd91574d49720996cf0ea8b938cf4.jpg'></img>
        <div id='logo-text'>
          <h1 >MODE COLLECTION</h1>
          <p >clothing for incredible people</p>
        </div>
      </div>
      <div id="productRelated">
        <Product currentItem={currentItem} averageRating={currentAvgRating} outfit={outfit} setOutfit={setOutfit} reviews={numOfReviews}/>
        <Related currentItemID={currentItemID} type={'Outfit'} outfit={outfit} setOutfit={setOutfit}/>
      </div>
      <div id="questionsOutfit">
        <Related currentItemID={currentItemID} type={'Related'}/>
        <Questions currentItemID={currentItemID}/>
      </div>
      {currentReviewsMeta && <Reviews reviewsMeta={currentReviewsMeta} productName={currentItem.name}/>}
      <NavBar currentItemID={currentItemID} setCurrentItemID={setCurrentItemID} typedID={typedID} setTypedID={setTypedID}/>
    </div>
  );
};

export default App;

