import palette from "@styles/palette";
import { PageTitle } from "@styles/textStyle";
import React, { useState } from "react";
import styled from "styled-components";
import Introduce from "./Introduce";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${palette.black_denim};
  width: 100vw;
  height: 100vh;
`;

const About = () => {
  return (
    <Container>
      <PageTitle>ABOUT</PageTitle>
      <Introduce></Introduce>
    </Container>
  );
};

export default About;
