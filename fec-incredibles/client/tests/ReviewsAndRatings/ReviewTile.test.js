import React from 'react';

import { render, fireEvent, screen } from '@testing-library/react';

import ReviewTile from '../../src/ReviewsAndRatings/ReviewTile.jsx';
import { exampleReviews } from './exampleData';


describe("Reviews & Ratings: ReviewTile Component", () => {

  // Test block: unit test
  test("Expands the review body when the 'Show more' button is clicked", () => {
    // first, render the component that we want to test
    render(<ReviewTile review={exampleReviews[0]} />)

    // select the elements that we want to interact with
    // other select methods: https://testing-library.com/docs/react-testing-library/cheatsheet
    const reviewBody = screen.getByTestId("review-body");
    const btnShowMore = screen.getByText("Show more");

    //assert the expected result
    // More matchers: https://github.com/testing-library/jest-dom#deprecated-matchers
    expect(btnShowMore).toBeVisible();
    expect(reviewBody).not.toHaveTextContent('Expanded.')

    //interact with those elements
    fireEvent.click(btnShowMore);

    expect(btnShowMore).not.toBeVisible();
    expect(reviewBody).toHaveTextContent('Expanded.')
  })

})