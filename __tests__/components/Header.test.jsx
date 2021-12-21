import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "@components/Header";
import viewports from "const/viewports";

const resizeWindow = (x, y) => {
  window.innerWidth = x;
  window.innerHeight = y;
  window.dispatchEvent(new Event("resize"));
};
describe("Header 컴포넌트 wide 화면", () => {
  it("로고 렌더링", () => {
    render(<Header />);

    const logo = screen.getByRole("img", { name: /logo/i });

    expect(logo).toBeInTheDocument();
  });

  it("메뉴 렌더링", () => {
    render(<Header />);

    const menu = screen.getByRole("menu", { name: /header-menu/i });

    expect(menu).toBeInTheDocument();
  });
});

describe("Header 컴포넌트 모바일 화면", () => {
  it("리사이즈 테스트", () => {
    render(<Header />);
    const component = shallow(<Header />);

    expect(component.html()).toEqual("<div>1024 x 768</div>");

    resizeWindow(500, 300);
    expect(component.html()).toEqual("<div>500 x 300</div>");
  });
});
