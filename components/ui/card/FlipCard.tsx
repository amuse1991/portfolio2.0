import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Image from "next/image";
import palette from "@styles/palette";
import Button from "../Button";
import { animated, useSpring } from "react-spring";
import Link from "next/link";
// import { TProject } from "@store/modules/project/project.types";
import { TProject } from "@src/types/project";

type TFlipCard = {
  data: TProject.ProjectType;
};

const Container = styled.div`
  position: relative;
  margin: 1rem;
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
  cursor: pointer;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin: 1rem 0;
  color: ${palette.white_snow};
  z-index: 1;
  width: 100%;
  text-align: center;
`;

const Description = styled.p``;

const Front = styled(animated.div)`
  border-radius: 18px;
  width: 400px;
  height: 500px;
  /* background: ${palette.blue_cornflower}; */
  position: absolute;
`;

const Back = styled(animated.div)`
  border-radius: 18px;
  width: 400px;
  height: 500px;
  background: ${palette.react};
`;

const BgImage = styled(Image)`
  border-radius: 18px;
  z-index: -1;
`;

// TODO: Generic 하게 변경할 것
function FlipCard({ data: project }: TFlipCard) {
  const [flipped, setFlipped] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  });

  return (
    <Container onClick={() => setFlipped(state => !state)}>
      <Front style={{ opacity: opacity.to(o => 1 - o), transform }}>
        <Title>{project.title}</Title>
        <BgImage
          className="animated-img"
          src={"/image/card-react.png"}
          alt="project thumbnail"
          width={200}
          height={200}
          layout="fill"
        />
      </Front>
      <Back
        style={{
          opacity,
          transform,
          rotateY: "180deg"
        }}
      >
        <Description>{project?.preview?.description || ""}</Description>
        <Link
          href={{
            pathname: `/projects/${encodeURIComponent(project._id)}`
          }}
        >
          <a>
            <button>view more</button>
          </a>
        </Link>
      </Back>
    </Container>
  );
}

export default FlipCard;
