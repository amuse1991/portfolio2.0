import TimelineCard from "@components/ui/card/TimelineCard";
import styled from "styled-components";
import { nanoid } from "@reduxjs/toolkit";

const Container = styled.ul`
  padding-left: 2rem;
  & > li {
    list-style-type: square;
  }
`;

const Activity: React.FC = () => {
  const activities = [
    {
      name: "AWS Certified Developer - Associate",
      startDate: "2020.05",
      endDate: null
    },
    {
      name: "정보처리기사",
      startDate: "2019.05",
      endDate: null
    },
    {
      name: "SQLD",
      startDate: "2019.04",
      endDate: null
    },
    {
      name: "제 12차 CNU Vill 창업 아이디어 검증대회 우수상",
      startDate: "2018.10",
      endDate: null,
      details: [
        "충남대학교 인재개발원 주관",
        "시청각 장애인을 위한 소개팅 플랫폼 제안",
        "발표 및 시연을 위한 정적 페이지 구현 담당"
      ]
    },
    {
      name: "선박안전기술공단 대국민 사회적 가치 실현 공모전 최우수상 ",
      startDate: "2018.09",
      endDate: null,
      details: [
        "선박안전기술공단 주관",
        "선박 재난 시 탈출 경로를 안내하는 어플리케이션 제안",
        "PoC를 위한 웹 어플리케이션 제작 담당"
      ]
    },
    {
      name: "2017 동계 소프트웨어 융합창작캠프 개인부문 우수상",
      startDate: "2017.12",
      endDate: null,
      details: [
        "대전정보문화산업진흥원 주관",
        "옥상공간 녹지화를 목적으로 하는 스마트 비닐하우스 구현",
        "아두이노 프로그래밍 담당"
      ]
    }
  ];

  const data = activities.map(activity => ({
    startDate: activity.startDate,
    endDate: activity.endDate,
    title: activity.name,
    children: (
      <Container>
        {activity?.details?.map(detail => (
          <li key={nanoid()}>{detail}</li>
        ))}
      </Container>
    )
  }));

  return (
    <TimelineCard
      key={nanoid()}
      mainTitle="자격증/활동"
      dataset={data}
      options={{ dateFirst: true }}
    />
  );
};

export default Activity;
