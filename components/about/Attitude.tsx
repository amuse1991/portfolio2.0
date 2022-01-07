import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import palette from "@styles/palette";
import CanDoIcon from "../../public/image/icons/emoji_people_black_48dp.svg";
import SelfMotIcon from "../../public/image/icons/psychology_black_48dp.svg";
import CooperativeIcon from "../../public/image/icons/group_add_black_48dp.svg";
import DoneIcon from "../../public/image/icons/done_all_black_48dp.svg";
import viewports from "const/viewports";

const Container = styled.div`
  display: flex;
  /* justify-content: center; */
  width: 100%;
  margin-top: 6rem;

  @media only screen and (max-width: ${viewports.tablet.width}) {
    flex-flow: row wrap;
  }
`;

const HoxagonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  @media only screen and (max-width: ${viewports.tablet.width}) {
    margin-top: 2rem;
  }
`;

const Hoxagon = styled.div`
  width: 100px;
  height: 55px;
  background: ${palette.blue_cornflower};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &:before,
  &:after {
    content: "";
    position: absolute;
    left: 0;
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
  }

  &:before {
    top: -25px;
    border-bottom: 25px solid ${palette.blue_cornflower};
  }

  &:after {
    bottom: -25px;
    border-top: 25px solid ${palette.blue_cornflower};
  }

  @media only screen and (max-width: ${viewports.tablet.width}) {
    width: 50px;
    height: 35px;

    &:before,
    &:after {
      border-left: 25px solid transparent;
      border-right: 25px solid transparent;
    }

    &:before {
      top: -10px;
      border-bottom: 10px solid ${palette.blue_cornflower};
    }

    &:after {
      bottom: -10px;
      border-top: 10px solid ${palette.blue_cornflower};
    }
  }
`;

const Title = styled.span`
  margin-top: 3rem;
  color: ${palette.white_snow};
  font-weight: bold;
  @media only screen and (max-width: ${viewports.tablet.width}) {
    margin-top: 2rem;
  }
`;

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
        <Title>Responsible</Title>
      </HoxagonContainer>
    </Container>
  );
};

export default Attitude;
