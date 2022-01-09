import palette from "@styles/palette";
import { PageTitle } from "@styles/textStyle";
import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import Introduce from "./Introduce";
import Attitude from "./Attitude";
import Resume from "./Resume";
import Skills from "./Skills";
import { useInView } from "react-intersection-observer";
import viewports from "const/viewports";
import useWindowSize from "@hooks/useWindowSize";
import Career from "./Career";
import useModal from "@hooks/store/modal/useModal";

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
  const { openModal } = useModal();
  const toggleChangeSection = () => {
    openModal({ type: "about/Career" });
    // openModal({ type: "SampleModal" });
  };

  return (
    <Container>
      <PageTitle>ABOUT</PageTitle>
      <Section>
        <Introduce onClickToggleSection={toggleChangeSection} />
        <Attitude />
        <Skills />
      </Section>
      <Section className="sub">
        <Resume />
      </Section>
    </Container>
  );
};

export default About;
