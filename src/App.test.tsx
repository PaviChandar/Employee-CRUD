import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import Sample from './components/admin/sample';

test('renders hello world text', () => {
  const { getByTestId } = render(<Sample />);
  const x = getByTestId('main-tag'); 
  expect(x).toBeInTheDocument();
});