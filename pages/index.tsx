import Header from "@components/Header";
import Intro from "@components/Intro";
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
    </Container>
  );
};

export default Home;
