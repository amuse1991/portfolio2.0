import { fadeIn } from "@styles/keyframes";
import palette from "@styles/palette";
import viewports from "const/viewports";
import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";

export enum TButtonGroupDirection {
  vertical,
  horizontal
}

type TButtonGroupProps = {
  direction?: TButtonGroupDirection;
  children?: React.ReactNode;
  show?: boolean;
  role?: string;
};

const Container = styled.div<{ show: boolean }>`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 1rem 2rem 1rem auto;
  button {
    font-size: 1.2rem;
    background: none;
    border: none;
    cursor: pointer;
    color: ${palette.white_snow};
    margin-right: 2rem;
  }
  button:hover {
    color: ${palette.blue_azure};
  }

  @media only screen and (max-width: ${viewports.tablet.width}) {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    margin: 0;
    border-top: 0.5rem solid ${palette.blue_azure};
    padding-top: ${props => (props.show ? `0.5rem` : `0`)};

    /* background: ${palette.gray}; */
    button {
      display: ${props => (props.show ? `flex` : `none`)};
      margin: 0.25rem 0 0.25rem 2rem;
      width: calc(100%-2rem);
      ${props =>
        props.show &&
        css`
          animation: ${fadeIn} 1s;
        `}
    }
  }
`;

function ButtonGroup({
  direction,
  children,
  show,
  ...props
}: TButtonGroupProps) {
  return (
    <Container show={show === undefined ? true : show} {...props}>
      {children}
    </Container>
  );
}

export default ButtonGroup;
