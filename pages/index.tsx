import Header from "@components/header/Header";
import Intro from "@components/intro/Intro";
import About from "@components/about/About";
import type { GetServerSideProps, GetStaticProps, NextPage } from "next";
import styled from "styled-components";
import PortfolioSlick from "@components/portfolio/PortfolioSlick";
import Blog from "@components/blog/Blog";
import palette from "@styles/palette";
import { wrapper } from "@store/store";
import {
  getRunningOperationPromises,
  getSkills
} from "@store/modules/skills/skills.query";
import { getObjectList } from "./api/files/download";
import { getProjects } from "@store/modules/project/project.query";

const Container = styled.div`
  background: ${palette.black_denim};
  color: ${palette.white_snow};
`;

interface TIndexProps {}

const Home: NextPage<TIndexProps> = () => {
  return (
    <Container>
      <Header />
      <Intro />
      <About />
      <PortfolioSlick />
      <Blog />
    </Container>
  );
};

export const getServerSideProps = wrapper.getServerSideProps<TIndexProps>(
  store =>
    async ({ req, res, ...etc }) => {
      try {
        store.dispatch(getSkills.initiate());
        store.dispatch(getProjects.initiate());
        await Promise.all(getRunningOperationPromises());
        return {
          props: {}
        };
      } catch (err) {
        console.error(err);
        return {
          props: {}
        };
      }
    }
);

export default Home;
