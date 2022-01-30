import React, { useRef, useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { useRouter } from "next/router";
import { TPageHistory } from "@store/modules/pageHistory/pageHistory.types";
import loadable from "@loadable/component";
import {} from "@pages/index";

type PageTransitionProps = {
  history?: TPageHistory;
  children: React.ReactNode;
};

async function getPageByHistory(history: TPageHistory) {
  const rootPathMatcher = path => path === "/" && "/index.tsx";
  const path = rootPathMatcher(history.path);

  const page = await loadable(() => import(`@pages${path}`)).load();
  const lastPage = await loadable(() => import(`@pages${history.prev}`)).load();
  return { page, lastPage };
}

export default function PageTransition({
  history,
  children
}: PageTransitionProps) {
  const [transitioning, setTransitioning] = useState(true);
  const [PageComponent, setPageComponent] = useState<any>();
  const [LastPageComponent, setLastPageComponent] = useState<any>();
  const router = useRouter();
  useEffect(() => {
    console.log(history);
  }, [history, router]);

  return <>{children}</>;

  // useEffect(() => {
  //   if (!history) return;
  //   getPageByHistory(history).then(({ page, lastPage }) => {
  //     setPageComponent(page);
  //     setLastPageComponent(lastPage);
  //   });
  // }, [history]);

  // if (!history) {
  //   return <>{children}</>;
  // }

  // function onFinishTransition() {
  //   console.log("FINISHED");
  //   setTransitioning(false);
  // }

  // function fixScroll() {
  //   // Scroll left to 0 every frame. if not, firefox will not do this itself.
  //   const concerningElem = document.querySelector(".concerning");
  //   if (concerningElem !== null) {
  //     concerningElem.scrollLeft = 0;
  //   }
  // }

  // return (
  //   <div className="concerning">
  //     <CSSTransition
  //       in={!transitioning}
  //       appear={true}
  //       timeout={600}
  //       classNames="page-transition"
  //       exit={false}
  //       onExited={onFinishTransition}
  //       onEnter={() => {
  //         console.log("ENTER");
  //       }}
  //     >
  //       <div>{PageComponent}</div>
  //     </CSSTransition>
  //     <CSSTransition
  //       in={transitioning}
  //       timeout={600}
  //       classNames="page-transition"
  //       enter={false}
  //       onExiting={fixScroll}
  //       onExited={onFinishTransition}
  //       onEnter={() => {
  //         console.log("ENTER");
  //       }}
  //     >
  //       <div className="outgoing">{LastPageComponent}</div>
  //     </CSSTransition>
  //   </div>
  // );
}
