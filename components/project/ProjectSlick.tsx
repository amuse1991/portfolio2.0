import FlipCard from "@components/ui/card/FlipCard";
import Slick from "@components/ui/slider/Slick";
import palette from "@styles/palette";
import React, { useState } from "react";
import styled from "styled-components";
import { Settings } from "react-slick";
import { useGetProjectsQuery } from "@store/modules/project/project.query";
import { nanoid } from "@reduxjs/toolkit";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${palette.black_denim};
  color: ${palette.white_snow};
`;

const ProjectSlick = () => {
  const slickSettings: Settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1680,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  const { isLoading, error, data } = useGetProjectsQuery();
  return (
    <Container role={"projects"}>
      <Slick settings={slickSettings}>
        {data &&
          data.map(project => <FlipCard key={nanoid()} data={project} />)}
      </Slick>
    </Container>
  );
};

export default ProjectSlick;
