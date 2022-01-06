import {
  increment,
  incrementByAmount
} from "@store/modules/counter/counter.slice";
import { RootState } from "@store/store";
import palette from "@styles/palette";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const SSpan = styled.span`
  color: ${palette.white_snow};
`;

const Skills = () => {
  const content = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <SSpan>{content}</SSpan>
      <button
        onClick={() => {
          console.log("onclick");
          dispatch(increment({ value: 2, count: 1 }));
        }}
      >
        Up
      </button>
    </div>
  );
};

export default Skills;
