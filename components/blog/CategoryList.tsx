import DoubleArrowIcon from "@components/ui/icons/DoubleArrowIcon";
import Tree from "@components/ui/Tree";
import useModal from "@hooks/store/modal/useModal";
import { nanoid } from "@reduxjs/toolkit";
import palette from "@styles/palette";
import React from "react";
import styled from "styled-components";

type TCategoryList = {};

const Container = styled("div")`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  font-size: 1.2rem;
  line-height: 21px;
  --webkit-user-select: none;
  user-select: none;
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
  color: ${palette.white_snow};
`;

const CategoryList: React.FC<TCategoryList> = () => {
  return (
    <Container>
      <Tree name="Categories" defaultOpen root>
        <Tree name="Frontend" />
        <Tree name="Backend">
          <Tree name="hello" />
          <Tree name="sub-subtree with children">
            <Tree name="child 1" style={{ color: "#37ceff" }} />
            <Tree name="child 2" style={{ color: "#37ceff" }} />
            <Tree name="child 3" style={{ color: "#37ceff" }} />
          </Tree>
          <Tree name="hello" />
        </Tree>
        <Tree name="world" />
        <Tree name={<span>🙀 something something</span>} />
      </Tree>
    </Container>
  );
};

export default CategoryList;
