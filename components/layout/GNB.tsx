import React, { useState } from "react";
import styled from "styled-components";
import MainLogoIcon from "../public/static/img/logo/logo_small.svg";
import Button from "@components/ui/Button";
import { palette } from "../../styles/palette";
import viewports from "../../lib/viewports";
import ToggleButton, { TToggleButtonType } from "../ui/ToggleButton";
import ButtonGroup from "../ui/ButtonGroup";
import Link from "next/link";

const Container = styled.header`
  position: sticky;
  top: 0;
  width: 100vw;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  background: ${palette.black_denim};
  z-index: 10;
  border-bottom: 0.5rem solid ${palette.blue_azure};

  .header-logo-wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .header-logo {
      margin-right: 6px;
      width: 1rem;
      /* height: 1rem; */
    }
  }

  @media only screen and (max-width: ${viewports.tablet.width}) {
    border-bottom: none;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  margin-left: 2vw;
`;

function Header() {
  const [isButtonShown, setIsButtonShown] = useState(false);
  const toggleMenu = () => {
    setIsButtonShown(val => !val);
  };
  return (
    <Container role={"heading"}>
      <ToggleButton onClick={toggleMenu} />
      <ButtonGroup role={"menu"} aria-label="header-menu" show={isButtonShown}>
        <Link href="/">
          <a>
            <Button>HOME</Button>
          </a>
        </Link>
        <Link href="/about">
          <a>
            <Button>ABOUT</Button>
          </a>
        </Link>
        <Link href="/projects">
          <a>
            <Button>PROJECTS</Button>
          </a>
        </Link>
        <Link href="/posts">
          <a>
            <Button>BLOG</Button>
          </a>
        </Link>
        <Link href="/contact">
          <a>
            <Button>CONTACT</Button>
          </a>
        </Link>
      </ButtonGroup>
    </Container>
  );
}

export default Header;
