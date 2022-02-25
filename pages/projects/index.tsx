import Layout from "@components/layout/Layout";
import ProjectSlick from "@components/project/ProjectSlick";
import { NextPage } from "next";
import projects from "@src/data/projects";

const ProjectsPage: NextPage = () => {
  return (
    <Layout className="projects" pageTitle="projects">
      <ProjectSlick data={projects} />
    </Layout>
  );
};

export default ProjectsPage;
