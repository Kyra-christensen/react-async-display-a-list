import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Planets:', async () => {
  render(<App />);
  const linkElement = await screen.findByText(/Planets:/i);
  expect(linkElement).toBeInTheDocument();
});
