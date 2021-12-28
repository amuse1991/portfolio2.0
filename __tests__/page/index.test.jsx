// __tests__/index.test.jsx

import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "@pages/index";

describe("Home", () => {
  it("헤더 렌더링", () => {
    render(<Home />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });
});
