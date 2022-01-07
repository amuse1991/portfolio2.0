import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import palette from "@styles/palette";

type TIconText = {
  iconSrc: string;
  iconWidth: number | string;
  iconHeight: number | string;
  children: React.ReactNode;
  alt: string;
  onClick?: () => void;
};

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  cursor: pointer;
`;

const Text = styled.span`
  margin-left: 0.5rem;
  color: ${palette.blue_cornflower};
  &:hover {
    color: ${palette.blue_azure};
  }
`;

const IconText = ({
  iconSrc,
  iconHeight,
  iconWidth,
  alt,
  children,
  onClick,
  ...props
}: TIconText) => {
  return (
    <Container onClick={onClick} {...props}>
      <Image src={iconSrc} alt={alt} width={iconWidth} height={iconHeight} />
      <Text>{children}</Text>
    </Container>
  );
};

export default IconText;
