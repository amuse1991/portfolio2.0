import Layout from "@components/layout/Layout";
import palette from "@styles/palette";
import { NextPage } from "next";
import styled from "styled-components";
import Image from "next/image";
import ListItem from "@components/ui/list/ListItem";
import { Link } from "react-scroll";
import Trail from "@components/ui/Trail";
import { useState } from "react";
import typo from "@styles/typo";
import space from "@styles/space";

// const Container = styled.div`
//   background: ${palette.black_denim};
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   .header-logo {
//     margin: 0 auto;
//   }
// `;

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  justify-content: center;
  padding-bottom: 50px;
`;

const TrailText = styled.span`
  color: ${palette.white_snow};
  & > em {
    color: ${palette.blue_azure};
    font-size: 8rem;
  }
`;

const Home: NextPage = () => {
  const [open, setOpen] = useState(true);
  return (
    <Layout className="home">
      <Container role={"home"} onClick={() => setOpen(prev => !prev)}>
        <Trail open={open}>
          <TrailText>안녕하세요,</TrailText>
          <TrailText>
            <em>프론트엔드 개발자</em>
          </TrailText>
          <TrailText>
            <em>신윤호</em>
            입니다!
          </TrailText>
        </Trail>

        {/* <Image
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
        </SListGroup> */}
      </Container>
    </Layout>
  );
};

export default Home;
