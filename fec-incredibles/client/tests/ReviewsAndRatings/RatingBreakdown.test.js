import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import RatingBreakdown from '../../src/ReviewsAndRatings/RatingBreakdown.jsx';
import { exampleMeta } from './exampleData';

describe("Reviews & Ratings: Rating breakdown", () => {
  const stateSetter = jest.fn(stateValue => [stateValue = '5', stateSetter]);

  beforeEach(() => {
    render(<RatingBreakdown reviewsMeta={exampleMeta}
      filters={['5']} setFilters={stateSetter} />)
  })

  test("Should show the proper average rating", () => {
    const avgRating = screen.getByTestId('avg-rating');
    expect(avgRating).toHaveTextContent(3.9);
  })

  test("Should show the percentage of reviews that recommend the product", () => {
    const percentageRecommended = screen.getByTestId('recommended');
    expect(percentageRecommended).toHaveTextContent('68% of reviews recommend this product');
  })

  test("Should display 5 bars representing the number of reviews with this rating", () => {
    const bars = screen.getAllByTestId(/rating-bar/i);
    expect(bars.length).toBe(5);
  })

  test("Should display the proper filter", () => {
    const filters = screen.getAllByText(/ stars ✘/i);
    expect(filters.length).toBe(1);

    expect(screen.getByText(/5 stars ✘/i)).toBeVisible();
  })

  test("Should allow users to select filters", () => {
    const bars = screen.getAllByTestId(/rating-bar/i);
    bars.forEach(bar => fireEvent.click(bar))

    expect(stateSetter.mock.calls).toHaveLength(5);
  })

  test("Should allow users to clear filters at one click", () => {
    const btnClear = screen.getByText(/clear all filters/i );
    expect(btnClear).toBeVisible();

    fireEvent.click(btnClear);
    expect(stateSetter.mock.calls).toHaveLength(6);
  })

})