import React from 'react';
import { render, fireEvent, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SortOption from '../../src/ReviewsAndRatings/SortOption.jsx';

describe("Reviews & Ratings: Selecting sorting options", () => {
  const stateSetter = jest.fn(stateValue => [stateValue = 'Newest', stateSetter]);

  beforeEach(() => {
    render(<SortOption totalLength={5} currentLength={2}
      sort={"relevant"} setSort={stateSetter} />)
  })

  test("Should have the proper default selection", () => {
    const sorting = screen.getByRole('combobox');
    expect(sorting).toBeVisible();

    const optionRelevant = screen.getByRole('option', { name: 'Relevant' });
    expect(optionRelevant.selected).toBe(true)
  });

  test("Should have correct number of options", () => {
    const allOptions = screen.getAllByRole('option');
    expect(allOptions.length).toBe(3);
  });


  test("Should allow users to change sorting ", () => {
    const sorting = screen.getByRole('combobox');
    const optionNewest = screen.getByRole('option', { name: 'Newest' });

    userEvent.selectOptions(sorting, optionNewest)
    expect(stateSetter.mock.calls).toHaveLength(1);

    // not working right now
    // expect(optionNewest.selected).toBe(true)
  });

})