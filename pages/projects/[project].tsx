import ProjectPost from "@components/project/ProjectPost";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

type ProjectProps = {
  project: TProject;
};

type TProject = {
  id: number;
  title: string;
};
const Container = styled.div``;
const ProjectHeader = styled.div``;
const ProjectBody = styled.div``;

const dummyData = {
  title: "TEST TITLE"
};

const Project: React.FC<ProjectProps> = ({ project }) => {
  const router = useRouter();
  return (
    <Container>
      <article>
        <Head>
          <title>{dummyData.title}</title>
        </Head>
        <ProjectPost title={dummyData.title}>
          <div>hello</div>
        </ProjectPost>
      </article>
    </Container>
  );
};

export default Project;

// export async function getStaticProps({ params }) {}
