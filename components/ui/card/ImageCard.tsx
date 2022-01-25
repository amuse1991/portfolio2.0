import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Image from "next/image";
import palette from "@styles/palette";
import Button from "../Button";

type TImageCard = {
  title: string;
  summary: string;
  thumbnailPath?: string;
};

const imageFadeout = keyframes`
  from {
    opacity:1;
  }
  to{
    opacity:0
  }
`;

const titleSlideIn = keyframes`
  from {
    top:0;
  }
  to{
    top: 100px;
    display: block;
    
  }
`;

const buttonSlideUp = keyframes`
  from {
    bottom:0;
  }
  to{
    bottom: 100px;
    display: block;
  }
  
`;

const Container = styled.div`
  position: relative;
  margin: 1rem;
  &:hover {
    & > h1 {
      animation: 0.3s linear 0s ${titleSlideIn};
      animation-fill-mode: forwards;
      display: block;
    }
    & > p {
      display: block;
      animation: 0.3s linear 0s ${buttonSlideUp};
      animation-fill-mode: forwards;
    }
    & .animated-img {
      animation: 0.5s linear 0s ${imageFadeout};
      animation-fill-mode: forwards;
    }
  }
`;

const Title = styled.h1`
  display: none;
  font-size: 2rem;
  margin: 1rem 0;
  color: ${palette.white_snow};
  position: absolute;
  top: 0;
  z-index: 1;
  width: 100%;
  text-align: center;
`;

const Description = styled.p`
  position: absolute;
  bottom: 0;
  margin: 0 auto;
  display: none;
  line-height: 1.5;
`;

const ImageCard = ({ thumbnailPath, title, summary }: TImageCard) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Image
        className="animated-img"
        src={thumbnailPath || "/image/satellite.jpeg"}
        alt="project thumbnail"
        width={200}
        height={200}
        layout="responsive"
      />

      <Description>{summary}</Description>
    </Container>
  );
};

export default ImageCard;
