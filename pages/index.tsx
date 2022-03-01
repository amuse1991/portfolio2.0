import type { GetServerSideProps, GetStaticProps, NextPage } from "next";
import styled from "styled-components";
import palette from "@styles/palette";
import { wrapper } from "@store/store";
import {
  getRunningOperationPromises,
  getSkills
} from "@store/modules/skills/skills.query";
import { getMDPost } from "@lib/markdown";
import ProjectsPage from "./projects";
import AboutPage from "./about";
import PostsPage from "./posts";
import ContectPage from "./contact";
import Home from "./home";
import GNB from "@components/layout/GNB";
import useScroll from "@hooks/useScroll";

interface TIndexProps {}

const Index: NextPage<TIndexProps> = () => {
  useScroll();
  return (
    <>
      <GNB />
      <Home />
      <AboutPage />
      <ProjectsPage />
      <PostsPage />
      {/* <ContectPage /> */}
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps<TIndexProps>(
  store =>
    async ({ req, res, ...etc }) => {
      try {
        // store.dispatch(getSkills.initiate());
        // store.dispatch(getProjects.initiate());
        // store.dispatch(getCareers.initiate());
        // store.dispatch(getPosts.initiate());
        await getMDPost("post/javascript/testPost.md");
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

export default Index;
