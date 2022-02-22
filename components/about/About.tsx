import palette from "@styles/palette";
import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import Introduce from "./Introduce";
import Attitude from "./Attitude";
import Resume from "./resume/Resume";
import Skills from "./Skills";
import viewports from "../../lib/viewports";
import useModal from "@hooks/store/modal/useModal";

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

  @media only screen and (max-width: ${viewports.tablet.width}) {
    &.sub {
      display: none;
    }
    width: 100%;
  }
`;

type TAboutProps = {};

const About: React.FC<TAboutProps> = () => {
  const { openModal } = useModal();
  // TODO: modal 제거 https://github.com/amuse1991/portfolio2.0/issues/13#issue-1116914369
  const toggleChangeSection = () => {
    openModal({ type: "about/Career", options: { withHeader: true } });
  };

  return (
    <Container role={"about"}>
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
