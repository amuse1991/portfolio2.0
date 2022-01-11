import DoubleArrowIcon from "@components/ui/icons/DoubleArrowIcon";
import palette from "@styles/palette";
import React from "react";
import styled from "styled-components";

type TCategoryButton = {
  onClick?: () => void;
};

const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: none;
  border: none;
  color: ${palette.white_snow};
  cursor: pointer;
  margin-right: 2rem;
  min-width: 5rem;
  & > span {
    margin-top: 0.3rem;
  }
`;

const CategoryButton: React.FC<TCategoryButton> = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <DoubleArrowIcon fill={palette.white_snow} />
      <span>카테고리</span>
    </Button>
  );
};

export default CategoryButton;
