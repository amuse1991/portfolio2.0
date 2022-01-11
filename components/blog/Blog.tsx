import DoubleArrowIcon from "@components/ui/icons/DoubleArrowIcon";
import ListGroup from "@components/ui/list/ListGroup";
import palette from "@styles/palette";
import { PageTitle } from "@styles/textStyle";
import React, { useState } from "react";
import styled from "styled-components";
import BlogListItem from "./BlogListItem";

type TBlogProps = {};

const Container = styled.section`
  min-height: 100vh;
`;

const Content = styled.article`
  display: flex;
  align-items: center;
  margin: 0 3rem;
`;

const ArticleList = styled.ul`
  & > li {
    margin-bottom: 2rem;
  }
`;

const CategoryButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: none;
  border: none;
  color: ${palette.white_snow};
  cursor: pointer;
  margin-right: 2rem;
  min-width: 5rem;
  & > span {
    margin-top: 0.3rem;
  }
`;

const Blog: React.FC<TBlogProps> = () => {
  const [isCategoryOpened, setIsCategoryOpened] = useState<boolean>(false);
  return (
    <Container>
      <PageTitle>BLOG</PageTitle>
      <Content>
        <CategoryButton>
          <DoubleArrowIcon fill={palette.white_snow} />
          <span>카테고리</span>
        </CategoryButton>
        <ArticleList>
          {Array.from({ length: 10 }).map((_, idx) => (
            <BlogListItem key={idx} title="hello" description="hello" />
          ))}
        </ArticleList>
      </Content>
    </Container>
  );
};

export default Blog;
