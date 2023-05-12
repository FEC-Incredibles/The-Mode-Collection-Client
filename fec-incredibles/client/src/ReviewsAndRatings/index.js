import React, { useState, useEffect } from 'react'

import ProductBreakdown from './ProductBreakdown.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import SortOption from './SortOption.jsx';
import ReviewList from './ReviewList.jsx';

import { getTotalNumOfReviews } from './helper.js';
import { exampleReviews, exampleMeta, emptyMeta } from './exampleData';
import { getReviews } from './temApiCall.js';

const Reviews = ({ currentItemID, avgRating, reviewsMeta }) => {

    const [reviews, setReviews] = useState([]);
    const [meta, setMeta] = useState(reviewsMeta);
    const [numOfReviews, setNumOfReviews] = useState(0);
    const [sort, setSort] = useState("relevant");

    // console.log('Reviews metadata inside module: ', reviewsMeta)

    useEffect(() => {
        setMeta(reviewsMeta);
        setNumOfReviews(getTotalNumOfReviews(reviewsMeta));
    }, [reviewsMeta])

    // const numOfReviews = getTotalNumOfReviews(reviewsMeta);

    useEffect(() => {
        if (currentItemID && (numOfReviews > 0)) {
            getReviews(currentItemID, numOfReviews, sort)
            .then(response => {
                // console.log('Reviews sorted by', sort, ': ',  response.data);
                setReviews(response.data.results);
            })
            .catch(error =>
                console.log('inside module, Error getting reviews 🤕', error))
        }
    }, [currentItemID, numOfReviews, sort])

    return (
        <div className="widget" id="review-module">

            <h3>RATINGS & REVIEWS </h3>

            <div className="col-25">
                <RatingBreakdown
                    reviewsMeta={meta}
                    numOfReviews={numOfReviews}
                    avgRating={avgRating} />

                <ProductBreakdown
                    characteristics={meta.characteristics} />

            </div>


            <div className="col-75">
                <SortOption
                    numOfReviews={numOfReviews}
                    sort={sort}
                    setSort={setSort} />
                <ReviewList reviews={reviews} />
            </div>

        </div>
    )
}

export default Reviews;