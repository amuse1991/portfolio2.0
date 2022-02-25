import ProjectPost from "@components/project/ProjectPost";
// import { TProject } from "@store/modules/project/project.types";
import { TProject } from "@src/types/project";
import { wrapper } from "@store/store";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

type ProjectProps = {
  project: TProject.ProjectType;
};

const Container = styled.div``;
const ProjectHeader = styled.div``;
const ProjectBody = styled.div``;

const dummyData: TProject.ProjectType = {
  _id: 123,
  title: "라이브 강의 플랫폼 개발",
  preview: {
    card: {
      type: "react",
      frontBackground: "#45D8FF",
      backBackground: "#45D8FF"
    },
    tags: ["typescript", "react", "redux"],
    description:
      "라이브TFT소속 개발자로서 react를 이용한 라이브 강의 플랫폼의 프론트엔드 개발을 담당했습니다."
  },
  company: {
    name: "ST유니타스",
    position: "프론트엔드 개발자",
    startDate: "2021.01.01",
    endDate: "2021.08.01"
  },
  devStack: {
    language: ["typescript"],
    frontend: ["react", ["redux", "saga", "thunk"], "hls.js"],
    test: ["jest", "react testing library", "cypress"]
  },
  thumbnail: {
    paths: []
  },
  details: [
    {
      title: "라이브 퀴즈쇼 클라이언트 기능 개발",
      startDate: "2021.01.01",
      endDate: "2021.02.01",
      description:
        "약 2달간 매일 100만원의 상금이 걸리는 이벤트의 프론트엔드 개발을 전담했습니다. 여러 학생들이 실시간으로 문제를 푸는 형태이며, 많은 금액이 걸려있는 이벤트이기 때문에 실시간으로 응대했으며, 예외를 최대한 고려하여 안전하게 서비스했습니다.",
      tasks: [
        "선생님 계정으로 접근 시 문제 등록 및 관리, 강의 도중 문제풀이 시작, 설정된 시간이 지난 후 문제풀이 종료 기능 구현",
        "학생 계정으로 라이브 강의 접근 시 문제풀이 및 결과 확인 기능 구현",
        "학생 계정으로 다시보기 강의 접근 시 문제풀이 및 결과 확인 기능 구현"
      ]
    },
    {
      title: "채팅 기능 클라이언트 개발",
      startDate: "2021.03.01",
      endDate: "2021.06.01",
      description:
        "선생님과 학생간의 채팅 기능 UI 및 socket.io를 통한 백엔드와의 소켓 통신을 구현했습니다.",
      tasks: [
        "선생님, 학생용 메세지 UI 화면 개발",
        "소켓 클라이언트 모듈 구현",
        "엑셀 파일 또는 미리 설정된 세팅에 따라 단체 메세지 전송 기능 구현"
      ]
    },
    {
      title: "라이브 및 VOD영상 클라이언트 유지보수",
      startDate: "2021.03.01",
      endDate: "2021.08.01",
      description:
        "hls.js 를 이용해 영상 클라이언트를 유지보수하였으며, UI개선 작업을 수행했습니다.",
      tasks: [
        "영상 화질 및 배속 설정 기능 추가",
        "VOD 클라이언트 UI 개선",
        "라이브 영상 및 VOD 클라이언트 이슈 담당"
      ]
    }
  ]
};

const Project: React.FC<ProjectProps> = ({ project }) => {
  const router = useRouter();
  return (
    <Container>
      <article>
        <Head>
          <title>{dummyData.title}</title>
        </Head>
        <ProjectPost project={dummyData} />
      </article>
    </Container>
  );
};

export default Project;

// export const getServerSideProps = wrapper.getServerSideProps(
//   store =>
//     async ({ req, res, query, ...etc }) => {
//       try {
//         // 1. store 에서 찾는다

//         // 2. store에 없을 경우 req 보낸다.
//         return {
//           props: {
//             content,
//             frontMatter
//           }
//         };
//       } catch (err) {
//         console.error(err);
//         return {
//           props: { content: "", frontMatter: {} }
//         };
//       }
//     }
// );
