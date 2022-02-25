import Layout from "@components/layout/Layout";
import palette from "@styles/palette";
import { NextPage } from "next";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import ListItem from "@components/ui/list/ListItem";

const Container = styled.div`
  background: ${palette.black_denim};
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  .header-logo {
    margin: 0 auto;
  }
`;

const SListGroup = styled.ul`
  color: ${palette.white_snow};
  display: flex;
  flex-direction: column;
  align-items: center;
  li {
    margin-bottom: 1rem;
    cursor: pointer;
  }

  li:hover {
    color: ${palette.blue_azure};
  }
`;
const Home: NextPage = () => {
  return (
    <Layout>
      <Container role={"home"}>
        <Image
          src={"/image/logo/logo_big.svg"}
          alt="title logo"
          width={665}
          height={590}
        />
        <SListGroup>
          <Link href="/about">
            <a>
              <ListItem>ABOUT</ListItem>
            </a>
          </Link>
          <Link href="/projects">
            <a>
              <ListItem>PROJECTS</ListItem>
            </a>
          </Link>
          <Link href="/posts">
            <a>
              <ListItem>BLOG</ListItem>
            </a>
          </Link>
          <Link href="/contact">
            <a>
              <ListItem>CONTACT</ListItem>
            </a>
          </Link>
        </SListGroup>
      </Container>
    </Layout>
  );
};

export default Home;
