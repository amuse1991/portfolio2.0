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
};

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
`;
const Text = styled.span`
  margin-left: 0.5rem;
`;

const IconText = ({
  iconSrc,
  iconHeight,
  iconWidth,
  alt,
  children,
  ...props
}: TIconText) => {
  return (
    <Container {...props}>
      <Image src={iconSrc} alt={alt} width={iconWidth} height={iconHeight} />
      <Text>{children}</Text>
    </Container>
  );
};

export default IconText;
