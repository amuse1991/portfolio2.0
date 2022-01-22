import TimelineCard from "@components/ui/card/TimelineCard";
import palette from "@styles/palette";
import viewports from "../../lib/viewports";
import React, { ReactPropTypes, useState } from "react";
import styled from "styled-components";
import { useGetCareersQuery } from "@store/modules/career/career.query";
import { nanoid } from "@reduxjs/toolkit";

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
  const { isLoading, error, data } = useGetCareersQuery();
  return (
    <Container {...props}>
      {data && data.map(career => <TimelineCard key={nanoid()} {...career} />)}
    </Container>
  );
};

export default Career;
