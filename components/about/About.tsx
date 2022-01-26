import palette from "@styles/palette";
import { PageTitle } from "@styles/textStyle";
import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import Introduce from "./Introduce";
import Attitude from "./Attitude";
import Resume from "./resume/Resume";
import Skills from "./Skills";
import { skipToken } from "@reduxjs/toolkit/query";

import viewports from "../../lib/viewports";
import useModal from "@hooks/store/modal/useModal";
import { useGetSkillsQuery } from "@store/modules/skills/skills.query";
import { useRouter } from "next/router";

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

interface TAboutProps {}

const About: React.FC<TAboutProps> = () => {
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
