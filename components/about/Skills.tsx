import BarChart, { TChartData } from "@components/ui/chart/BarChart";
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

  return (
    <Container ref={ref}>
      {inView && chartData && <BarChart dataset={chartData} />}
      <SSpan>마우스를 올리면 상세한 정보를 볼 수 있어요!</SSpan>
    </Container>
  );
};

export default Skills;
