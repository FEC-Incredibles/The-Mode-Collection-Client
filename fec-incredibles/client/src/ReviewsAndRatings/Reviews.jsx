import React, { useState, useEffect } from 'react'
import axios from 'axios';

import ProductBreakdown from './ProductBreakdown.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import SortOption from './SortOption.jsx';
import ReviewList from './ReviewList.jsx';

import { getTotalNumOfReviews } from './helper.js';
import { exampleReviews, exampleMeta, emptyMeta } from './exampleData';

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

    useEffect(() => {
        if (currentItemID && (numOfReviews > 0)) {
            let url = `/reviews/?product_id=${currentItemID}&sort=${sort}&count=${numOfReviews}`;
            axios.get(url)
                .then(response => {
                    // console.log('Reviews sorted by', sort, ': ', response.data);
                    setReviews(response.data.results);
                })
                .catch(error =>
                    console.log('Error getting reviews inside module 🤕', error))
        }
    }, [currentItemID, numOfReviews, sort])

    const removeReview = (reviewID) => {
        let filteredReviews = reviews.filter(review =>
            review.review_id !== reviewID)
        setReviews(filteredReviews);
    }

    return (
        <div className="widget" id="review-module">

            <h3>RATINGS & REVIEWS </h3>

            <div className="col-25">
                <RatingBreakdown
                    reviewsMeta={meta} setReviews={setReviews}/>

                <ProductBreakdown
                    characteristics={meta.characteristics} />

            </div>


            <div className="col-75">
                <SortOption
                    reviews={reviews} sort={sort} setSort={setSort} />
                <ReviewList
                    reviews={reviews} removeReview={removeReview} />
            </div>

        </div>
    )
}

export default Reviews;