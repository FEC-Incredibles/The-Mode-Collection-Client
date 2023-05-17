import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import Reviews from '../../src/ReviewsAndRatings/Reviews.jsx';
import { exampleMeta } from './exampleData';

describe("Reviews & Ratings: whole module", () => {
  let setOrderedReviews = jest.fn(x => {});
  let setFilteredReviews = jest.fn(x => {});
  let setCurrentDisplay = jest.fn(x => {});
  let setSort = jest.fn(x => {});
  let setFilters = jest.fn(x => {});

  beforeEach(() => {

    React.useState = jest
      .fn()
      .mockImplementationOnce(x => [x, setDataLength])
      .mockImplementationOnce(x => [x, setLoading])
      .mockImplementationOnce(x => [x, setText]);

    render(<Reviews reviewsMeta={exampleMeta} />)
  });

  test("Should show module heading", () => {
    const title = screen.getByRole('heading', { name: /ratings & reviews/i });
    expect(title).toBeVisible();
  })

  xtest("Should show the proper average rating", () => {
    const avgRating = screen.getByTestId('avg-rating');
    expect(avgRating).toHaveTextContent(3.9);
  })


 // Test block: unit test
 xtest("When the 'Show more' button is clicked, expands the review body ", () => {
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


})