import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import Product from './ProductOverview/Product.jsx'
import Questions from './QuestionsAndAnswers/Questions.jsx'
import Related from './RelatedItems/Related.jsx'
import Reviews from './ReviewsAndRatings'


const App = () => {
  const [currentItemID, setCurrentItemID] = useState();
  const [allProducts, setAllProducts] = useState();
  const [typedID, setTypedID] = useState();

  useEffect(() => {
    Axios.get('/products')
    .then((response) => {
      let randomIndex = Math.floor(Math.random() * 50)
      setCurrentItemID(response.data[randomIndex].id)
    })
  }, [])

  return (
    <div id='main'>
     <h1>current item id  {currentItemID}🤯</h1>
     <nav style={{display:'flex'}}>
      <button type='button' onClick={() => {setCurrentItemID(currentItemID-1)}}>previous</button>
      <button type='button' onClick={() => {setCurrentItemID(currentItemID+1)}}>next</button>
      <input type='text' onChange={(e) => {
        setTypedID(e.target.value)
      }}></input>
      <button type='button' onClick={() => {
        setCurrentItemID(typedID)
      }}>enter specific id</button>
     </nav>
     <Product currentItemID={currentItemID}/>
     <Related currentItemID={currentItemID}/>
     <Questions currentItemID={currentItemID}/>
     <Reviews currentItemID={currentItemID}/>
    </div>
  )
}

export default App;
