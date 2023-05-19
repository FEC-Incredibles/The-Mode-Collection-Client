import React, { useState, useEffect } from 'react'
import axios from 'axios';

import ProductBreakdown from './ProductBreakdown.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import SortOption from './SortOption.jsx';
import ReviewList from './ReviewList.jsx';

import { getTotalNumOfReviews } from './helper.js';

const Reviews = ({ reviewsMeta, productName }) => {

    /**
     * States
     */
    const [orderedReviews, setOrderedReviews] = useState([]);
    const [filteredReviews, setFilteredReviews] = useState([]);
    const [currentDisplay, setCurrentDisplay] = useState([]);

    const [sort, setSort] = useState("relevant");
    const [filters, setFilters] = useState([]);

    const [postedReview, setPostedReview] = useState(false);


    /**
     * Helper functions
     */
    const updateFilteredReviews = (reviews) => {
        if (filters.length === 0) {
            setFilteredReviews(reviews);
        } else {
            let filtered = [];
            filters.forEach(rating => {
                let reviewsByRating = reviews.filter(review =>
                    review.rating === rating
                );
                filtered = filtered.concat(reviewsByRating);
            })
            setFilteredReviews(filtered);
        }
    }

    const removeReview = (reviewID) => {
        let result = filteredReviews.filter(review =>
            review.review_id !== reviewID)
        updateFilteredReviews(result);
    }

    const displayTwoMoreReviews = () => {
        let currentLength = currentDisplay.length;
        if (filteredReviews.length > currentLength) {
            setCurrentDisplay(filteredReviews.slice(0, currentLength + 2));
        }
    }

    const togglePostedReview = () => {
        setPostedReview(!postedReview);
    }


    /**
     * Hooks
     */
    useEffect(() => {
        const numOfReviews = getTotalNumOfReviews(reviewsMeta);
        let url = `/reviews/?product_id=${reviewsMeta['product_id']}&sort=${sort}&count=${numOfReviews}`;
        axios.get(url)
            .then(response => {
                setOrderedReviews(response.data.results);
                updateFilteredReviews(response.data.results)
            })
            .catch(error =>
                console.log('Error getting reviews inside module 🤕', error))
    }, [sort, reviewsMeta, postedReview])

    useEffect(() => {
        updateFilteredReviews(orderedReviews);
        // TODO: while filters change, update the Reviews state will not work since
        // undoing the filters can not go back to the original lists of reviews
        // update the CurrentDisplay state will not work as well since
        // clicking add more reviews after having filters will clear the existing filters
        // solution: more states?
    }, [filters])

    useEffect(() => {
        // update currentDisplay
        if (currentDisplay.length <= 2) {
            setCurrentDisplay(filteredReviews.slice(0, 2));
        } else {
            setCurrentDisplay(filteredReviews.slice(0, currentDisplay.length));
        }
    }, [filteredReviews])


    return (
        <div className="widget" id="review-module" data-testid="review-module">
            <h1>RATINGS & REVIEWS </h1>
            <br />

            <div className="col-25">
                <RatingBreakdown filters={filters}
                    reviewsMeta={reviewsMeta} setFilters={setFilters} />
                <ProductBreakdown
                    characteristics={reviewsMeta.characteristics} />
            </div>

            <div className="col-75">
                <SortOption
                    totalLength={filteredReviews.length}
                    currentLength={currentDisplay.length}
                    sort={sort} setSort={setSort} />
                <ReviewList
                    reviews={filteredReviews} removeReview={removeReview}
                    currentDisplay={currentDisplay}
                    handleClickMoreReview={displayTwoMoreReviews}
                    characteristics={reviewsMeta.characteristics}
                    reviewsMeta={reviewsMeta}
                    togglePostedReview={togglePostedReview}
                    productName={productName} />
            </div>
        </div>
    )
}

export default Reviews;