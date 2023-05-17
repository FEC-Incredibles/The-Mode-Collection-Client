import React from 'react';

import { render, fireEvent, screen, waitFor, act } from '@testing-library/react';
import axios from 'axios';

import AnswersList from '../../src/QuestionsAndAnswers/AnswersList.jsx';
import {exampleAnswers} from './exampleData';

describe("Questions and Answers: Answers List Component", () => {

  test("Expands the Answers List when the Load More Answers button is clicked", async () => {

    jest.spyOn(axios, 'get').mockResolvedValue({data: exampleAnswers});
    await act(async () => {render(<AnswersList question={exampleAnswers}/>)});
    await waitFor(() => expect(axios.get).toHaveBeenCalled());

    const answerBody = screen.getByTestId("answerBody");
    const btnLoadMoreAnswers = screen.getByText("Load More Answers");

    expect(btnLoadMoreAnswers).toBeVisible();
    expect(answerBody).not.toHaveTextContent("Collapse Answers");

    fireEvent.click(btnLoadMoreAnswers);

    expect(btnLoadMoreAnswers).toBeVisible();
    expect(answerBody).toHaveTextContent("Collapse Answers");
  })
})