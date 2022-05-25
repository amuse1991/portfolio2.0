import { TCareer } from "@store/modules/career/career.types";

export const careers: TCareer[] = [
  {
    _id: {
      $oid: "61ec8785103785210ad91de9"
    },
    companyName: "ST유니타스",
    companyURL: "",
    position: "프론트엔드 개발자",
    department: "라이브TFT",
    imgPath: "",
    startDate: "2021.01.01",
    endDate: "2021.09.01",
    techTags: ["React.js"],
    description:
      "라이브TFT소속 개발자로서 react를 이용한 라이브 강의 플랫폼의 프론트엔드 개발을 담당했습니다."
  },
  {
    _id: {
      $oid: "61ec8785103785210ad91de8"
    },
    companyName: "BSG 파트너스",
    companyURL: "",
    position: "풀스택 개발자",
    department: "클라우드 솔루션 개발팀",
    imgPath: "",
    startDate: "2019.07.01",
    endDate: "2020.07.01",
    techTags: ["React.js", "Node.js", "AWS"],
    description:
      "클라우드로 서비스되는 ERP 솔루션 개발을 담당했습니다. 주로 React.js를 사용한 프론트엔드 개발 업무를 수행했으며 필요에 따라 Node.js를 활용했습니다."
  }
];
