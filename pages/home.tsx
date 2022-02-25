import Layout from "@components/layout/Layout";
import palette from "@styles/palette";
import { NextPage } from "next";
import styled from "styled-components";
import Image from "next/image";
import ListItem from "@components/ui/list/ListItem";
import { Link } from "react-scroll";

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
    <Layout className="home">
      <Container role={"home"}>
        <Image
          src={"/image/logo/logo_big.svg"}
          alt="title logo"
          width={665}
          height={590}
        />
        <SListGroup>
          <Link to="home" spy={true} smooth={true}>
            <ListItem>HOME</ListItem>
          </Link>
          <Link to="about" spy={true} smooth={true}>
            <ListItem>ABOUT</ListItem>
          </Link>
          <Link to="projects" spy={true} smooth={true}>
            <ListItem>PROJECTS</ListItem>
          </Link>
          <Link to="blog" spy={true} smooth={true}>
            <ListItem>BLOG</ListItem>
          </Link>
          <Link to="contact" spy={true} smooth={true}>
            <ListItem>CONTACT</ListItem>
          </Link>
        </SListGroup>
      </Container>
    </Layout>
  );
};

export default Home;
