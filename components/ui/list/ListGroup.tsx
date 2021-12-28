import palette from "@styles/palette";
import React, { useState } from "react";
import styled from "styled-components";

type TListGroup = {
  children: React.ReactNode;
};

export default function ListGroup({ children }: TListGroup) {
  return <ul>{children}</ul>;
}
