import dynamic from "next/dynamic";

interface pageIndexType {
  path: string;
  Component?: React.ComponentType<any>;
}

// TODO: JSON 파일로 정의해서 읽어오도록 구현
// TODO: path 별로 JSON 파일 생성하는 코드 구현 후, 앱 실행시 실행시킬 것.
const pageIndex: pageIndexType[] = [
  {
    path: "/",
    Component: dynamic(() => import("@pages/index"))
  },
  {
    path: "/about",
    Component: dynamic(() => import("@pages/about"))
  },
  {
    path: "/projects",
    Component: dynamic(() => import("@pages/projects/index"))
  },
  {
    path: "/posts",
    Component: dynamic(() => import("@pages/posts/index"))
  },
  {
    path: "/contact",
    Component: dynamic(() => import("@pages/contact"))
  }
];

export default pageIndex;
