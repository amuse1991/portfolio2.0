import React, { useState } from "react";
import styled from "styled-components";

type TIconText = {
  src: "string";
  content: "string";
};

const Container = styled.div``;

const IconText = ({ src, content }: TIconText) => {
  return <Container></Container>;
};

export default IconText;
