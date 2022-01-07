import Gallery from "@components/ui/gallery/Gallery";
import palette from "@styles/palette";
import { PageTitle } from "@styles/textStyle";
import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 120vh;
  background: ${palette.black_denim};
`;

const Portfolio = () => {
  return (
    <Container>
      <PageTitle>PORTFOLIO</PageTitle>
      <Gallery />
    </Container>
  );
};

export default Portfolio;
