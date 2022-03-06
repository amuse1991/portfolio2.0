import FlipCard from "@components/ui/card/FlipCard";
import Slick from "@components/ui/slider/Slick";
import palette from "@styles/palette";
import React, { useState } from "react";
import styled from "styled-components";
import { Settings } from "react-slick";
import { useGetProjectsQuery } from "@store/modules/project/project.query";
import { nanoid } from "@reduxjs/toolkit";
import { TProject } from "@src/types/project";
import ProjectCard from "@components/ui/card/ProjectCard";

type TProjectSlick = {
  data: TProject.ProjectType[];
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${palette.black_denim};
  color: ${palette.white_snow};
`;

const ProjectSlick: React.FC<TProjectSlick> = ({ data }) => {
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
  return (
    <Container role={"projects"}>
      <Slick settings={slickSettings}>
        {data &&
          data.map(project => <ProjectCard key={nanoid()} project={project} />)}
      </Slick>
    </Container>
  );
};

export default ProjectSlick;
