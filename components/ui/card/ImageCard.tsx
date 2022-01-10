import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import palette from "@styles/palette";

type TImageCard = {};

const Container = styled.div`
  color: ${palette.white_snow};
  margin: 2rem;
`;

const Title = styled.span`
  display: block;
  font-size: 2rem;
  margin: 1rem 0;
`;

const Description = styled.span`
  display: block;
`;

const ImageCard = (props: TImageCard) => {
  return (
    <Container>
      <Image
        src={"/image/me.jpeg"}
        alt="sample"
        width={200}
        height={200}
        layout="responsive"
      />
      <Title>Hello</Title>
      <Description>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe unde
        officiis vel nulla neque porro ullam voluptatem sed fuga nemo culpa
        dolore doloribus, veritatis impedit. Cum dolor minus placeat amet!
      </Description>
    </Container>
  );
};

export default ImageCard;
