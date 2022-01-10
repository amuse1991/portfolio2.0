import Header from "@components/header/Header";
import Intro from "@components/intro/Intro";
import About from "@components/about/About";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import styles from "../styles/Home.module.css";
import Portfolio from "@components/portfolio/Portfolio";
import { useEffect } from "react";

const Container = styled.div``;
const Home: NextPage = () => {
  return (
    <Container>
      <Header />
      <Intro />
      <About />
      <Portfolio />
    </Container>
  );
};

export default Home;
