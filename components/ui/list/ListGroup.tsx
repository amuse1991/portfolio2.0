import palette from "@styles/palette";
import React, { useState } from "react";
import styled from "styled-components";

type TListGroup = {
  children: React.ReactNode;
};

const SListGroup = styled.ul`
  color: ${palette.white_snow};
  display: flex;
  flex-direction: column;
  align-items: center;
  li {
    margin-bottom: 1rem;
  }
`;

export default function ListGroup({ children }: TListGroup) {
  return <SListGroup>{children}</SListGroup>;
}
