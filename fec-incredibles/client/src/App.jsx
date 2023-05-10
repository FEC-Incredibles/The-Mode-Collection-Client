import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import Product from './ProductOverview/Product.jsx'
import Questions from './QuestionsAndAnswers/Questions.jsx'
import Related from './RelatedItems/Related.jsx'
import Reviews from './ReviewsAndRatings'


import { getReviews, getMetaData } from './ReviewsAndRatings/temApiCall.js';
import { getAvgRating } from './ReviewsAndRatings/helper.js';

const App = () => {
  const [currentItemID, setCurrentItemID] = useState();
  const [allProducts, setAllProducts] = useState();
  const [typedID, setTypedID] = useState();
  const [currentAvgRating, setCurrentAvgRating] = useState(0);
  const [currentReviewsMeta, setCurrentReviewsMeta] = useState();

  useEffect(() => {
    Axios.get('/products')
      .then((response) => {
        let randomIndex = Math.floor(Math.random() * 50)
        setCurrentItemID(response.data[randomIndex].id)
      })
  }, [])

  useEffect(() => {
    if (currentItemID) {
      // TODO: remove temApiCall once set up routes in server
      getMetaData(currentItemID)
        .then(response => {
          // console.log('Reviews metadata: ', response.data)
          let avgRating = getAvgRating(response.data);
          setCurrentAvgRating(avgRating);
          setCurrentReviewsMeta(response.data);
        })
        .catch(error =>
          console.log('Error getting reviews from App.jsx 🫠', error))
    }
  }, [currentItemID])

  return (
    <div id='main'>
      <h1>current item id  {currentItemID}🤯</h1>
      <nav style={{ display: 'flex' }}>
        <button type='button' onClick={() => { setCurrentItemID(currentItemID - 1) }}>previous</button>
        <button type='button' onClick={() => { setCurrentItemID(currentItemID + 1) }}>next</button>
        <input type='text' onChange={(e) => {
          setTypedID(e.target.value)
        }}></input>
        <button type='button' onClick={() => {
          setCurrentItemID(typedID)
        }}>enter specific id</button>
      </nav>
      <Product currentItemID={currentItemID} />
      <Related currentItemID={currentItemID} />
      <Questions currentItemID={currentItemID} />
      <Reviews
        currentItemID={currentItemID}
        avgRating={currentAvgRating}
        reviewsMeta={currentReviewsMeta} />
    </div>
  )
}

export default App;
