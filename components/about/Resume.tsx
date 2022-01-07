import TimelineCard from "@components/ui/card/TimelineCard";
import React, { useState } from "react";
import styled from "styled-components";

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
      <TimelineCard />
    </Container>
  );
};

export default Resume;
