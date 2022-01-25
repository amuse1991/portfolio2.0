import ImageCard from "@components/ui/card/ImageCard";
import Slick from "@components/ui/slider/Slick";
import palette from "@styles/palette";
import { PageTitle } from "@styles/textStyle";
import React, { useState } from "react";
import styled from "styled-components";
import { Settings } from "react-slick";
import Link from "next/link";
import { useGetProjectsQuery } from "@store/modules/project/project.query";
import { nanoid } from "@reduxjs/toolkit";

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
  const { isLoading, error, data } = useGetProjectsQuery();
  return (
    <Container>
      <PageTitle>PROJECTS</PageTitle>
      <Slick settings={slickSettings}>
        {data &&
          data.map(project => (
            <ImageCard
              key={nanoid()}
              title={project.name}
              summary={project.summary || ""}
              thumbnailPath={project.thumbnailPath}
            />
          ))}
      </Slick>
    </Container>
  );
};

export default Portfolio;
