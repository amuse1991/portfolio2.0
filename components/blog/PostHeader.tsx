import moment from "moment";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
`;
const Title = styled.h1`
  font-size: 3rem;
  margin-right: 1rem;
  margin-bottom: 0.5rem;
`;
const DateTime = styled.span``;

type TPostHeaderProps = {
  title?: string;
  dateString?: string;
};

const PostHeader: React.FC<TPostHeaderProps> = ({ title, dateString }) => {
  title = !title ? "제목 없음" : title;
  const datetime = !dateString
    ? "날짜 없음"
    : moment(dateString, true).format("YYYY-MM-DD hh:mm:ss");
  return (
    <Container>
      <Title>{title}</Title>
      <DateTime>{datetime}</DateTime>
    </Container>
  );
};

export default PostHeader;
