import { render, screen } from '@testing-library/react';
import App from './App';

test('renders This is Floofy:', async () => {
  render(<App />);
  const linkElement = await screen.findByText(/This is Floofy/i);
  expect(linkElement).toBeInTheDocument();
});
