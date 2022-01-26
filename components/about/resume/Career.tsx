import TimelineCard, {
  TimelineCardData
} from "@components/ui/card/TimelineCard";
import palette from "@styles/palette";

import React, { ReactPropTypes, useState } from "react";
import styled from "styled-components";
import { useGetCareersQuery } from "@store/modules/career/career.query";
import { nanoid } from "@reduxjs/toolkit";
import moment from "moment";
import viewports from "@lib/viewports";
import ContributionList from "./ContributionList";

const Container = styled.div`
  width: 80%;
  max-height: 80%;
  overflow: scroll;
  color: ${palette.white_snow};
  & > * {
    margin-bottom: 2rem;
  }
  @media only screen and (max-width: ${viewports.tablet.width}) {
    width: 100%;
    overflow: visible;
  }
`;

const Contribution = styled.div``;

const Career: React.FC = props => {
  const { isLoading, error, data: careers } = useGetCareersQuery();
  if (!careers) {
    return <div></div>;
  }
  const sortFn = (a, b) => (moment(a.startDate).isBefore(b.startDate) ? 1 : -1);
  const careerDataset = careers.map<TimelineCardData>(career => {
    const data: TimelineCardData = {
      startDate: career.startDate,
      endDate: career.endDate || "",
      title: career.companyName,
      children: (
        <Contribution>
          {career.description}
          <ContributionList dataset={careers} />
        </Contribution>
      )
    };
    return data;
  });
  return (
    <Container {...props}>
      <TimelineCard
        key={nanoid()}
        dataset={careerDataset}
        timeSortFn={sortFn}
        mainTitle="업무 경험"
      />
    </Container>
  );
};

export default Career;
