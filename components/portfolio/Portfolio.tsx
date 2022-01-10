import ImageCard from "@components/ui/card/ImageCard";
import Gallery from "@components/ui/gallery/Gallery";
import Slick from "@components/ui/slider/Slick";
import palette from "@styles/palette";
import { PageTitle } from "@styles/textStyle";
import React, { useState } from "react";
import styled from "styled-components";
import { Settings } from "react-slick";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${palette.black_denim};
  color: ${palette.white_snow};
`;

const Portfolio = () => {
  const slickSettings: Settings = {
    accessibility: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    rows: 2,
    dots: false
  };

  return (
    <Container>
      <PageTitle>PORTFOLIO</PageTitle>
      <Slick settings={slickSettings}>
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
      </Slick>
    </Container>
  );
};

export default Portfolio;
