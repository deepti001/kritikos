import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

test('Button renders with correct text and responds to click event', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click Me</Button>);

  const buttonElement = screen.getByText(/click me/i);
  expect(buttonElement).toBeInTheDocument();

  fireEvent.click(buttonElement);
  expect(handleClick).toHaveBeenCalledTimes(1);
});


