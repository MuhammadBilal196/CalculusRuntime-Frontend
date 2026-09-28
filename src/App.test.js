import { render, screen } from "@testing-library/react";
import App from "./App";

test('renders the main app shell', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: /CalcVoyager/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /^Linear Algebra$/i })).toHaveAttribute('href', '/courses/linear-algebra');
});
