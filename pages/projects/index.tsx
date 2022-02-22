import Layout from "@components/layout/Layout";
import ProjectSlick from "@components/project/ProjectSlick";
import { NextPage } from "next";

const ProjectsPage: NextPage = () => {
  return (
    <Layout pageTitle="projects">
      <ProjectSlick />
    </Layout>
  );
};

export default ProjectsPage;
