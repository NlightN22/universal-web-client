import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders login form', () => {
  render(<App />);
  const userInput = screen.getByPlaceholderText(/User/i)
  const passInput = screen.getByPlaceholderText(/Password/i)
  expect(userInput).toBeInTheDocument();
  expect(passInput).toBeInTheDocument();
});
