import { useState } from "react";
import styled from "styled-components";
import { palette } from "../styles/palette";

const Container = styled.div`
  background: ${palette.black_denim};
  width: 100vw;
  height: 100vh;
`;

function Intro() {
  return <Container></Container>;
}

export default Intro;
