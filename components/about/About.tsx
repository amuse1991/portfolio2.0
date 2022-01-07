import palette from "@styles/palette";
import { PageTitle } from "@styles/textStyle";
import React, { useState } from "react";
import styled from "styled-components";
import Introduce from "./Introduce";
import Attitude from "./Attitude";
import Resume from "./Resume";
import Skills from "./Skills";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: ${palette.black_denim};
  width: 100%;
`;

const Section = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const About = () => {
  return (
    <Container>
      <PageTitle>ABOUT</PageTitle>
      <Section>
        <Introduce />
        <Attitude />
        <Skills />
      </Section>
      <Section>
        <Resume />
      </Section>
    </Container>
  );
};

export default About;
