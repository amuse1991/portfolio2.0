import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { TPost } from "@store/modules/post/post.types";

const Container = styled.li`
  width: 100%;
  display: flex;
  /* align-items: center; */
`;
const Thumbnail = styled.div`
  width: 30%;
`;
const TextContent = styled.div`
  margin-left: 1rem;
`;
const Title = styled.span`
  display: block;
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;
const Description = styled.span``;

const PostDate = styled.span``;

const DEFAULT_IMAGE_SRC = "/image/me.jpeg";
const Post: React.FC<TPost> = ({
  title,
  summary,
  thumbnailUrl,
  postingDatetime
}) => {
  return (
    <Container>
      <Thumbnail>
        <Image
          src={thumbnailUrl || DEFAULT_IMAGE_SRC}
          alt={`post ${title} thumbnail`}
          layout="responsive"
          width={200}
          height={200}
        />
      </Thumbnail>
      <TextContent>
        <Title>{title}</Title>
        <PostDate>{postingDatetime}</PostDate>
        <Description>{summary}</Description>
      </TextContent>
    </Container>
  );
};

export default Post;
