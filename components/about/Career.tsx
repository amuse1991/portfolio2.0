import TimelineCard from "@components/ui/card/TimelineCard";
import palette from "@styles/palette";
import viewports from "../../lib/viewports";
import React, { ReactPropTypes, useState } from "react";
import styled from "styled-components";
import { useGetCareersQuery } from "@store/modules/career/career.query";
import { nanoid } from "@reduxjs/toolkit";
import moment from "moment";

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
  if (!data) {
    return <div></div>;
  }

  const sortedData = [...data].sort((a, b) =>
    moment(a.startDate).isBefore(b.startDate) ? 1 : -1
  );
  return (
    <Container {...props}>
      {sortedData.map(career => (
        <TimelineCard key={nanoid()} {...career} />
      ))}
    </Container>
  );
};

export default Career;
