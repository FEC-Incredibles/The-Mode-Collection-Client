import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import Product from './ProductOverview/Product.jsx'
import Questions from './QuestionsAndAnswers/Questions.jsx'
import Related from './RelatedItems/Related.jsx'
import Reviews from './ReviewsAndRatings'


const App = () => {
  const [currentItemID, setCurrentItemID] = useState();

  useEffect(() => {
    Axios.get('/products')
    .then((response) => {
      let randomIndex = Math.floor(Math.random() * 5)
      setCurrentItemID(response.data[randomIndex].id)
    })
  }, [])

  return (
    <div id='main'>
     <h1>Hello, The Incredibles {currentItemID}🤯</h1>
     <Product currentItemID={currentItemID}/>
     <Related currentItemID={currentItemID}/>
     <Questions currentItemID={currentItemID}/>
     <Reviews currentItemID={currentItemID}/>
    </div>
  )
}

export default App;