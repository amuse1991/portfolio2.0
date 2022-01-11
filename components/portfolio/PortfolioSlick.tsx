import ImageCard from "@components/ui/card/ImageCard";
import Slick from "@components/ui/slider/Slick";
import palette from "@styles/palette";
import { PageTitle } from "@styles/textStyle";
import React, { useState } from "react";
import styled from "styled-components";
import { Settings } from "react-slick";
import Link from "next/link";

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
        {Array.from({ length: 10 }).map((_, idx) => (
          <Link href={"/projects/name"} key={idx}>
            <a>
              <ImageCard />
            </a>
          </Link>
        ))}
      </Slick>
    </Container>
  );
};

export default Portfolio;
