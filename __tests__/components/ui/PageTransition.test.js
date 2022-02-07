import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { getLastPageByHistory } from "../../../components/ui/PageTransition";

test("getLastPageByHistory returns react component", () => {
  const history = {
    path: "/",
    prev: "/about"
  };
  const Component = getLastPageByHistory(history);
  render(Component);
  expect(screen.getByRole("about")).toBeValid();
});
