import React, { useState } from "react";
import styled from "styled-components";
import MainLogoIcon from "../public/static/img/logo/logo.svg";
import Button from "@components/ui/Button";
import { palette } from "../styles/palette";
import viewports from "../const/viewports";
import ToggleButton, { TToggleButtonType } from "./ui/ToggleButton";
import ButtonGroup from "./ui/ButtonGroup";

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
      height: rem;
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
      <Logo role={"img"} aria-label="logo">
        <MainLogoIcon className="header-logo" />
      </Logo>
      <ToggleButton onClick={toggleMenu} />
      <ButtonGroup role={"menu"} aria-label="header-menu" show={isButtonShown}>
        <Button>HOME</Button>
        <Button>ABOUT</Button>
        <Button>PORTFOLIO</Button>
        <Button>BLOG</Button>
        <Button>CONTACT</Button>
      </ButtonGroup>
    </Container>
  );
}

export default Header;
