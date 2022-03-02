import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import palette from "@styles/palette";
import IconText from "@components/ui/IconText";
import viewports from "../../lib/viewports";

type TIntroduceProps = {
  onClickToggleSection?: () => void;
};

const IMAGE_WIDTH = "600px";
const IMAGE_HEIGHT = "700px";

const Container = styled.section`
  display: flex;
  justify-content: center;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 45.6rem;
  height: 55.9rem;
  & :after {
    content: "";
    position: absolute;
    top: -1.2rem;
    left: -1.2rem;
    border-top: 9px solid ${palette.blue_azure};
    border-left: 9px solid ${palette.blue_azure};
    height: calc(${IMAGE_HEIGHT} - 1.8rem);
    width: calc(${IMAGE_WIDTH} - 1.8rem);
  }
`;

const DescriptionContainer = styled.div`
  max-width: 35.5rem;
  overflow: hidden;
`;

const Description = styled.span`
  /* display: block; */
  max-width: 60%;
  margin-left: 1rem;
  line-height: 1.8rem;
  color: ${palette.white_snow};

  & > span {
    font-size: 1.5em;
  }
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 0.3rem;
  & > * {
    margin-right: 0.5rem !important;
  }
`;

const SIconText = styled(IconText)`
  display: none;
  @media only screen and (max-width: ${viewports.tablet.width}) {
    display: block;
  }
`;

const Introduce = ({ onClickToggleSection }: TIntroduceProps) => {
  return (
    <Container>
      <ImageContainer>
        <Image
          src={"/image/profile.JPEG"}
          width={IMAGE_WIDTH}
          height={IMAGE_HEIGHT}
          alt={"yoonho shin photo"}
        />
      </ImageContainer>
      <DescriptionContainer>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos dicta
        facere libero aliquid placeat quia non facilis ipsa! Distinctio repellat
        quisquam quibusdam possimus nisi necessitatibus nihil iusto fugit a
        doloremque!
      </DescriptionContainer>
    </Container>
  );
};

export default Introduce;
