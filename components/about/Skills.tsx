import ThemeLogoCard from "@components/ui/card/ThemeLogoCard";
import BarChart, { TChartData } from "@components/ui/chart/BarChart";
import CodeIcon from "@components/ui/icons/CodeIcon";
import { ReactIcon } from "@components/ui/icons/ReactIcon";
import { skipToken } from "@reduxjs/toolkit/dist/query";
import { useGetSkillsQuery } from "@store/modules/skills/skills.query";
import { AppState, wrapper } from "@store/store";
import palette from "@styles/palette";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import ServerIcon from "@components/ui/icons/ServerIcon";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const SSpan = styled.span`
  color: ${palette.white_snow};
`;

const Skills = () => {
  const dispatch = useDispatch();
  const { ref, inView } = useInView({
    threshold: 0
  });

  const router = useRouter();

  const FrontendIcon = (
    <ReactIcon fill={palette.react} width={48} height={48} />
  );
  const BackendIcon = <CodeIcon fill={palette.red} width={48} height={48} />;
  const InfraIcon = <ServerIcon fill={palette.yellow} width={48} height={48} />;
  const frontendDesc = [
    "탄탄한 자바스크립트 기본기를 가지고 있습니다.",
    "JS 또는 TS로 작성된 라이브러리 소스를 직접 분석하여 기능 개선 및 에러 원인 파악이 가능합니다.",
    "Flux, MVC 프로젝트를 실무에서 모두 경험해 보았으며, 특히 Flux 패턴 사용에 익숙합니다.",
    "약 1년 8개월간 react 개발 실무 경험이 있습니다.",
    "JS를 사용한 함수형 프로그래밍에 대한 이해가 있습니다."
  ];
  const backendDesc = [
    "Node.js를 사용한 서버 개발 실무 프로젝트 경험이 있습니다.",
    "소켓 통신 구현이 가능합니다.",
    "RDBMS, NoSQL DB 설정 및 연동이 가능합니다."
  ];
  const infraDesc = [
    "실무에서 Lamda, ECS, DynamoDB를 사용한 경험이 있으며, AWS 자격증을 보유하고 있습니다.",
    "Docker 세팅 및 shell script 작성이 가능합니다."
  ];

  return (
    <Container ref={ref}>
      <ThemeLogoCard
        title="Frontend"
        IconComponent={FrontendIcon}
        themeColor={palette.react}
        description={frontendDesc}
      />
      <ThemeLogoCard
        title="Backend"
        IconComponent={BackendIcon}
        themeColor={palette.red}
        description={backendDesc}
      />
      <ThemeLogoCard
        title="Infra / System"
        IconComponent={InfraIcon}
        themeColor={palette.yellow}
        description={infraDesc}
      />
      {/* {inView && chartData && <BarChart dataset={chartData} />}
      <SSpan>마우스를 올리면 상세한 정보를 볼 수 있어요!</SSpan> */}
    </Container>
  );
};

export default Skills;
