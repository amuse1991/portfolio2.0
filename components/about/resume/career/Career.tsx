import React from "react";
import styled from "styled-components";
import { nanoid } from "@reduxjs/toolkit";
import CareerCard from "@components/ui/card/CareerCard";
import layout from "@styles/layout";
import { careers } from "@src/data/careers";

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
