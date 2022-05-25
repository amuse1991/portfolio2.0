import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { TPost } from "@store/modules/post/post.types";
import PostCard from "@components/ui/card/PostCard";
import { nanoid } from "@reduxjs/toolkit";
import Slick from "@components/ui/slider/Slick";
import { Settings } from "react-slick";

const Container = styled.div`
  width: 100%;
  display: flex;
  & > div {
    flex: 0 0 25%;
  }
  flex-wrap: wrap;
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
