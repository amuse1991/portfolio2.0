import DoubleArrowIcon from "@components/ui/icons/DoubleArrowIcon";
import ListGroup from "@components/ui/list/ListGroup";
import useModal from "@hooks/store/modal/useModal";
import palette from "@styles/palette";
import { PageTitle } from "@styles/textStyle";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BlogListItem from "./BlogListItem";
import CategoryButton from "./CategoryButton";
import CategoryList from "./CategoryList";

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

const Blog: React.FC<TBlogProps> = () => {
  const [isCategoryOpened, setIsCategoryOpened] = useState<boolean>(false);
  const { openModal, closeModal } = useModal();
  const categoryListModalStyle = {
    background: "none",
    left: 0,
    paddingLeft: 0,
    border: "none",
    minHeight: "100vh",
    maxWidth: "35vw"
  };

  return (
    <Container>
      <PageTitle>BLOG</PageTitle>
      <Content>
        <CategoryButton
          onClick={() => {
            setIsCategoryOpened(prev => !prev);
            openModal({
              type: "blog/Category",
              options: { modalStyle: categoryListModalStyle }
            });
          }}
        />
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
