import { incrementByAmount } from "@store/modules/counter/counterSlice";
import { AppState } from "@store/store";
import palette from "@styles/palette";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const SSpan = styled.span`
  color: ${palette.white_snow};
`;

const Skills = () => {
  const content = useSelector((state: AppState) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <SSpan>{content}</SSpan>
      <button
        onClick={() => {
          console.log("onclick");
          dispatch(incrementByAmount(2));
        }}
      >
        Up
      </button>
    </div>
  );
};

export default Skills;
