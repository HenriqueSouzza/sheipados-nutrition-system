import { render } from '@testing-library/react';
import Error404 from './error404';

test('loads and displays greeting', async () => {
  const { getByText } = render(<Error404 />);

  expect(getByText('not found')).toBeInTheDocument();
});
