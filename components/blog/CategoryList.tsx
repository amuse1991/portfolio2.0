import DoubleArrowIcon from "@components/ui/icons/DoubleArrowIcon";
import useModal from "@hooks/store/modal/useModal";
import { nanoid } from "@reduxjs/toolkit";
import palette from "@styles/palette";
import React from "react";
import styled from "styled-components";

type TCategoryList = {};

const Container = styled.div`
  display: flex;
  height: 100%;
  background: ${palette.black_denim};
`;
const Inner = styled.ul`
  width: 80%;
  height: 100%;
  color: ${palette.white_snow};
`;
const Item = styled.li``;

const SDoubleArrowIcon = styled(DoubleArrowIcon)`
  transform: rotate(180deg);
  cursor: pointer;
  width: 20%;
  height: 100%;
`;

const CategoryList: React.FC<TCategoryList> = () => {
  const { closeModal } = useModal();
  return (
    <Container>
      <Inner>
        {Array.from({ length: 5 }).map(_ => (
          <Item key={nanoid()}>idx</Item>
        ))}
      </Inner>
      <SDoubleArrowIcon onClick={() => closeModal()} />
    </Container>
  );
};

export default CategoryList;
