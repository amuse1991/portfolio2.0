import useModal from "@hooks/store/modal/useModal";
import { nanoid } from "@reduxjs/toolkit";
import { useGetPostsQuery } from "@store/modules/post/post.query";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CategoryButton from "./CategoryButton";

import Link from "next/link";
import PostPreview from "./PostGrid";
import CategoryList from "./CategoryList";
import PostGrid from "./PostGrid";
import palette from "@styles/palette";

type TBlogProps = {};

const Container = styled.div`
  display: flex;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  flex: 3;
`;

const Cover = styled.div`
  display: flex;
  width: 100%;
  opacity: 0.5;
  z-index: 10;
  background-color: ${palette.black};
`;

const Blog: React.FC<TBlogProps> = () => {
  const { isLoading, error, data } = useGetPostsQuery();

  return (
    <Container>
      <div style={{ flex: 1 }}>
        <CategoryList />
      </div>
      <Content>{data && <PostGrid posts={data} />}</Content>
    </Container>
  );
};

export default Blog;
