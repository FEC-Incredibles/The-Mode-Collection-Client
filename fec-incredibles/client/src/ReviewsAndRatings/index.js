import React, { useState, useEffect } from 'react'

import ProductBreakdown from './ProductBreakdown.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import SortOption from './SortOption.jsx';
import ReviewList from './ReviewList.jsx';

import { getTotalNumOfReviews } from './helper.js';
import { exampleReviews, exampleMeta } from './exampleData';

const Reviews = ({ currentItemID, avgRating }) => {

    const [reviews, setReviews] = useState(exampleReviews);
    const [reviewsMeta, setReviewsMeta] = useState(exampleMeta);
    // const [numOfReviews, setNumOfReviews] = useState(0);


    // useEffect(() => {
    //     const numOfReviews = getTotalNumOfReviews(reviewsMeta);
    // }, [reviewsMeta])

    const numOfReviews = getTotalNumOfReviews(reviewsMeta);

    return (
        <div className="widget" id="review-module">

            <h3>RATINGS & REVIEWS </h3>

            <div className="col-25">
                <RatingBreakdown
                    reviewsMeta={reviewsMeta}
                    numOfReviews={numOfReviews}
                    avgRating={avgRating} />

                {numOfReviews > 0 && (
                    <ProductBreakdown
                    characteristics={reviewsMeta.characteristics}
                    numOfReviews={numOfReviews} />
                ) }

            </div>


            <div className="col-75">
                <SortOption numOfReviews={numOfReviews} />
                <ReviewList reviews={reviews} />
            </div>

        </div>
    )
}

export default Reviews;