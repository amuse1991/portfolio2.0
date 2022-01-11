import Header from "@components/header/Header";
import Intro from "@components/intro/Intro";
import About from "@components/about/About";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import styles from "../styles/Home.module.css";
import PortfolioSlick from "@components/portfolio/PortfolioSlick";
import { useEffect } from "react";
import Blog from "@components/blog/Blog";
import palette from "@styles/palette";
import Axios from "axios";
import { TSkill } from "types/api/skills";
import { getSkills } from "@lib/api/skills";

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

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data } = await getSkills();
    console.log(data);
    return { props: {} };
  } catch (err) {
    console.log(err);
    return { props: {} };
  }
};
