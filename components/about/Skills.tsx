import BarChart from "@components/ui/chart/BarChart";
import {
  increment,
  incrementByAmount
} from "@store/modules/counter/counter.slice";
import { RootState } from "@store/store";
import palette from "@styles/palette";
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
  const content = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const { ref, inView } = useInView({
    threshold: 0
  });
  const dummy = [
    { key: "js", value: 100 },
    { key: "react", value: 80 },
    { key: "asda", value: 40 },
    { key: "cccc", value: 10 },
    { key: "jsss", value: 60 }
  ];

  return (
    <Container ref={ref}>
      {inView && <BarChart dataset={dummy} />}
      <SSpan>마우스를 올리면 상세한 정보를 볼 수 있어요!</SSpan>
    </Container>
  );
};

export default Skills;
