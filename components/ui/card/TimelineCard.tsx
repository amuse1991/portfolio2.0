import { TProject } from "@store/modules/project/project.types";
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

const SDate = styled.span``;

const Title = styled.span`
  font-size: 2rem;
  margin: 0.5rem 0;
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
  color: ${palette.white_snow};
  line-height: 1.5;
`;

function TimelineCard(params) {
  const { startDate, endDate, companyName, techTags, description } = params;
  const dateFormat = "YYYY.MM";
  return (
    <Container>
      <SDate>{`${moment(startDate).format(dateFormat)} ~ ${moment(
        endDate
      ).format(dateFormat)}`}</SDate>
      <Title>{companyName}</Title>
      <STagList values={techTags} />
      <Description>{description}</Description>
    </Container>
  );
}

export default TimelineCard;
