import palette from "@styles/palette";
import { PageTitle } from "@styles/textStyle";
import React, { useState } from "react";
import styled, { css } from "styled-components";
import Introduce from "./Introduce";
import Attitude from "./Attitude";
import Resume from "./Resume";
import Skills from "./Skills";
import { useInView } from "react-intersection-observer";
import viewports from "const/viewports";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: ${palette.black_denim};
  width: 100%;
`;

const Section = styled.div<{ isSub?: boolean }>`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: ${viewports.tablet.width}) {
    ${props =>
      props.isSub &&
      css`
        display: none;
      `}
    width: 100%;
  }
`;

const About = () => {
  // const { ref, inView } = useInView({
  //   threshold: 0
  // });
  return (
    <Container>
      <PageTitle>ABOUT</PageTitle>
      <Section>
        <Introduce />
        <Attitude />
        <Skills />
      </Section>
      <Section isSub={true}>
        <Resume />
      </Section>
    </Container>
  );
};

export default About;
