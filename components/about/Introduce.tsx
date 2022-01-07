import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import palette from "@styles/palette";
import IconText from "@components/ui/IconText";
import viewports from "const/viewports";

type TIntroduceProps = {
  onClickToggleSection?: () => void;
};

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 10rem;
  height: 10rem;
  display: flex;

  & > span {
    display: block;
    border-radius: 70%;
    min-width: 20%;
    height: 80%;
  }
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
          src={"/image/me.jpeg"}
          alt={"my photo"}
          layout={"fill"}
          objectFit={"cover"}
        />
      </ImageContainer>
      <Description>
        <span>안녕하세요! 신윤호 입니다!</span>
        <br />
        {
          "풀스택 개발자가 되겠다는 목표를 가진 프론트엔드 개발자 입니다. 프로그래밍을 좋아하며 개발자들이 가진 공유와 소통 문화를 좋아합니다!😃"
        }
        <IconContainer>
          <Image
            src={"/image/logo/github_small.svg"}
            alt={"github logo"}
            width={"20"}
            height={"20"}
          />
          <Image
            src={"/image/logo/tistory.svg"}
            alt={"github logo"}
            width={"20"}
            height={"20"}
          />
          <Image
            src={"/image/icons/mail.svg"}
            alt={"github logo"}
            width={"20"}
            height={"20"}
          />
          <IconText
            iconSrc={"/image/icons/file_download.svg"}
            iconWidth={"20"}
            iconHeight={"20"}
            alt={"download icon"}
          >
            이력서 다운로드
          </IconText>
        </IconContainer>

        <SIconText
          iconSrc={"/image/icons/double_arrow.svg"}
          iconWidth={"20"}
          iconHeight={"20"}
          alt={"download icon"}
          onClick={onClickToggleSection}
        >
          이력 자세히 보기
        </SIconText>
      </Description>
    </Container>
  );
};

export default Introduce;
