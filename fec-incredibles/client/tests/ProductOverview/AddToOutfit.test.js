import React from "react";

import { render, fireEvent, screen } from "@testing-library/react";

import AddToOutfit from "../../src/ProductOverview/AddToOutfit.jsx";
import { exampleOutOfStock, exampleSkus } from "./exampleData";

describe("Add Product to Outfit", () => {
  describe('when product is out of stock',()  => {
    test('add to outfit button should not appear', () => {
      // code for rendering the component when the product is out of stock
      render(<AddToOutfit selectedStyleData={exampleOutOfStock}/>)
      // assert that the add to outfit button is not visible
      const addToOutfitButton = screen.queryByText('Add to Outfit');
      expect(addToOutfitButton).toBeNull();
    });

    test('size drop down menu should display OUT OF STOCK', () => {
      // code for rendering the component when the product is out of stock
      render(<AddToOutfit selectedStyleData={exampleOutOfStock}/>)
      // assert that the size drop down menu displays "OUT OF STOCK"
      const sizeDropDownMenu = screen.getByClassName('dropdown-selected-value');
      expect(sizeDropDownMenu).toHaveTextContent('OUT OF STOCK');
    });

    test('quantity drop down menu should display -', () => {
      // code for rendering the component when the product is out of stock
      render(<AddToOutfit selectedStyleData={exampleOutOfStock}/>)
      // assert that the quantity drop down menu displays "-"
      const quantityDropDownMenu = screen.getByClassName('dropdown-selected-value');
      expect(quantityDropDownMenu).toHaveTextContent('-');
    });
  });

  describe('when product is in stock', () => {
    test('size should be defaulted to select a size', () => {
      // code for rendering the component when the product is in stock
      // assert that the size drop down menu displays "Select a size"
      const sizeDropDownMenu = screen.getByClassName('dropdown-selected-value');
      expect(sizeDropDownMenu).toHaveValue('Select a size');
    });

    test('quantity drop down menu should display -', () => {
      // code for rendering the component when the product is in stock
      // assert that the quantity drop down menu displays "-"
      const quantityDropDownMenu = screen.getByClassName('dropdown-selected-value');
      expect(quantityDropDownMenu).toHaveTextContent('-');
    });

    describe('when a size has been selected', () => {
      test('add to outfit button should appear', () => {
        // code for rendering the component when the product is in stock and a size has been selected
        // assert that the add to outfit button is visible
        const addToOutfitButton = screen.getByText('Add to Outfit');
        expect(addToOutfitButton).toBeVisible();
      });

      test('quantity should be defaulted to 1', () => {
        // code for rendering the component when the product is in stock and a size has been selected
        // assert that the quantity drop down menu defaults to 1
        const quantityDropDownMenu = screen.getByClassName('dropdown-selected-value');
        expect(quantityDropDownMenu).toHaveValue('1');
      });
    });
  });
});