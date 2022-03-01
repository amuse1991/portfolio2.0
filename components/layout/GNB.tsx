import React, { useState } from "react";
import styled from "styled-components";
import MainLogoIcon from "../public/static/img/logo/logo_small.svg";
import Button from "@components/ui/Button";
import { palette } from "../../styles/palette";
import viewports from "../../lib/viewports";
import ToggleButton, { TToggleButtonType } from "../ui/ToggleButton";
import ButtonGroup from "../ui/ButtonGroup";
// import Link from "next/link";
import { Link } from "react-scroll";

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

function Header() {
  const [isButtonShown, setIsButtonShown] = useState(false);
  const toggleMenu = () => {
    setIsButtonShown(val => !val);
  };
  return (
    <Container role={"heading"}>
      <ToggleButton onClick={toggleMenu} />
      <ButtonGroup role={"menu"} aria-label="header-menu" show={isButtonShown}>
        <Link to="home" spy={true} smooth={true}>
          <Button>HOME</Button>
        </Link>
        <Link to="about" spy={true} smooth={true}>
          <Button>ABOUT</Button>
        </Link>
        <Link to="projects" spy={true} smooth={true}>
          <Button>PROJECTS</Button>
        </Link>
        <Link to="blog" spy={true} smooth={true}>
          <Button>BLOG</Button>
        </Link>
        <Link to="contact" spy={true} smooth={true}>
          <Button>CONTACT</Button>
        </Link>
      </ButtonGroup>
    </Container>
  );
}

export default Header;
