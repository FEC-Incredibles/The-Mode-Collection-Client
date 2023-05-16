import React from 'react';
import axios from 'axios';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';

import ReviewTile from '../../src/ReviewsAndRatings/ReviewTile.jsx';
import { exampleReviews } from './exampleData';


describe("Reviews & Ratings: ReviewTile Component", () => {

  // Test block: unit test
  test("When the 'Show more' button is clicked, expands the review body ", () => {
    // first, render the component that we want to test
    render(<ReviewTile review={exampleReviews[0]} />)

    // select the elements that we want to interact with
    // other select methods: https://testing-library.com/docs/react-testing-library/cheatsheet
    const reviewBody = screen.getByTestId("review-body");
    const btnShowMore = screen.getByText("Show more");

    //assert the expected result
    // More matchers: https://github.com/testing-library/jest-dom
    expect(btnShowMore).toBeVisible();
    expect(reviewBody).not.toHaveTextContent('Expanded.')

    //interact with those elements
    fireEvent.click(btnShowMore);

    expect(btnShowMore).not.toBeVisible();
    expect(reviewBody).toHaveTextContent('Expanded.')
  })

  test("Once the user marked a review as helpful, the button is disabled and helpfulness increased by 1", async () => {
    render(<ReviewTile review={exampleReviews[0]} />)
    jest.spyOn(axios, 'put').mockResolvedValue();

    let btnYES = screen.getByTestId("markHelpful");
    let helpfulness = screen.getByTestId("review-footer");

    // before clicking YES
    expect(btnYES).toBeVisible();
    expect(helpfulness).toHaveTextContent('5')

    await waitFor(() => fireEvent.click(btnYES));

    // before clicking YES
    expect(btnYES).not.toBeVisible();
    expect(helpfulness).toHaveTextContent('6');
  })

})