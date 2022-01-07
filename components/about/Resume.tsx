import TimelineCard from "@components/ui/card/TimelineCard";
import palette from "@styles/palette";
import React, { useState } from "react";
import styled from "styled-components";
import Career from "./Career";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: center;
`;

const Resume = () => {
  return (
    <Container>
      <Career />
    </Container>
  );
};

export default Resume;
