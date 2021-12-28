import React from "react";
import styled, { StyledProps } from "styled-components";

type TButtonProps = {
  onClick?: () => {};
  color?: string;
  background?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

const BtnContainer = styled.button<TButtonProps>`
  font-family: DungGeunMo;
`;

export default function Button({
  onClick,
  color,
  children,
  ...props
}: TButtonProps) {
  return <BtnContainer>{children}</BtnContainer>;
}
