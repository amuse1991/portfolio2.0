import Career from "@components/about/resume/career/Career";
import Skills from "@components/about/Skills";
import Layout from "@components/layout/Layout";
import { NextPage } from "next";

const SkillsAndExpPage: NextPage = () => {
  return (
    <Layout
      className="about"
      pageTitle="Skills & Experience"
      overline="Who I am"
    >
      <Career />
      <Skills />
    </Layout>
  );
};

export default SkillsAndExpPage;
