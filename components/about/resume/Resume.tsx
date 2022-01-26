import TimelineCard from "@components/ui/card/TimelineCard";
import palette from "@styles/palette";
import React, { useState } from "react";
import styled from "styled-components";
import Activity from "./Activity";
import Career from "./career/Career";
import Education from "./Education";
import viewports from "@lib/viewports";
const Container = styled.div`
  color: ${palette.white_snow};
  & > * {
    margin-bottom: 2rem;
  }
  width: 90%;
  max-height: 100vh;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: ${viewports.tablet.width}) {
    width: 100%;
    overflow: visible;
  }
`;

const Resume = () => {
  return (
    <Container>
      <Career />
      <Education />
      <Activity />
    </Container>
  );
};

export default Resume;
