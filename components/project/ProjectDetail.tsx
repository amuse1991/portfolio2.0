import styled from "styled-components";
import { TProject } from "@src/types/project";
import palette from "@styles/palette";
import { nanoid } from "@reduxjs/toolkit";
import typo from "@styles/typo";
import space from "@styles/space";

const Container = styled.div`
  padding-top: 1.5rem;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
`;

const Title = styled.h2`
  color: ${palette.blue_azure};
  ${typo.headline4}
`;
const Period = styled.span`
  padding-left: 0.5rem;
`;
const Article = styled.article`
  ${typo.body1}
  padding-top: ${space.normal};
`;
const TaskList = styled.ul`
  list-style-type: square;
  ${typo.body1}
  padding-top: ${space.normal};
  padding-left: ${space.xLarge};
`;
const TaskListItem = styled.li`
  padding-top: ${space.small};
`;

type TProjectDetail = {
  data: TProject.Detail;
};

const ProjectDetail: React.FC<TProjectDetail> = ({ data }) => {
  const { title, startDate, endDate, description, tasks } = data;
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <Period>{`${startDate} - ${endDate}`}</Period>
      </Header>
      <Article>
        {description}
        <TaskList>
          {tasks.map(task => (
            <TaskListItem key={nanoid()}>{task}</TaskListItem>
          ))}
        </TaskList>
      </Article>
    </Container>
  );
};

export default ProjectDetail;
