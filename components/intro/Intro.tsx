import React, { useState } from "react";
import styled from "styled-components";
import { palette } from "../../styles/palette";
import LogoBig from "../../public/image/logo/logo_big.svg";
import ListItem from "../ui/list/ListItem";
import Image from "next/image";

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
      <Image
        src={"/image/logo/logo_big.svg"}
        alt="title logo"
        width={665}
        height={590}
      />
      {/* <LogoBig />  */}
      <SListGroup>
        <ListItem>ABOUT</ListItem>
        <ListItem>PROJECTS</ListItem>
        <ListItem>BLOG</ListItem>
        <ListItem>CONTACT</ListItem>
      </SListGroup>
    </Container>
  );
}

export default Intro;
