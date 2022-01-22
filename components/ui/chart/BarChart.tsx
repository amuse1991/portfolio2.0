import { nanoid } from "@reduxjs/toolkit";
import { slideIn } from "@styles/keyframes";
import palette from "@styles/palette";
import React, { useState } from "react";
import styled from "styled-components";

export type TChartData = {
  key: string;
  value: number;
};

type TBarCharProps = {
  dataset: TChartData[];
};

const SContainer = styled.ul``;

const SBarContainer = styled.li`
  display: flex;
  justify-content: flex-start;
  margin: 1rem 0;
`;

const STag = styled.span`
  min-width: 10%;
  color: ${palette.white_snow};
`;

const SBar = styled.div<{ length: number; idx: number }>`
  width: ${props => props.length}%;
  height: 2rem;
  background: ${props =>
    props.idx % 2 === 0 ? palette.blue_azure : palette.blue_cornflower};
  transform-origin: left center;
  animation: 1s linear 0s ${slideIn};
`;

function BarChart({ dataset, ...props }: TBarCharProps) {
  return (
    <SContainer>
      {dataset.map((data, idx) => {
        return (
          <SBarContainer key={nanoid()}>
            <STag>{data.key}</STag>
            <SBar length={data.value} idx={idx} />
          </SBarContainer>
        );
      })}
    </SContainer>
  );
}

export default BarChart;
