import React, { useState } from "react";
import styled from "styled-components";

type TListItem = {
  children: React.ReactNode;
};

const SListItem = styled.li`
  font-family: "NanumGothic";
  font-size: 1.5rem;
  }
`;

export default function ListItem({ children, ...props }: TListItem) {
  return <SListItem>{children}</SListItem>;
}
