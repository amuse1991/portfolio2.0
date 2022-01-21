import Header from "@components/header/Header";
import Intro from "@components/intro/Intro";
import About from "@components/about/About";
import type { GetServerSideProps, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import styles from "../styles/Home.module.css";
import PortfolioSlick from "@components/portfolio/PortfolioSlick";
import { useEffect } from "react";
import Blog from "@components/blog/Blog";
import palette from "@styles/palette";
import Axios from "axios";
import { TSkill } from "@store/modules/skills/skills.types";
import { useDispatch } from "react-redux";
import useSkills from "@hooks/store/modal/useSkills";
import { wrapper } from "@store/store";
import { END } from "redux-saga";
import { skillsActions } from "@store/modules/skills/skills.slice";
import { apiClient } from "@lib/api/apiClient";
import { AnyAction } from "@reduxjs/toolkit";

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
        await store.dispatch(skillsActions.fetchSkillsThunk());
        console.log("State on server", store.getState());

        return {
          props: {}
        };
      } catch (err) {
        return {
          props: {}
        };
      }
    }
);

export default Home;
