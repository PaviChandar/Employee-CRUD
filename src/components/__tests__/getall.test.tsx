import { render } from '@testing-library/react';
import '@testing-library/jest-dom'; 

import GetAllEmployee from '../admin/get-all-employee';

test('renders get-all', () => {
  const { getByTestId } = render(<GetAllEmployee />);
  const x = getByTestId('get-all-main-tag'); 
  expect(x).toBeInTheDocument();
});
