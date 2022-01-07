import palette from "@styles/palette";
import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";

const Container = styled.div``;
const FigureContainer = styled.div``;
const FigureTitle = styled.span``;
const FigureDesc = styled.span``;

const Gallery = () => {
  return (
    <Container>
      <FigureContainer>
        <Image
          src={"/image/icons/file_download.svg"}
          alt={"alt"}
          width={500}
          height={500}
        />
        <FigureTitle>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, nisi.
        </FigureTitle>
        <FigureDesc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
          maxime doloribus quae pariatur unde ut aliquam soluta cum quasi, eius
          earum mollitia sed recusandae. Repudiandae atque assumenda velit
          quaerat optio!
        </FigureDesc>
      </FigureContainer>
    </Container>
  );
};

export default Gallery;
