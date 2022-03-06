import Layout from "@components/layout/Layout";
import Projects from "@components/project/Projects";
import { NextPage } from "next";
import projects from "@src/data/projects";

const ProjectsPage: NextPage = () => {
  return (
    <Layout
      className="projects"
      pageTitle="Projects"
      overline="Things I’ve Built"
    >
      <Projects data={projects} />
    </Layout>
  );
};

export default ProjectsPage;
