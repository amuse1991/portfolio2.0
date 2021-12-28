import React, { useState } from "react";
import styled from "styled-components";

type TImageCard = {
  children: React.ReactNode;
};

const Container = styled.div`
  width: 50%;
  height: 100vh;
  background: red;
`;

const ImageCard = ({ children }: TImageCard) => {
  return <Container></Container>;
};
