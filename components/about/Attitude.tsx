import React, { useEffect, useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import palette from "@styles/palette";
import CanDoIcon from "../../public/image/icons/emoji_people_black_48dp.svg";
import SelfMotIcon from "../../public/image/icons/psychology_black_48dp.svg";
import CooperativeIcon from "../../public/image/icons/group_add_black_48dp.svg";
import DoneIcon from "../../public/image/icons/done_all_black_48dp.svg";
import viewports from "../../lib/viewports";
import { useInView } from "react-intersection-observer";
import { config, animated, useSpring } from "@react-spring/web";

const Container = styled.ul`
  display: flex;
  /* justify-content: center; */
  width: 100%;
  margin-top: 6rem;

  @media only screen and (max-width: ${viewports.tablet.width}) {
    flex-flow: row wrap;
  }
`;

const Item = styled.li`
  display: flex;
  flex: 1 1 0%;
  margin: 40px;
  flex-direction: column;
  & > * {
    margin: 5px;
  }
  @media only screen and (max-width: ${viewports.tablet.width}) {
    margin-top: 2rem;
  }
`;

const Circle = styled(animated.div)`
  width: 78px;
  height: 78px;
  padding: 18px;
  background: ${palette.blue_cornflower};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;

  & :hover {
    border-radius: 10px;
    width: 100%;
    height: 48px;
  }
`;

const Title = styled.span`
  color: ${palette.white_snow};
  font-size: 24px;
  @media only screen and (max-width: ${viewports.tablet.width}) {
    margin-top: 2rem;
  }
`;

const Description = styled.span`
  line-height: 1.4;
`;

const Attitude = () => {
  const { ref: inViewRef, inView } = useInView();
  const [circleStyle, circleApi] = useSpring(
    {
      reset: true,
      from: {
        width: "78px",
        height: "78px",
        borderRadius: "100%"
      },
      to: [
        {
          borderRadius: "10px"
        },
        {
          width: "154px"
        },
        {
          height: "48px"
        }
      ],
      config: {
        duration: 500
      }
    },
    [inView]
  );

  useEffect(() => {
    circleApi.start();
    if (!inView) {
    }
  }, [inView]);
  return (
    <Container ref={inViewRef}>
      <Item>
        <Circle style={circleStyle}>
          <CanDoIcon fill={palette.white_snow} width={"100%"} />
        </Circle>
        <Title>Can-Do Attitude</Title>
        <Description>
          ????????? ????????? ????????? ???????????????.
          {/* eslint-disable-next-line  */}
          <br /> '?????? ??????????????? ??? ??????' ?????? ?????? ?????? ????????????. <br />{" "}
          ????????? ?????? ????????? ????????? ???????????? ?????? ????????? ????????? ?????????.
        </Description>
      </Item>
      <Item>
        <Circle>
          <SelfMotIcon fill={palette.white_snow} width={"50px"} />
        </Circle>
        <Title>Self-Motivated</Title>
      </Item>
      <Item>
        <Circle>
          <CooperativeIcon fill={palette.white_snow} width={"50px"} />
        </Circle>
        <Title>Cooperative</Title>
      </Item>
    </Container>
  );
};

export default Attitude;
