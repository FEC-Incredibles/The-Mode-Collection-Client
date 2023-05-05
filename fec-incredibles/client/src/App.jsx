import React, { useState } from 'react';
import Product from './ProductOverview/Product.jsx'
import Questions from './QuestionsAndAnswers/Questions.jsx'
import Related from './RelatedItems/Related.jsx'
import Reviews from './ReviewsAndRatings/Reviews.jsx'


const App = () => {

  return (
    <div>
     <h1>Hello, The Incredibles 🤯</h1>
     <Product/>
     <Related/>
     <Questions/>
     <Reviews/>
    </div>
  )
}

export default App;