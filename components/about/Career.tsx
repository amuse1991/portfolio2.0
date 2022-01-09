import TimelineCard from "@components/ui/card/TimelineCard";
import palette from "@styles/palette";
import viewports from "const/viewports";
import React, { ReactPropTypes, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 80%;
  max-height: 80%;
  overflow: scroll;
  & > * {
    margin-bottom: 2rem;
  }
  @media only screen and (max-width: ${viewports.tablet.width}) {
    width: 100%;
    overflow: visible;
  }
`;

const Career = (props: any) => {
  return (
    <Container {...props}>
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
