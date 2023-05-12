import React from "react";

import { render, fireEvent, screen } from "@testing-library/react";

import AddToOutfit from "../../src/ProductOverview/AddToOutfit.jsx";
import { exampleOutOfStockStyle, exampleInStockStyle } from "./exampleData";

describe("Add Product to Outfit", () => {
  describe('when product is out of stock',()  => {
    test('add to outfit button should not appear', () => {
      // assert that the add to outfit button is not visible
      render(<AddToOutfit selectedStyleData={exampleOutOfStockStyle}/>)
      const addToOutfitButton = screen.queryByText('Add to Outfit');
      expect(addToOutfitButton).toBeNull();
    });

    test('size drop down menu should display OUT OF STOCK', () => {
      // assert that the size drop down menu displays "OUT OF STOCK"
      render(<AddToOutfit selectedStyleData={exampleOutOfStockStyle}/>)
      const sizeDropDownMenu = screen.getByText('OUT OF STOCK')
      expect(sizeDropDownMenu).toHaveTextContent('OUT OF STOCK');
    });

    test('quantity drop down menu should display -', () => {
      // assert that the quantity drop down menu displays "-"
      render(<AddToOutfit selectedStyleData={exampleOutOfStockStyle}/>)
      const quantityDropDownMenu = screen.getByTestId('quantityDDM');
      expect(quantityDropDownMenu).toHaveTextContent('-');
    });
  });

  describe('when product is in stock', () => {
    test('size should be defaulted to select a size', () => {
      // assert that the size drop down menu displays "Select a size"
      render(<AddToOutfit selectedStyleData={exampleInStockStyle}/>)
      const sizeDropDownMenu = screen.getByTestId('sizeDDM');
      expect(sizeDropDownMenu).toHaveTextContent('select a size');
    });

    test('quantity drop down menu should display -', () => {
      // assert that the quantity drop down menu displays "-"
      render(<AddToOutfit selectedStyleData={exampleInStockStyle}/>)
      const quantityDropDownMenu = screen.getByTestId('quantityDDM');
      expect(quantityDropDownMenu).toHaveTextContent('-');
    });

    describe('when a size has been selected', () => {
      test('quantity should be defaulted to 1', () => {
        render(<AddToOutfit selectedStyleData={exampleInStockStyle}/>)
        const sizeDropDownMenu = screen.getByTestId('sizeDDM').querySelector('.dropdown-input');
        fireEvent.click(sizeDropDownMenu)
        const mediumSize = screen.getByText('M')
        fireEvent.click(mediumSize)
        // assert that the quantity drop down menu defaults to 1
        const quantityDropDownMenu = screen.getByTestId('quantityDDM');
        expect(quantityDropDownMenu).toHaveTextContent('1');
      });

      test('add to outfit button should appear', () => {
        render(<AddToOutfit selectedStyleData={exampleInStockStyle}/>)
        const sizeDropDownMenu = screen.getByTestId('sizeDDM').querySelector('.dropdown-input');
        fireEvent.click(sizeDropDownMenu)
        const mediumSize = screen.getByText('M')
        fireEvent.click(mediumSize)
        // assert that the add to outfit button is visible
        const addToOutfitButton = screen.getByText('add to outfit');
        expect(addToOutfitButton).toBeVisible();
      });
    });
  });
});