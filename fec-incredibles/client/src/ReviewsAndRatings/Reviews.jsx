import React, { useState, useEffect } from 'react'

import ProductBreakdown from './ProductBreakdown.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import SortOption from './SortOption.jsx';
import ReviewList from './ReviewList.jsx';


const exampleReviews =  [
  {
      "review_id": 1276627,
      "rating": 5,
      "summary": "This product smacks!",
      "recommend": true,
      "response": null,
      "body": "Pretty incredible, it's super great although I don't even know what it is, I'm just trying to get 50 characters in this block, so it lets me post this review :)",
      "date": "2022-09-08T00:00:00.000Z",
      "reviewer_name": "username",
      "helpfulness": 3,
      "photos": []
  },
  {
      "review_id": 1277252,
      "rating": 3,
      "summary": "fsafsafsafsa",
      "recommend": false,
      "response": null,
      "body": "sfaagfhjdsgfJKHFLKJhnfsa",
      "date": "2022-10-25T00:00:00.000Z",
      "reviewer_name": "FSAFSAf",
      "helpfulness": 2,
      "photos": []
  },
  {
      "review_id": 1277597,
      "rating": 4,
      "summary": "this is an amazing product",
      "recommend": false,
      "response": null,
      "body": "I need to fill 50 words broski, plz let me fill a review :( ahhhhhhhh",
      "date": "2022-12-02T00:00:00.000Z",
      "reviewer_name": "CALLIE",
      "helpfulness": 0,
      "photos": [
          {
              "id": 2456758,
              "url": "https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg"
          }
      ]
  },
  {
      "review_id": 1277596,
      "rating": 4,
      "summary": "this is an amazing product",
      "recommend": false,
      "response": null,
      "body": "I need to fill 50 words broski, plz let me fill a review :( ahhhhhhhh",
      "date": "2022-12-02T00:00:00.000Z",
      "reviewer_name": "calvink",
      "helpfulness": 0,
      "photos": [
          {
              "id": 2456757,
              "url": "https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg"
          }
      ]
  },
  {
      "review_id": 1276630,
      "rating": 3,
      "summary": "I hope this is the last one I need to post",
      "recommend": false,
      "response": null,
      "body": "Hopefully this review ends up on the actual server, because I feel like I'm being rolled by the API at this point.",
      "date": "2022-09-08T00:00:00.000Z",
      "reviewer_name": "FinalTest",
      "helpfulness": 0,
      "photos": []
  }
]

const Reviews = ({currentItemID}) => {

  const [ reviews, setReviews ] = useState(exampleReviews.slice(0, 2));

  return (
    <div className="review-container" id="review-module">
      {/* <p>this is the Reviews section</p> */}

      <div className="col-25">
        <ProductBreakdown />
        <RatingBreakdown />
      </div>


      <div className="col-75">
        <SortOption />
        <ReviewList reviews={reviews}/>
      </div>

    </div>
  )
}

export default Reviews