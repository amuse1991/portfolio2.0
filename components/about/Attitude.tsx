import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import palette from "@styles/palette";
import CanDoIcon from "../../public/image/icons/emoji_people_black_48dp.svg";
import SelfMotIcon from "../../public/image/icons/psychology_black_48dp.svg";
import CooperativeIcon from "../../public/image/icons/group_add_black_48dp.svg";
import DoneIcon from "../../public/image/icons/done_all_black_48dp.svg";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 6rem 20%;
`;

const HoxagonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`;

const Hoxagon = styled.div`
  width: 100px;
  height: 55px;
  background: ${palette.blue_cornflower};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &:before {
    content: "";
    position: absolute;
    top: -25px;
    left: 0;
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 25px solid ${palette.blue_cornflower};
  }

  &:after {
    content: "";
    position: absolute;
    bottom: -25px;
    left: 0;
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-top: 25px solid ${palette.blue_cornflower};
  }
`;

const Title = styled.span`
  position: relative;
  top: 2.5rem;
  color: ${palette.white_snow};
  font-weight: bold;
`;

const createHoxagon = () => {
  const width = "50px";
  const fill = palette.white_snow;
  const titles = [
    "Can-Do Attitude",
    "Responsible",
    "Self-Motivated",
    "Cooperative"
  ];
};

const Attitude = () => {
  return (
    <Container>
      <HoxagonContainer>
        <Hoxagon>
          <CanDoIcon fill={palette.white_snow} width={"50px"} />
        </Hoxagon>
        <Title>Can-Do Attitude</Title>
      </HoxagonContainer>
      <HoxagonContainer>
        <Hoxagon>
          <SelfMotIcon fill={palette.white_snow} width={"50px"} />
        </Hoxagon>
        <Title>Self-Motivated</Title>
      </HoxagonContainer>
      <HoxagonContainer>
        <Hoxagon>
          <CooperativeIcon fill={palette.white_snow} width={"50px"} />
        </Hoxagon>
        <Title>Cooperative</Title>
      </HoxagonContainer>
      <HoxagonContainer>
        <Hoxagon>
          <DoneIcon fill={palette.white_snow} width={"50px"} />
        </Hoxagon>
        <Title>Can-Do Attitude</Title>
      </HoxagonContainer>
    </Container>
  );
};

export default Attitude;
