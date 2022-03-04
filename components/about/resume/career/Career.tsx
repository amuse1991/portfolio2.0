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
import CareerCard from "@components/ui/card/CareerCard";
import BarChart, { TChartData } from "@components/ui/chart/BarChart";
import { useGetSkillsQuery } from "@store/modules/skills/skills.query";
import skillsData from "@src/data/skills.json";
import layout from "@styles/layout";

const Container = styled.div`
  display: flex;
  margin-bottom: ${layout.xLarge};
  & > * {
    flex: 1 1 0%;
  }
`;

const CardList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > * {
    margin-bottom: ${layout.large};
  }
`;

const Career: React.FC = props => {
  const { isLoading, error, data: careers } = useGetCareersQuery();
  const { data } = useGetSkillsQuery();
  const chartData = skillsData.map<TChartData>(val => ({
    key: val.title,
    value: val.level * 20
  }));
  if (!careers) {
    return <div></div>;
  }

  return (
    <Container {...props}>
      <CardList>
        {careers.map(career => (
          <CareerCard key={nanoid()} career={career} />
        ))}
      </CardList>
    </Container>
  );
};

export default Career;
