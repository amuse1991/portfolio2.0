import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { TProject } from "@src/types/project";
import palette from "@styles/palette";
import { nanoid } from "@reduxjs/toolkit";
import * as R from "ramda";

type TProejctBodyProps = {
  project: TProject.ProjectType;
};

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const TopSection = styled.section`
  display: flex;
  width: 100%;
`;

const TechStack = styled.div`
  flex: 1;
  & > ul > em {
    color: ${palette.blue_cornflower};
    text-transform: capitalize;
  }

  & > ul > li {
    padding-left: 2rem;
  }
`;

const CoverImgContainer = styled.div`
  position: relative;
  flex: 2;
  height: 400px;
`;

// string 이면 그냥 li return
// array 이면 묶에서 li return

const ProjectBody: React.FC<TProejctBodyProps> = ({ project }) => {
  const { devStack } = project;

  const getTechStack = (data: TProject.DevStack) => {
    const joinIfArr = item => (Array.isArray(item) ? item.join(", ") : item);
    const strToLi = (str: string) => <li key={nanoid()}>{str}</li>;
    const getUlWithTitle = R.curry((liGenFn, entries: [string, string[]]) => (
      <ul key={nanoid()}>
        <em>{entries[0]}</em>
        {liGenFn(entries.slice(1))}
      </ul>
    ));

    const getTechLi = items =>
      R.pipe(R.unnest, R.map(joinIfArr), R.map(strToLi))(items);

    return R.pipe(Object.entries, R.map(getUlWithTitle(getTechLi)))(data);
  };

  return (
    <Container>
      <TopSection>
        {!R.isNil(devStack) && <TechStack>{getTechStack(devStack)}</TechStack>}
        <CoverImgContainer>
          <Image src={"/image/me.jpeg"} alt="cover image" layout="fill" />
        </CoverImgContainer>
      </TopSection>
    </Container>
  );
};

export default ProjectBody;
