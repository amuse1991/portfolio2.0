import React from "react";
import styled from "styled-components";
import Image from "next/image";

type TBlogListItemProps = {
  title: string;
  description: string;
  thumnailSrc?: string;
};
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

const DEFAULT_IMAGE_SRC = "/image/me.jpeg";
const BlogListItem: React.FC<TBlogListItemProps> = ({
  title,
  description,
  thumnailSrc
}) => {
  return (
    <Container>
      <Thumbnail>
        <Image
          src={thumnailSrc || DEFAULT_IMAGE_SRC}
          alt={`post ${title} thumbnail`}
          layout="responsive"
          width={200}
          height={200}
        />
      </Thumbnail>
      <TextContent>
        <Title>TEST TITLE{title}</Title>
        <Description>
          {description}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, sunt
          fugit! Asperiores dolorum accusantium magnam reprehenderit similique
          nihil impedit? Ex non perspiciatis tempore impedit possimus libero
          ullam cum! In, quaerat! Possimus eligendi pariatur sapiente ab ut non,
          laudantium sed aut molestias corrupti debitis alias consectetur ipsum,
          cupiditate, esse delectus! Provident sequi iste cumque rerum numquam
          expedita molestiae quae consequatur deserunt! Expedita dolores totam
          voluptatem quibusdam ea corrupti amet velit nostrum sint, numquam
          dolorem optio, repellat at vitae quo debitis veniam suscipit est
          accusamus qui laborum! Quos doloribus sint ratione quaerat?
        </Description>
      </TextContent>
    </Container>
  );
};

export default BlogListItem;
