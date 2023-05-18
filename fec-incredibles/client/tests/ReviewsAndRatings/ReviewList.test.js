import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import ReviewList from '../../src/ReviewsAndRatings/ReviewList.jsx';
import { exampleReviews, exampleMeta } from './exampleData';

describe("Review List with no reviews", () => {
  const handleClick = jest.fn();
  const removeReview = jest.fn();
  const togglePostedReview = jest.fn()

  beforeEach(() => {
    render(<ReviewList
      reviews={exampleReviews} removeReview={removeReview}
      currentDisplay={[]}
      characteristics={exampleReviews.characteristics}
      reviewsMeta={exampleMeta}
      handleClickMoreReview={handleClick}
      togglePostedReview={togglePostedReview} />)
  })

  test("Should not render any reviews", () => {
    const message = screen.getByText(/no \(unreported\) reviews found\./i);
    expect(message).toBeVisible();
  })

  test("Should have the More Review button", () => {
    const btnMoreReview = screen.getByRole('button', { name: /More Review/i });
    expect(btnMoreReview).toBeVisible();

    fireEvent.click(btnMoreReview);
    expect(handleClick.mock.calls).toHaveLength(1);
  })

  test("Should have the Add New Review button and clicking it opens a modal", () => {
    const btnAddReview = screen.getByRole('button', { name: /add new review/i });
    expect(btnAddReview).toBeVisible();

    fireEvent.click(btnAddReview);
    const modal = screen.getByTestId('modal');
    expect(modal).toBeVisible();
  })

})

describe("Review List with reviews", () => {
  const handleClick = jest.fn();
  const removeReview = jest.fn();

  beforeEach(() => {
    render(<ReviewList
      reviews={exampleReviews} removeReview={removeReview}
      currentDisplay={exampleReviews.slice(0, 2)}
      handleClickMoreReview={handleClick} />)
  })

  test("Should render 2 reviews", () => {
    const reviews = screen.getAllByTestId('review-tile');
    expect(reviews.length).toBe(2);
  })

})