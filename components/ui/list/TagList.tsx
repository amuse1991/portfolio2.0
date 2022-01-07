import React, { useState } from "react";
import styled from "styled-components";

type TTagList = {
  values: string[];
};

const Container = styled.ul`
  display: flex;
`;

const TagItem = styled.li`
  margin-right: 0.5rem;
`;

const TagList = ({ values, ...props }: TTagList) => {
  return (
    <Container {...props}>
      {values.map((val, idx) => (
        <TagItem key={idx}>{val}</TagItem>
      ))}
    </Container>
  );
};

export default TagList;
