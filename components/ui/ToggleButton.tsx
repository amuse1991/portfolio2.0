import viewports from "../../lib/viewports";
import React, { useState } from "react";
import styled, { StyledProps } from "styled-components";
import DoubleArrowDownIcon from "../../public/image/icons/double_arrow_down.svg";

export enum TToggleButtonType {
  arrow,
  box
}

type TToggleButton = {
  onClick?: () => void;
  type?: TToggleButtonType;
};

const Container = styled.button<{ open: boolean }>`
  display: none;
  border: none;
  background: none;
  cursor: pointer;
  transition: all ease 0.5s;
  margin-left: auto;
  margin-right: 1rem;
  ${props => {
    return props.open ? null : `transform: rotate(90deg);`;
  }}
  @media only screen and (max-width: ${viewports.tablet.width}) {
    display: block;
  }
`;

const toggleArrowAnimation = () => {};

export default function ToggleButton({
  onClick,
  type,
  ...props
}: TToggleButton) {
  const [isOpened, setIsOpened] = useState(false);

  const toggleMenu = () => {
    onClick && onClick();
    toggleArrowAnimation();
    setIsOpened(val => !val);
  };

  return (
    <Container onClick={toggleMenu} open={isOpened}>
      <DoubleArrowDownIcon fill="#FFFFFF" />
    </Container>
  );
}
