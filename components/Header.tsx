import Link from "next/link";
import React from "react";
import styled from "styled-components";
import MainLogoIcon from "../public/static/img/logo/logo.svg";
import Button from "@components/ui/Button";
import { palette } from "../styles/palette";

const Container = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  background: ${palette.black_denim};
  z-index: 10;

  .header-logo-wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .header-logo {
      margin-right: 6px;
      width: 80px;
      height: 80px;
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: auto;
  margin-right: 2vw;
  button {
    font-size: 1.2rem;
    background: none;
    border: none;
    cursor: pointer;
    color: ${palette.white_snow};
    margin-right: 2vw;
  }
  button:hover {
    color: ${palette.blue_azure};
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  margin-left: 2vw;
`;

const DecoLabel = styled.div`
  width: 100%;
  height: 1vh;
  background: ${palette.blue_azure};
`;

function Header() {
  return (
    <Container>
      <Logo>
        <MainLogoIcon className="header-logo" />
      </Logo>
      <ButtonGroup>
        <Button>HOME</Button>
        <Button>ABOUT</Button>
        <Button>PORTFOLIO</Button>
        <Button>BLOG</Button>
        <Button>CONTACT</Button>
      </ButtonGroup>
      <DecoLabel />
    </Container>
  );
}

export default Header;
