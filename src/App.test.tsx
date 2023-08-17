// import { render, screen } from '@testing-library/react';
// import "@testing-library/jest-dom"
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import Sample from './components/admin/sample';

test('renders hello world text', () => {
  const { getByTestId } = render(<Sample />);
  const x = getByTestId('main-tag'); 
  expect(x).toBeInTheDocument();
});