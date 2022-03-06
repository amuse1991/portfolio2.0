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
import SideProjectCard from "@components/ui/card/SideProjectCard";

type TProjects = {
  data: TProject.ProjectType[];
};

const Projects: React.FC<TProjects> = ({ data }) => {
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
  const mainProjects = data && data.filter(p => p.type === "main");
  const subProjects = data && data.filter(p => p.type === "sub");
  return (
    <>
      <Container role={"projects"} className="first">
        <Title>Featured Projects</Title>
        <Slick settings={slickSettings}>
          {mainProjects &&
            mainProjects.map(project => (
              <ProjectCard key={nanoid()} project={project} />
            ))}
        </Slick>
      </Container>
      <Container>
        <Title>Other Noteworthy Projects</Title>
        <Slick settings={slickSettings}>
          {subProjects &&
            subProjects.map(project => (
              <SideProjectCard key={nanoid()} project={project} />
            ))}
        </Slick>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${palette.black_denim};
  color: ${palette.white_snow};

  &.first {
    margin-bottom: 5rem;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

export default Projects;
