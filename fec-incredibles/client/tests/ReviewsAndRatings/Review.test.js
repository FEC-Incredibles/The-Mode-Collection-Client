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

})