import useModal from "@hooks/store/modal/useModal";
import { nanoid } from "@reduxjs/toolkit";
import { useGetPostsQuery } from "@store/modules/post/post.query";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CategoryButton from "./CategoryButton";

import Link from "next/link";
import PostPreview from "./PostPreview";
import CategoryList from "./CategoryList";

type TBlogProps = {};

const Container = styled.div`
  display: flex;
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
  const { openModal } = useModal();
  const categoryListModalStyle = {
    content: {
      background: "none",
      left: 0,
      paddingLeft: 0,
      border: "none",
      minHeight: "100vh",
      maxWidth: "35vw"
    }
  };
  const { isLoading, error, data } = useGetPostsQuery();

  return (
    <Container>
      <CategoryList />
      <Content>
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
                  <PostPreview key={nanoid()} {...post} />
                </a>
              </Link>
            ))}
        </ArticleList>
      </Content>
    </Container>
  );
};

export default Blog;
