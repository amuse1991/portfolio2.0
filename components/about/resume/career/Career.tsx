import TimelineCard, {
  TimelineCardData
} from "@components/ui/card/TimelineCard";
import palette from "@styles/palette";

import React, { ReactPropTypes, useState } from "react";
import styled from "styled-components";
import { useGetCareersQuery } from "@store/modules/career/career.query";
import { nanoid } from "@reduxjs/toolkit";
import moment from "moment";

import ContributionList from "./ContributionList";

const Container = styled.div``;

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
