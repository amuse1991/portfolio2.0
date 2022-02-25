// import { TProject } from "@store/modules/project/project.types";
import { TProject } from "@src/types/project";
import palette from "@styles/palette";
import space from "@styles/space";
import typo from "@styles/typo";
import moment from "moment";
import React from "react";
import styled from "styled-components";
import ProjectBody from "./ProjectBody";
import ProjectFooter from "./ProjectFooter";
import ProjectHeader from "./ProjectHeader";

type TProjectPostProps = {
  project: TProject.ProjectType;
};

const Container = styled.div`
  background: ${palette.black_denim};
  color: ${palette.white_snow};
  min-height: 100vh;
  padding: 2rem;
`;

const Title = styled.h1`
  display: block;
  color: ${palette.blue_azure};
  ${typo.headline2}
`;

const SubTitle = styled.h2`
  ${typo.headline5}
  padding: ${space.normal} 0;
`;

const ProjectPost: React.FC<TProjectPostProps> = ({ project }) => {
  const { title, company } = project;
  const { name, position, startDate, endDate } = company;
  const dateFormat = "YYYY년 MM월";
  const sDate = moment(startDate).format(dateFormat);
  const eDate = moment(endDate).format(dateFormat);
  const period = moment(endDate).diff(startDate, "months") + 1;
  return (
    <Container>
      <ProjectHeader>
        <Title>{title}</Title>
        <SubTitle>{`${name}, ${position}, ${sDate} - ${eDate} (${period}개월)`}</SubTitle>
      </ProjectHeader>
      <ProjectBody project={project} />
      <ProjectFooter />
    </Container>
  );
};

export default ProjectPost;
