import ProjectPost from "@components/project/ProjectPost";
// import { TProject } from "@store/modules/project/project.types";
import { TProject } from "@src/types/project";
import { wrapper } from "@store/store";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import projcts from "@src/data/projects";

type ProjectProps = {
  project: TProject.ProjectType;
};

const Container = styled.div``;

const Project: React.FC<ProjectProps> = ({ project }) => {
  return (
    <Container>
      <article>
        <Head>
          <title>{project.title}</title>
        </Head>
        <ProjectPost project={project} />
      </article>
    </Container>
  );
};

export async function getServerSideProps({ params }) {
  const project = projcts.find(elem => elem._id.$oid === params.id);

  return { props: { project } };
}

export default Project;
