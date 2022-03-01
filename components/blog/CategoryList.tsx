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
  background: #191b21;
  overflow: hidden;
  font-family: ui-monospace, monospace;
  font-size: 14px;
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
  const { closeModal } = useModal();
  return (
    <Container>
      <Tree name="main" defaultOpen>
        <Tree name="hello" />
        <Tree name="subtree with children">
          <Tree name="hello" />
          <Tree name="sub-subtree with children">
            <Tree name="child 1" style={{ color: "#37ceff" }} />
            <Tree name="child 2" style={{ color: "#37ceff" }} />
            <Tree name="child 3" style={{ color: "#37ceff" }} />
            <Tree name="custom content">
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: 200,
                  padding: 10
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    background: "black",
                    borderRadius: 5
                  }}
                />
              </div>
            </Tree>
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
