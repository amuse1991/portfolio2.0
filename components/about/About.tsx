import palette from "@styles/palette";
import { PageTitle } from "@styles/textStyle";
import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import Introduce from "./Introduce";
import Attitude from "./Attitude";
import Resume from "./Resume";
import Skills from "./Skills";

import viewports from "../../lib/viewports";
import useModal from "@hooks/store/modal/useModal";
import { TSkill } from "types/api/skills";

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

interface TAboutProps {
  skills: TSkill[];
}

const About: React.FC<TAboutProps> = ({ skills }) => {
  const { openModal } = useModal();
  const toggleChangeSection = () => {
    openModal({ type: "about/Career", options: { withHeader: true } });
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
