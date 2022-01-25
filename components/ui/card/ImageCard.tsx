import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import palette from "@styles/palette";

type TImageCard = {
  title: string;
  summary: string;
  imagePath?: string;
};

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

const ImageCard = ({ imagePath, title, summary }: TImageCard) => {
  return (
    <Container>
      <Image
        src={imagePath || "/image/me.jpeg"}
        alt="project thumbnail"
        width={200}
        height={200}
        layout="responsive"
      />
      <Title>{title}</Title>
      <Description>{summary}</Description>
    </Container>
  );
};

export default ImageCard;
