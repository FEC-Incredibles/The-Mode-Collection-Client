import React from 'react';

import { render, fireEvent, screen } from '@testing-library/react';

import {
  getTotalNumOfReviews, getAvgRating, getPercentage
} from '../../src/ReviewsAndRatings/helper.js'
import { exampleMeta, emptyMeta } from './exampleData';


describe("Reviews & Ratings: helper functions", () => {

  describe("getTotalNumOfReviews", () => {
    test("Should return the proper total number of reviews for product with id 37313 ", () => {
      let result = getTotalNumOfReviews(exampleMeta);
      expect(result).toBe(105);
    })

    test("Should return 0 for if product has no reviews", () => {
      let result = getTotalNumOfReviews(emptyMeta);
      expect(result).toBe(0);
    })
  })

  describe("getAvgRating", () => {
    test("Should return the proper average review for product with id 37313 ", () => {
      let result = getAvgRating(exampleMeta);
      expect(result).toBe(3.88);
    })

    test("Should return 0 for if product has no reviews", () => {
      let result = getAvgRating(emptyMeta);
      expect(result).toBe(0);
    })
  })

  describe("getPercentage", () => {
    test("Should return the proper percentage while dividing float numbers", () => {
      let result = getPercentage(2.4534883720930233, 5);
      expect(result).toBe(49);
    })

    test("Should return 0 for if either numerator or denominator is 0 or not a number", () => {
      let result = getPercentage(0, 5);
      expect(result).toBe(0);
      result = getPercentage(1);
      expect(result).toBe(0);
    })
  })


})