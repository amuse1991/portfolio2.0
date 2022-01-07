import palette from "@styles/palette";
import { PageTitle } from "@styles/textStyle";
import React, { useState } from "react";
import styled from "styled-components";
import Introduce from "./Introduce";
import Attitude from "./Attitude";
import Resume from "./Resume";
import Skills from "./Skills";
import { useInView } from "react-intersection-observer";

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
  const { ref, inView } = useInView({
    threshold: 0
  });
  return (
    <Container ref={ref}>
      <PageTitle>ABOUT</PageTitle>
      <Section>
        <Introduce />
        <Attitude />
        {inView ? <Skills /> : <></>}
      </Section>
      <Section>
        <Resume />
      </Section>
    </Container>
  );
};

export default About;
