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

const Container = styled.div`
  background: ${palette.black_denim};
  color: ${palette.white_snow};
`;

interface TIndexProps {
  skills: TSkill[];
}

const Home: NextPage<TIndexProps> = ({ skills }) => {
  return (
    <Container>
      <Header />
      <Intro />
      <About skills={skills} />
      <PortfolioSlick />
      <Blog />
    </Container>
  );
};

export const getServerSideProps = wrapper.getServerSideProps<TIndexProps>(
  store => async () => {
    try {
      const { data } = await apiClient.get("api/skills");
      console.log(data);
      store.dispatch(skillsActions.setSkills(data));
      return {
        props: {
          skills: data
        }
      };
    } catch (err) {
      return {
        props: {
          skills: []
        }
      };
    }
  }
);

export default Home;
