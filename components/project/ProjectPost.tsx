import palette from "@styles/palette";
import React from "react";
import styled from "styled-components";
import ProjectBody from "./ProjectBody";
import ProjectFooter from "./ProjectFooter";
import ProjectHeader from "./ProjectHeader";

type TProjectPostProps = {
  title: string;
  children: React.ReactNode;
};

const Container = styled.div`
  background: ${palette.black_denim};
  color: ${palette.white_snow};
  min-height: 100vh;
  padding: 2rem;
`;

const Title = styled.span`
  display: block;
  font-size: 4rem;
  margin-bottom: 2rem;
`;

const ProjectPost: React.FC<TProjectPostProps> = ({ title, children }) => {
  return (
    <Container>
      <ProjectHeader>
        <Title>{title}</Title>
      </ProjectHeader>
      <ProjectBody coverImagePath={"/image/me.jpeg"}>{children}</ProjectBody>
      <ProjectFooter />
    </Container>
  );
};

export default ProjectPost;
