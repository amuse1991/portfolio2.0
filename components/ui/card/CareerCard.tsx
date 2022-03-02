import { TCareer } from "@store/modules/career/career.types";
import moment from "moment";
import styled from "styled-components";

type TCareeCardProps = {
  career: TCareer;
};
const CareerCard: React.FC<TCareeCardProps> = ({ career }) => {
  const { position, companyName, startDate, endDate, description } = career;
  const mStart = moment(startDate).format("YYYY.MM");
  const mEnd = moment(endDate).format("YYYY.MM");
  return (
    <Container>
      <Card>
        <Title>{position}</Title>
        <SubTitle>{companyName}</SubTitle>
        <Time>{`${mStart} - ${mEnd}`}</Time>
        <Description>{description}</Description>
      </Card>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 30rem;
  height: 15rem;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: #2b2b2b;
  padding: 3rem;
  box-shadow: 0 1.6rem 2.4rem rgb(0 0 0 / 25%);
`;

const Title = styled.header`
  font-size: 1.5rem;
  line-height: 1rem;
  margin-bottom: 1rem;
  font-weight: bold;
`;
const SubTitle = styled.span`
  font-size: 1.2rem;
  color: #ababab;
`;
const Time = styled.time`
  font-size: 0.8rem;
  color: #ababab;
  margin-bottom: 1rem;
  margin-top: 0.3rem;
`;
const Description = styled.span`
  line-height: 1.5rem;
`;

export default CareerCard;
