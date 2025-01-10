"use client"; // not strictly required here, but it won't hurt

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from '../store';
import CounterTest from '../src/app/CounterTest'; // or wherever the component is

describe('CounterTest Component', () => {
  it('renders the initial count and increments/decrements properly', async () => {
    render(
      <Provider store={store}>
        <CounterTest />
      </Provider>
    );

    // Initial
    expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();

    // Click +1
    await userEvent.click(screen.getByText('+1'));
    expect(screen.getByText(/Count: 1/i)).toBeInTheDocument();

    // Click -1
    await userEvent.click(screen.getByText('-1'));
    expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
  });
});
