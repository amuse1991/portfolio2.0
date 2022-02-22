import styled from "styled-components";
import { TProject } from "@src/types/project";
import palette from "@styles/palette";
import { nanoid } from "@reduxjs/toolkit";

const Container = styled.div``;

const Header = styled.header`
  display: flex;
`;

const Title = styled.h2`
  color: ${palette.blue_azure};
`;
const Period = styled.span``;
const Article = styled.article``;
const TaskList = styled.ul`
  list-style-type: square;
`;
const TaskListItem = styled.li``;

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
