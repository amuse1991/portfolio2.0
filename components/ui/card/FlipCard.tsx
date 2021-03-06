import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Image from "next/image";
import palette from "@styles/palette";
import Button from "../Button";
import { animated, useSpring } from "react-spring";
import Link from "next/link";
// import { TProject } from "@store/modules/project/project.types";
import { TProject } from "@src/types/project";
import space, { dpToRem } from "@styles/layout";
import useModal from "@hooks/store/modal/useModal";
import ThumbColudErp from "../images/ThumbCloudErp";

const CARD_WIDTH = "400px";
const CARD_HEIGHT = "500px";

type TFlipCard = {
  data: TProject.ProjectType;
};

const Container = styled.div`
  position: relative;
  margin: 1rem;
  height: 100%;
  cursor: pointer;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin: 1rem 0;
  color: ${palette.white_snow};
  z-index: 1;
  width: 100%;
  text-align: center;
  padding: ${space.large};
`;

const Description = styled.p`
  height: ${dpToRem(100)};
  line-height: 1.25;
  padding: ${space.xLarge};
`;

const Front = styled(animated.div)<{ type: string }>`
  border-radius: 18px;
  width: ${CARD_WIDTH};
  height: ${CARD_HEIGHT};
  position: absolute;
  border-top: 2px solid #fd2155;
  box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%),
    0 1px 10px 0 rgb(0 0 0 / 12%);
  & > h1 {
    color: ${props => props.type === "dotnet" && palette.react};
  }
`;

const Back = styled(animated.div)<{ type: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  width: ${CARD_WIDTH};
  height: ${CARD_HEIGHT};
  border-top: 2px solid #fd2155;
  box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%),
    0 1px 10px 0 rgb(0 0 0 / 12%);
`;

const BgImage = styled(Image)`
  border-radius: 18px;
  z-index: -1;
`;

const SButton = styled.a`
  border: 1px solid ${palette.white_snow};
  margin-top: ${space.large};
  padding: 10px;
  border-radius: 5px;
  &:hover {
    color: ${palette.blue_azure};
    border-color: ${palette.blue_azure};
  }
`;

const Thumbnail = styled(Image)`
  z-index: 2;
`;

// TODO: Generic ?????? ????????? ???
function FlipCard({ data: project }: TFlipCard) {
  const [flipped, setFlipped] = useState(false);
  const { openModal } = useModal();
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  });
  const cardType = project.preview.card.type || "default";
  const bgImgSrc = `/image/card-${cardType}.png`;
  return (
    <Container onClick={() => setFlipped(state => !state)}>
      <Front
        style={{ opacity: opacity.to(o => 1 - o), transform }}
        type={cardType}
      >
        <Title>{project.title}</Title>
        <ThumbColudErp />
      </Front>
      <Back
        style={{
          opacity,
          transform,
          rotateY: "180deg"
        }}
        type={cardType}
      >
        <Thumbnail
          src={"/image/card-js.png"}
          alt="project thumbnail"
          width={250}
          height={250}
        />
        <Description>{project?.preview?.description || ""}</Description>
        <SButton
          onClick={() =>
            openModal({
              type: "project",
              options: { withHeader: true },
              props: { project }
            })
          }
        >
          VIEW MORE
        </SButton>
      </Back>
    </Container>
  );
}

export default FlipCard;
