import { nanoid } from "@reduxjs/toolkit";
import { TCareer } from "@store/modules/career/career.types";
import palette from "@styles/palette";
import styled from "styled-components";

const Container = styled.ul`
  padding-left: 2rem;
`;

const ListItem = styled.li`
  margin-top: 0.5rem;
  list-style-type: square;
`;

const Title = styled.span`
  color: ${palette.blue_cornflower};
  font-weight: bold;
  margin-right: 1rem;
`;

const Period = styled.span`
  color: ${palette.blue_cornflower};
`;

const Description = styled.p``;

type TCareerProjectProps = {
  dataset: TCareer[];
};
const CareerProject: React.FC<TCareerProjectProps> = ({}) => {
  return (
    <Container>
      {Array.from({ length: 2 }).map(_ => {
        return (
          <ListItem key={nanoid()}>
            <Title>플랫폼 프론트엔드 개발</Title>
            <Period>2020.01 ~ 2020.03</Period>
            <Description>
              동영상 제공 플랫폼의 신규 기능을 개발했습니다. 기본적으로 react,
              react saga, redux를 이용했으며, 라이브 서비스 클라이언트는
              hls.js를 사용했습니다.
            </Description>
          </ListItem>
        );
      })}
    </Container>
  );
};

export default CareerProject;
