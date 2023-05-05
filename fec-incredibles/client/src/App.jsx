import React, { useState } from 'react';
import Product from './ProductOverview/Product.jsx'
import Questions from './QuestionsAndAnswers/Questions.jsx'
import Related from './RelatedItems/Related.jsx'
import Reviews from './ReviewsAndRatings/Reviews.jsx'


const App = () => {
  const [currentItemID, setCurrentItemID] = useState(37311);
  return (
    <div>
     <h1>Hello, The Incredibles 🤯</h1>
     <Product currentItemID={currentItemID}/>
     <Related currentItemID={currentItemID}/>
     <Questions currentItemID={currentItemID}/>
     <Reviews currentItemID={currentItemID}/>
    </div>
  )
}

export default App;