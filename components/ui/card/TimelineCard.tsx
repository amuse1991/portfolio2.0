import { TProject } from "@store/modules/project/project.types";
import palette from "@styles/palette";
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
  }
`;

const Description = styled.span`
  color: ${palette.white_snow};
`;

const TimelineCard = () => {
  const dummy = ["react", "redux", "react", "redux", "react", "redux"];
  return (
    <Container>
      <SDate>2011.01 ~ 2012.03</SDate>
      <Title>테스트 타이틀</Title>
      <STagList values={dummy} />
      <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, beatae
        maiores tempora corrupti, dolore autem praesentium adipisci laudantium
        porro, ab quae voluptate reiciendis similique reprehenderit ea officiis.
        Suscipit, cum accusantium.
      </Description>
    </Container>
  );
};

export default TimelineCard;
