import TimelineCard from "@components/ui/card/TimelineCard";
import { nanoid } from "@reduxjs/toolkit";
import styled from "styled-components";

const Container = styled.div`
  &>p: {
    line-height: 1.5;
  }
`;

const Education: React.FC = () => {
  const education = {
    name: "충남대학교",
    startDate: "2017.03",
    endDate: "2019.02",
    major: "컴퓨터공학 전공 (3.81 / 4.5)",
    description: "동국대학교(경주) 호텔경영학과 중퇴 후 편입"
  };

  const data = {
    startDate: education.startDate,
    endDate: education.endDate,
    title: education.name,
    children: (
      <Container>
        <p>{education.major}</p>
        <p>{education.description}</p>
      </Container>
    )
  };

  return <TimelineCard key={nanoid()} mainTitle="학력" dataset={data} />;
};

export default Education;
