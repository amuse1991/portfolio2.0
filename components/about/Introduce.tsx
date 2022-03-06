/* eslint-disable */

import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import palette from "@styles/palette";
import IconText from "@components/ui/IconText";
import viewports from "../../lib/viewports";
import Button from "@components/ui/Button";

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
  & > p {
    margin-bottom: 1rem;
    line-height: 1.5rem;
  }

  & > p > em {
    color: ${palette.blue_azure};
  }
`;

const SButton = styled.div`
  width: 5.7rem;
  height: 2.8rem;
  background: ${palette.blue_azure};
  box-shadow: 0 1.6rem 1.6rem rgb(51 51 51 / 25%);
  border-radius: 25px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${palette.white_snow};
`;

const ButtonContainer = styled.ul`
  display: flex;
  justify-content: space-evenly;
`;

const Introduce = ({ onClickToggleSection }: TIntroduceProps) => {
  return (
    <Container>
      <ImageContainer>
        <Image
          src={"/image/IMG_3293 2.png"}
          width={IMAGE_WIDTH}
          height={IMAGE_HEIGHT}
          alt={"profile image"}
        />
      </ImageContainer>
      <DescriptionContainer>
        <p>안녕하세요, 웹 프론트엔드 개발자 신윤호 입니다.</p>
        <p>
          저의 가장 큰 장점은 언제나{" "}
          <em>
            주어진 상황 내에서 최선의 선택을 통해 최고의 가치를 추구한다는 점
          </em>{" "}
          입니다. 절대 '기술적으로 불가능해요' 라는 말을 하지 않습니다.
          엔지니어로써 자부심과 책임감을 가지고 가능한 모든 방법을 찾아내며,
          기한에 맞게 기획자가 원하는 결과를 확실하게 만들어냅니다.
        </p>
        <p>
          두번째 장점은 <em>풀스택 개발이 가능하다는 점</em>입니다. 학부
          시절부터 웹 풀스택 개발자를 목표로 분산처리, RDB 설계 등 탄탄한
          베이스를 쌓아 왔습니다. 이러한 베이스를 기반으로 첫 회사에서 풀스택
          개발자로 근무하며 프론트엔드 개발은 물론, node 기반의 서비스 개발을
          수행했으며 aws 인프라 또한 다루었습니다. 그리고 그 경험을 토대로 aws
          공인 개발자 자격 또한 취득했습니다.
        </p>
        <p>
          최근에는 프론트엔드 개발자를 넘어 웹 어플리케이션 클라이언트
          개발자로써 성장하고자 하고 있습니다. react와 정말 잘 어울리는 함수형
          프로그래밍에 많은 관심을 가지고 있으며, 브라우저 기반의 3D렌더링에도
          관심이 많아 webGL 기반의 three.js를 학습하고 있습니다. 또한 렌더링
          최적화를 위해 rust 언어와 WebAssembly를 공부하고 있습니다.
        </p>
        {/* <ButtonContainer>
          <SButton>이력서</SButton>
          <SButton>Github</SButton>
          <SButton>Blog</SButton>
        </ButtonContainer> */}
      </DescriptionContainer>
    </Container>
  );
};

export default Introduce;
