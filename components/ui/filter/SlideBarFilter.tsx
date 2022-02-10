import { nanoid } from "@reduxjs/toolkit";
import palette from "@styles/palette";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background: ${palette.black_denim};
`;
const FilterItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  margin: 0 25px;
  width: 7rem;
  height: 2rem;
  cursor: pointer;

  &.active {
    background: ${palette.blue_azure};
  }
`;

const SlideBarFilter: React.FC = () => {
  const filterNames = ["전체", "업무 경험", "학력", "자격증/활동"];
  const filterKeyMaps = filterNames;
  const [activeKey, setActiveKey] = useState<string>();
  return (
    <Container className="filter-list">
      {filterNames.map(name => {
        const key = nanoid();
        return <FilterItem key={key}>{name}</FilterItem>;
      })}
    </Container>
  );
};

export default SlideBarFilter;
