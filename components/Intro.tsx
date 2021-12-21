import React, { useState } from "react";
import styled from "styled-components";
import { palette } from "../styles/palette";
import LogoBig from "../public/static/img/logo/logo_big.svg";
import ListGroup from "@components/ui/list/ListGroup";
import ListItem from "./ui/list/ListItem";

const Container = styled.div`
  background: ${palette.black_denim};
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  .header-logo {
    margin: 0 auto;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  margin-left: 2vw;
`;

function Intro() {
  return (
    <Container>
      <LogoBig />
      <ListGroup>
        <ListItem>포트폴리오 보기</ListItem>
        <ListItem>블로그 보기</ListItem>
        <ListItem>설정하기</ListItem>
        <ListItem>종료</ListItem>
      </ListGroup>
    </Container>
  );
}

export default Intro;
