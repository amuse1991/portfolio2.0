import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import me from "public/static/img/me.jpeg";
import palette from "@styles/palette";

const Container = styled.div`
  display: flex;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 6rem;
  height: 6rem;
  & > span {
    border-radius: 70%;
  }
`;

const Description = styled.span`
  /* display: block; */
  color: ${palette.white_snow};
`;

const Introduce = () => {
  return (
    <Container>
      <ImageContainer>
        <Image src={me} alt={"my photo"} layout={"fill"} objectFit={"cover"} />
      </ImageContainer>
      <Description>
        {
          "loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem"
        }
      </Description>
    </Container>
  );
};

export default Introduce;
