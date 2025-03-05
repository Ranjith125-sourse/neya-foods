import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Should check the contact page is loaded or not", () => {
  render(<Contact />);

  // Find the main heading "Contact"
  const heading = screen.getAllByRole("heading");
  expect(heading[0]).toHaveTextContent("Contact");
});
