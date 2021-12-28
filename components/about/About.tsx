import palette from "@styles/palette";
import { PageTitle } from "@styles/textStyle";
import React, { useState } from "react";
import styled from "styled-components";
import Introduce from "./Introduce";
import Attitude from "./Attitude";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${palette.black_denim};
  width: 100vw;
  height: 150vh;
`;

const About = () => {
  return (
    <Container>
      <PageTitle>ABOUT</PageTitle>
      <Introduce />
      <Attitude />
    </Container>
  );
};

export default About;
