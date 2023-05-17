import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import ProductBreakdown from '../../src/ReviewsAndRatings/ProductBreakdown.jsx';
import { exampleMeta } from './exampleData';


describe("Reviews & Ratings: Product Breakdown", () => {

  // Test block: unit test
  test("Properly render the characteristics of the current product", () => {
    // first, render the component that we want to test
    render(<ProductBreakdown characteristics={exampleMeta.characteristics} />)

    // select the elements that we want to interact with
    // other select methods: https://testing-library.com/docs/react-testing-library/cheatsheet
    const fitLabel = screen.getByText(/fit/i);
    const lengthLabel = screen.getByText(/length/i);
    const comfortLabel = screen.getByText(/comfort/i);
    const qualityLabel = screen.getByText(/quality/i);

    const fit = screen.getByTestId("Fit");
    const length = screen.getByTestId("Length");
    const comfort = screen.getByTestId("Comfort");
    const quality = screen.getByTestId("Quality");

    // //assert the expected result
    // // More matchers: https://github.com/testing-library/jest-dom
    expect(fitLabel).toBeVisible();
    expect(lengthLabel).toBeVisible();
    expect(comfortLabel).toBeVisible();
    expect(qualityLabel).toBeVisible();

    expect(fit).toHaveStyle({ left: '49%' })
    expect(length).toHaveStyle({ left: '53%' })
    expect(comfort).toHaveStyle({ left: '56%' })
    expect(quality).toHaveStyle({ left: '59%' })

  })

})
})