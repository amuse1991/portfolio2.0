import ThemeLogoCard from "@components/ui/card/ThemeLogoCard";
import BarChart, { TChartData } from "@components/ui/chart/BarChart";
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

const Container = styled.div`
  width: 80%;
  margin-top: 5rem;
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
  const { isLoading, error, data } = useGetSkillsQuery();
  const chartData = data?.map<TChartData>(val => ({
    key: val.title,
    value: val.level * 20
  }));
  const FrontendIcon = (
    <ReactIcon fill={palette.react} width={48} height={48} />
  );
  const frontendDesc = [
    "탄탄한 자바스크립트 기본기를 가지고 있습니다.",
    "JS 또는 TS로 작성된 라이브러리 소스를 직접 분석하여 기능 개선 및 에러 원인 파악이 가능합니다.",
    "Flux, MVC 프로젝트를 실무에서 모두 경험해 보았으며, 특히 Flux 패턴 사용에 익숙합니다.",
    "약 1년 8개월간 react 개발 실무 경험이 있습니다.",
    "JS를 사용한 함수형 프로그래밍에 대한 이해가 있습니다."
  ];

  return (
    <Container ref={ref}>
      <ThemeLogoCard
        title="frontend"
        IconComponent={FrontendIcon}
        themeColor={palette.react}
        description={frontendDesc}
      />
      {/* {inView && chartData && <BarChart dataset={chartData} />}
      <SSpan>마우스를 올리면 상세한 정보를 볼 수 있어요!</SSpan> */}
    </Container>
  );
};

export default Skills;
