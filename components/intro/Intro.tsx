import React, { useState } from "react";
import styled from "styled-components";
import { palette } from "../../styles/palette";
import LogoBig from "../../public/static/img/logo/logo_big.svg";
import ListItem from "../ui/list/ListItem";

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

const SListGroup = styled.ul`
  color: ${palette.white_snow};
  display: flex;
  flex-direction: column;
  align-items: center;
  li {
    margin-bottom: 1rem;
    cursor: pointer;
  }

  li:hover {
    color: ${palette.blue_azure};
  }
`;

function Intro() {
  return (
    <Container>
      <LogoBig />
      <SListGroup>
        <ListItem>포트폴리오 보기</ListItem>
        <ListItem>블로그 보기</ListItem>
        <ListItem>설정하기</ListItem>
        <ListItem>종료</ListItem>
      </SListGroup>
    </Container>
  );
}

export default Intro;
