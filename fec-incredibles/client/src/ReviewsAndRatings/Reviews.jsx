import React, { useState, useEffect } from 'react'

import ProductBreakdown from './ProductBreakdown.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import SortOption from './SortOption.jsx';
import ReviewList from './ReviewList.jsx';


const exampleReviews =  [
  {
    "review_id": 1278953,
    "rating": 5,
    "summary": "I think I bought the best thing ever!",
    "recommend": true,
    "response": "There is some response",
    "body": "Mauris aliquam facilisis condimentum. Vivamus non sem eros. Nunc scelerisque, tortor in placerat auctor, arcu purus consequat erat, vel hendrerit odio mauris id leo. Praesent quis metus maximus, pellentesque ex ac, dictum nisi. In et aliquam purus, in congue nunc. Fusce ac elit massa. Praesent vitae dolor nisi. Proin mauris est, consectetur vitae varius vitae, fringilla ut tellus.",
    "date": "2023-02-09T00:00:00.000Z",
    "reviewer_name": "User3",
    "helpfulness": 5,
    "photos": [
        {
            "id": 2457372,
            "url": "https://images.unsplash.com/photo-1525562723836-dca67a71d5f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
        },
        {
            "id": 2457371,
            "url": "https://images.unsplash.com/photo-1560243563-062bfc001d68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        },
        {
            "id": 2457373,
            "url": "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        }
    ]
},
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
    "review_id": 1278952,
    "rating": 5,
    "summary": "Wow this was amazing",
    "recommend": true,
    "response": null,
    "body": "Proin ut tristique nunc. Quisque luctus metus sed odio accumsan, vel luctus quam blandit. Suspendisse sed lacus blandit, tempor enim sit amet, auctor urna. Nulla dapibus libero at erat scelerisque eleifend. Suspendisse ultrices ut lectus eu dignissim. Praesent nibh eros, vehicula id mattis non, semper vel massa. Proin interdum diam eu magna rutrum, non malesuada risus finibus. Donec non risus justo. Nunc quis gravida purus, quis mattis magna. Nulla ullamcorper a arcu non blandit. Sed eu cursus ligula, sit amet tincidunt ante.",
    "date": "2023-02-09T00:00:00.000Z",
    "reviewer_name": "User2",
    "helpfulness": 2,
    "photos": [
        {
            "id": 2457368,
            "url": "https://images.unsplash.com/photo-1560243563-062bfc001d68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        },
        {
            "id": 2457369,
            "url": "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        },
        {
            "id": 2457370,
            "url": "https://images.unsplash.com/photo-1588099768531-a72d4a198538?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
        }
    ]
},
{
    "review_id": 1278755,
    "rating": 5,
    "summary": "asdf",
    "recommend": true,
    "response": null,
    "body": "Testing Testing Testing Testing Testing Testing Testing Testing ",
    "date": "2023-02-07T00:00:00.000Z",
    "reviewer_name": "testing123",
    "helpfulness": 2,
    "photos": []
},
{
    "review_id": 1278466,
    "rating": 4,
    "summary": "nayt got dat dawg in em",
    "recommend": true,
    "response": null,
    "body": "nayt got dat dawg in em",
    "date": "2023-02-01T00:00:00.000Z",
    "reviewer_name": "Nayt Dawg",
    "helpfulness": 2,
    "photos": []
},
]

const Reviews = ({currentItemID}) => {

  const [ reviews, setReviews ] = useState(exampleReviews.slice(0, 2));

  return (
    <div className="widget" id="review-module">
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