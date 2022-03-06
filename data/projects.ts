import { TProject } from "@src/types/project";

const projects: TProject.ProjectType[] = [
  {
    _id: {
      $oid: "62043d46abedbe984675ad67"
    },
    title: "라이브 강의 플랫폼 개발",
    preview: {
      card: {
        type: "ReactJs",
        frontBackground: "#45D8FF",
        backBackground: "#45D8FF"
      },
      tags: ["Typescript", "ReactJs", "Redux"],
      description:
        "라이브TFT소속 개발자로서 ReactJs를 이용한 라이브 강의 플랫폼의 프론트엔드 개발을 담당했습니다."
    },
    company: {
      name: "ST유니타스",
      position: "프론트엔드 개발자",
      startDate: "2021.01.01",
      endDate: "2021.08.01"
    },
    devStack: {
      language: ["Typescript"],
      frontend: ["ReactJs", ["Redux", "saga", "thunk"], "hls.js"],
      test: ["jest", "ReactJs testing library", "cypress"]
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
  },
  {
    _id: {
      $oid: "62045156abedbe984675ad69"
    },
    title: "클라우드 ERP 개발",
    preview: {
      card: {
        type: "Nodedotjs",
        frontBackground: "#45D8FF",
        backBackground: "#45D8FF"
      },
      tags: ["Javascript", "ReactJs", "Redux"],
      description:
        "Cloud solution 팀에서 ERP 솔루션 개발을 담당했습니다. 주로 ReactJs.js를 사용한 프론트엔드 개발 업무를 수행했으며 필요에 따라 Node.js를 활용했습니다."
    },
    company: {
      name: "BSG파트너스",
      position: "풀스택 개발자",
      startDate: "2019.07.01",
      endDate: "2020.07.01"
    },
    devStack: {
      language: ["Javascript"],
      frontend: [
        "ReactJs",
        ["Redux", "thunk"],
        "SAP UI5-webcomponents-ReactJs"
      ],
      test: ["jest"],
      backend: ["Nodedotjs", ["AWS Lambda, S3, ECS"], "Puppeteer"]
    },
    thumbnail: {
      paths: []
    },
    details: [
      {
        title: "클라우드 ERP 솔루션 개발",
        startDate: "2019.07.01",
        endDate: "2020.07.01",
        description:
          "AWS 및 SAP/HANA 인프라에 기반한 ERP 솔루션을 개발했습니다. ReactJs와 SAP에서 제공하는 ui5- webcomponents-ReactJs를 이용한 프론트엔드 기능 구현을 주로 담당했으며, SAP에서 지원하지 않는 기능의 경우 Lamda 를 이용해 서비스를 개발했습니다.",
        tasks: [
          "생산, 공급망 관리 모듈 클라이언트 개발",
          "LOT 추적 서비스 개발",
          "sv파일을 이용해 기존 DB를 SAP By Design DB로 마이그레이션하는 서비스 개발"
        ]
      },
      {
        title: "RPA 서비스 개발",
        startDate: "2020.03.01",
        endDate: "2020.07.01",
        description:
          "업무를 자동화하고, 개발팀을 보유하지 않은 기업도 커스터마이징된 서비스를 구현할 수 있도록 하는 기능의 PoC를 위한 프 로토타입을 개발했습니다. Json 파일을 파싱하여 puppeteer로 기능을 수행한 후, 그 결과를 반환하는 서비스였으며, Node.js 환경에서 개발했습니다. 또한 안정적인 서비스 제공을 위해 AWS ECS를 사용했습니다.",
        tasks: [
          "JSON 파일을 기반으로 작동하는 자동화 프로그램 개발",
          "개발 지식이 없는 실무자가 동작을 정의할 수 있는 화면 개발(PoC단계이므로 단순 form형태로 개발)",
          "Node.js 를 이용한 서버 개발 및 Docker세팅",
          "CI/CD를 위한 ECS 구성",
          "DynamoDB 세팅 및 연동"
        ]
      }
    ]
  },
  {
    _id: {
      $oid: "rpa"
    },
    title: "RPA 서비스 개발",
    preview: {
      card: {
        type: "Nodedotjs",
        frontBackground: "#45D8FF",
        backBackground: "#45D8FF"
      },
      tags: ["Javascript", "ReactJs", "Redux"],
      description:
        "Cloud solution 팀에서 ERP 솔루션 개발을 담당했습니다. 주로 ReactJs.js를 사용한 프론트엔드 개발 업무를 수행했으며 필요에 따라 Node.js를 활용했습니다."
    },
    company: {
      name: "BSG파트너스",
      position: "풀스택 개발자",
      startDate: "2019.07.01",
      endDate: "2020.07.01"
    },
    devStack: {
      language: ["Javascript"],
      frontend: [
        "ReactJs",
        ["Redux", "thunk"],
        "SAP UI5-webcomponents-ReactJs"
      ],
      test: ["jest"],
      backend: ["Nodedotjs", ["AWS Lambda, S3, ECS"], "Puppeteer"]
    },
    thumbnail: {
      paths: []
    },
    details: [
      {
        title: "RPA 서비스 개발",
        startDate: "2020.03.01",
        endDate: "2020.07.01",
        description:
          "업무를 자동화하고, 개발팀을 보유하지 않은 기업도 커스터마이징된 서비스를 구현할 수 있도록 하는 기능의 PoC를 위한 프 로토타입을 개발했습니다. Json 파일을 파싱하여 puppeteer로 기능을 수행한 후, 그 결과를 반환하는 서비스였으며, Node.js 환경에서 개발했습니다. 또한 안정적인 서비스 제공을 위해 AWS ECS를 사용했습니다.",
        tasks: [
          "JSON 파일을 기반으로 작동하는 자동화 프로그램 개발",
          "개발 지식이 없는 실무자가 동작을 정의할 수 있는 화면 개발(PoC단계이므로 단순 form형태로 개발)",
          "Node.js 를 이용한 서버 개발 및 Docker세팅",
          "CI/CD를 위한 ECS 구성",
          "DynamoDB 세팅 및 연동"
        ]
      }
    ]
  },
  {
    _id: {
      $oid: "62045489abedbe984675ad6a"
    },
    title: "위성 관제 모니터링 웹 서비스",
    preview: {
      card: {
        type: "ReactJs",
        frontBackground: "#45D8FF",
        backBackground: "#45D8FF"
      },
      tags: ["ReactJs", "Express", "Socketdotio", "Microsoftsqlserver"],
      description: ""
    },
    company: {
      name: "졸업 프로젝트/쎄트렉아이(산학협력)",
      position: "풀스택 개발",
      startDate: "2018.03.01",
      endDate: "2018.12.01"
    },
    devStack: {
      language: ["Javascript"],
      frontend: [["ReactJs", "mobx"], "chart.js", "socket.io-client"],
      backend: [["Nodedotjs, Express"], "socket.io", "SQL Server 2017"]
    },
    thumbnail: {
      paths: []
    },
    details: [
      {
        title: "풀스택 개발",
        startDate: "2018.03.01",
        endDate: "2018.12.01",
        description:
          "위성이 전달하는 위성 상태 정보 및 계측 정보를 도시하는 웹 어플리케이션을 개발했습니다. 프 로젝트 진행 중 팀원이 갑자기 휴학하였지만 덕분에 JS기반의 풀스택 개발을 경험할 수 있었습 니다. 위성 데이터는 산학협력 업체에서 제공받은 데이터를 기반으로 mock server를 만들어 송출했습니다.",
        tasks: [
          "API 및 소켓 서버 개발, DB연동",
          "RDB 아키텍처 설계 및 구현",
          "mock server가 전송하는 데이터 및 DB저장된 데이터 도시화"
        ]
      }
    ]
  },
  {
    _id: {
      $oid: "6204574dabedbe984675ad6b"
    },
    title: "업무 평가 관리 웹 서비스",
    preview: {
      card: {
        type: "dotnet",
        frontBackground: "#FFF8F6",
        backBackground: "#FFF8F6"
      },
      tags: ["Csharp", "Dotnet", "Microsoftsqlserver"],
      description: ""
    },
    company: {
      name: "인턴 프로젝트/쎄트렉아이(산학협력)",
      position: "풀스택 개발",
      startDate: "2018.01.01",
      endDate: "2018.02.01"
    },
    devStack: {
      language: ["C#"],
      frontend: [".NET MVC"],
      backend: [".NET Web API", "SQL Server"]
    },
    thumbnail: {
      paths: []
    },
    details: [
      {
        title: "풀스택 개발",
        startDate: "2018.01.01",
        endDate: "2018.02.01",
        description:
          "Jira API를 사용해 사원들이 수행한 업무 리스트를 볼 수 있고, 각 업무에 대해 평가를 할 수 있 는 웹 서비스의 프로토타입을 개발했습니다.",
        tasks: [
          "MVC 패턴에 따라 클라이언트 개발",
          "RDB 아키텍처 설계 및 구현",
          ".NET Web API 를 사용한 API 서버 개발"
        ]
      }
    ]
  }
];

export default projects;
