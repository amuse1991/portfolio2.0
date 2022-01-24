import DoubleArrowIcon from "@components/ui/icons/DoubleArrowIcon";
import ListGroup from "@components/ui/list/ListGroup";
import useModal from "@hooks/store/modal/useModal";
import { nanoid } from "@reduxjs/toolkit";
import { useGetPostsQuery } from "@store/modules/post/post.query";
import palette from "@styles/palette";
import { PageTitle } from "@styles/textStyle";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BlogListItem from "./Post";
import CategoryButton from "./CategoryButton";
import CategoryList from "./CategoryList";
import Post from "./Post";
import Link from "next/link";
import { useRouter } from "next/router";

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
  const { isLoading, error, data } = useGetPostsQuery();

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
          {data &&
            data.map(post => (
              <Link
                href={{
                  pathname: `/posts/${encodeURIComponent(post._id)}`,
                  query: { documentPath: post.documentPath }
                }}
                key={nanoid()}
              >
                <a>
                  <Post key={nanoid()} {...post} />
                </a>
              </Link>
            ))}
        </ArticleList>
      </Content>
    </Container>
  );
};

export default Blog;
