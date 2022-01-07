import palette from "@styles/palette";
import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  border-radius: 15px;
  background: ${palette.gray};
  width: 80%;
  height: 5rem;
`;

const TimelineCard = () => {
  return <Container></Container>;
};

export default TimelineCard;
