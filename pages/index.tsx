import Header from "@components/header/Header";
import Intro from "@components/intro/Intro";
import About from "@components/about/About";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import styles from "../styles/Home.module.css";
import PortfolioSlick from "@components/portfolio/PortfolioSlick";
import { useEffect } from "react";
import Blog from "@components/blog/Blog";
import palette from "@styles/palette";

const Container = styled.div`
  background: ${palette.black_denim};
  color: ${palette.white_snow};
`;
const Home: NextPage = () => {
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

export default Home;
