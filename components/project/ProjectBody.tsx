import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { TProject } from "@src/types/project";
import palette from "@styles/palette";
import { nanoid } from "@reduxjs/toolkit";
import * as R from "ramda";
import ProjectDetail from "./ProjectDetail";
import typo, { fontWeight } from "@styles/typo";
import space, { dpToRem } from "@styles/layout";
import { strToLi } from "@lib/listHelper";

type TProejctBodyProps = {
  project: TProject.ProjectType;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TopSection = styled.section`
  display: flex;
  width: 100%;
  padding: ${space.xLarge} 0;
`;

const TechStack = styled.div`
  flex: 1;
  & > ul {
    padding-top: ${space.large};
  }
  & > ul > * {
    padding-top: ${space.small};
  }
  & > ul > em {
    color: ${palette.blue_cornflower};
    text-transform: capitalize;
    ${typo.haedline6};
  }

  & > ul > li {
    padding-left: 2rem;
    ${typo.haedline6}
  }
`;

const CoverImgContainer = styled.div`
  position: relative;
  flex: 2;
  min-height: ${dpToRem(360)};
`;

const ProjectBody: React.FC<TProejctBodyProps> = ({ project }) => {
  const { devStack, details } = project;

  const getTechStack = (data: TProject.DevStack) => {
    const joinIfArr = item => (Array.isArray(item) ? item.join(", ") : item);
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
      {!R.isNil(details) &&
        details.map(data => <ProjectDetail key={nanoid()} data={data} />)}
    </Container>
  );
};

export default ProjectBody;
