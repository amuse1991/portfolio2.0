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

type TBlogProps = {};

const Container = styled.div`
  display: flex;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  flex: 2;
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
