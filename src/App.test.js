import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const element = screen.getByText(/What our customers says/i);
  expect(element).toBeInTheDocument();
});
