import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from './App';
// import Counter from './components/specific/Counter';
// import Button from './components/common/Button/Button';

// jest.mock('./components/specific/Counter', () => () => <div>Counter Component</div>);


describe('App Component', () => {

test('renders welcome message', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to PS Pulse/i);
  expect(linkElement).toBeInTheDocument();
});

// test('renders Counter component', () => {
//   render(<App />);
//   const counterElement = screen.getByText(/Counter Component/i);
//   expect(counterElement).toBeInTheDocument();
// });

// test('renders Button component and handles click event', () => {
//   const consoleSpy = jest.spyOn(console, 'log');
//   render(<App />);
//   const buttonElement = screen.getByText(/Click Me/i);
//   expect(buttonElement).toBeInTheDocument();

//   fireEvent.click(buttonElement);
//   expect(consoleSpy).toHaveBeenCalledWith('Button clicked!');
//   consoleSpy.mockRestore();
// });

});