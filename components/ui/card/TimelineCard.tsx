import { nanoid } from "@reduxjs/toolkit";
// import { TProject } from "@store/modules/project/project.types";
import { TProject } from "@src/types/project";
import palette from "@styles/palette";
import moment from "moment";
import React, { useState } from "react";
import styled from "styled-components";
import TagList from "../list/TagList";

const Container = styled.div`
  border-radius: 15px;
  border: 0.5px solid ${palette.white_snow};
  width: 100%;
  color: ${palette.white_snow};
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
`;

const SDate = styled.span`
  color: ${palette.blue_cornflower};
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  color: ${palette.blue_cornflower};
  display: block;
  font-size: 1.5rem;
  line-height: 1.625rem;
  font-weight: bold;
  margin-right: 1rem;
`;

const STagList = styled(TagList)`
  & li {
    background: ${palette.blue_azure};
    padding: 0.2rem;
    border-radius: 0.25rem;
    margin-right: 0.5rem;
    margin-bottom: 1rem;
  }
`;

const Description = styled.span`
  display: block;
  color: ${palette.white_snow};
  line-height: 1.5;
  margin: 0.5rem 0;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${palette.white_snow};
  padding-top: 0.75rem;
  &:last-child {
    border: none;
  }
`;

const SectionDateFirst = styled(Section)`
  flex-direction: row;
  align-items: center;
`;

const Left = styled.div`
  width: 20%;
`;
const Right = styled.div`
  width: 80%;
`;

const MainTitle = styled.h1`
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 1.75rem;
`;

export type TimelineCardData = {
  startDate: Date | moment.Moment | string;
  endDate?: Date | moment.Moment | string | null;
  title: string;
  tags?: string[];
  children: React.ReactNode;
};

type TimelineCardProps = {
  mainTitle: string;
  dataset: TimelineCardData | TimelineCardData[];
  timeSortFn?: (a, b) => number;
  options?: {
    dateFirst: boolean;
  };
};

const TimelineCard: React.FC<TimelineCardProps> = ({
  mainTitle,
  dataset,
  timeSortFn,
  options
}) => {
  timeSortFn = timeSortFn
    ? timeSortFn
    : (a, b) => (moment(a.startDate).isBefore(b.startDate) ? 1 : -1);
  const sortedData = Array.isArray(dataset)
    ? [...dataset].sort(timeSortFn)
    : [dataset];

  const dateFormat = "YYYY.MM";
  return (
    <Container>
      <MainTitle>{mainTitle}</MainTitle>
      {sortedData.map(item => {
        const { startDate, endDate, title, tags, children } = item;
        const mStartDate = moment(startDate).format(dateFormat);
        const mEndDate = moment(endDate).isValid()
          ? moment(endDate).format(dateFormat)
          : null;
        const dateString = `${mStartDate}${mEndDate ? " ~ " + mEndDate : ""}`;
        return options?.dateFirst ? (
          <SectionDateFirst key={nanoid()}>
            <Left>
              <SDate>{dateString}</SDate>
            </Left>
            <Right>
              <Title>{title}</Title>
              {tags && <STagList values={tags} />}
              <Description>{children}</Description>
            </Right>
          </SectionDateFirst>
        ) : (
          <Section key={nanoid()}>
            <Header>
              <Title>{title}</Title>
              <SDate>{dateString}</SDate>
            </Header>
            {tags && <STagList values={tags} />}
            <Description>{children}</Description>
          </Section>
        );
      })}
    </Container>
  );
};

export default TimelineCard;
