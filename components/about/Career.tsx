import TimelineCard from "@components/ui/card/TimelineCard";
import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 80%;
  max-height: 80%;
  overflow: scroll;
  & > * {
    margin-bottom: 2rem;
  }
`;

const Career = () => {
  return (
    <Container>
      <TimelineCard />
      <TimelineCard />
      <TimelineCard />
      <TimelineCard />
      <TimelineCard />
      <TimelineCard />
      <TimelineCard />
      <TimelineCard />
      <TimelineCard />
      <TimelineCard />
      <TimelineCard />
      <TimelineCard />
      <TimelineCard />
    </Container>
  );
};

export default Career;
