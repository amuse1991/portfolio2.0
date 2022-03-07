import Career from "@components/about/resume/career/Career";
import Skills from "@components/about/Skills";
import Layout from "@components/layout/Layout";
import TagCloud from "@components/ui/TagCloud";
import layout from "@styles/layout";
import { NextPage } from "next";
import styled from "styled-components";

const SkillsAndExpPage: NextPage = () => {
  return (
    <Layout
      className="about"
      pageTitle="Skills & Experience"
      overline="Who I am"
    >
      <Container>
        <Career />
        <TagCloud />
      </Container>
      <Skills />
    </Layout>
  );
};

const Container = styled.div`
  display: flex;
  margin-bottom: ${layout.xLarge};
  & > * {
    flex: 1 1 0%;
  }
`;

export default SkillsAndExpPage;
