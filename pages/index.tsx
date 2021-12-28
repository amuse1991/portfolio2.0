import Header from "@components/header/Header";
import Intro from "@components/intro/Intro";
import About from "@components/about/About";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import styles from "../styles/Home.module.css";

const Container = styled.div``;
const Home: NextPage = () => {
  return (
    <Container>
      <Header />
      <Intro />
      <About />
    </Container>
  );
};

export default Home;
