import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { TPost } from "@store/modules/post/post.types";
import PostCard from "@components/ui/card/PostCard";
import { nanoid } from "@reduxjs/toolkit";

const Container = styled.ul`
  width: 100%;
  display: flex;
  & > div {
    flex: 0 0 30%;
  }
`;
const PostGrid: React.FC<{ posts: TPost[] }> = ({ posts }) => {
  return (
    <Container>
      {posts.map(post => (
        <PostCard key={nanoid()} post={post} />
      ))}
    </Container>
  );
};

export default PostGrid;
