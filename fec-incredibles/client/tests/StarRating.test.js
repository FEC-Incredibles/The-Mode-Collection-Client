import React from 'react';

import { render, fireEvent, screen } from '@testing-library/react';

import StarRating from '../src/StarRating.jsx';

describe("StarRating Component", () => {

  // Test block: unit test
  test("Generates 5 SVG tags when the component is rendered", () => {
    // first, render the component that we want to test
    render(<StarRating rating={"3.73"} color="black"/>)

    // select the elements that we want to interact with
    // other select methods: https://testing-library.com/docs/react-testing-library/cheatsheet
    const stars = screen.queryAllByTestId(/star:grad-/);
    const fullStars =  screen.queryAllByTestId("star:grad-100-black");
    const halfStar = screen.queryAllByTestId("star:grad-70-black");
    const emptyStar = screen.queryAllByTestId("star:grad-0-black");

    //assert the expected result
    // More matchers: https://github.com/testing-library/jest-dom#deprecated-matchers
    expect(stars).toHaveLength(5);
    expect(fullStars).toHaveLength(3);
    expect(halfStar).toHaveLength(1);
    expect(emptyStar).toHaveLength(1);
  })

})