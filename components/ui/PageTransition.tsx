import React, { useCallback, useContext, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { useTransition, animated, useSpringRef } from "react-spring";

import { NextRouter, useRouter, withRouter } from "next/router";
import { NextComponentType } from "next";
import usePageHistory from "@hooks/store/pageHistory/usePageHistory";
import { useSelector } from "react-redux";
import { AppState } from "@store/store";
import { TPageHistory } from "@store/modules/pageHistory/pageHistory.types";
import * as R from "ramda";
import { nanoid } from "@reduxjs/toolkit";

const AnimatedDiv = styled(animated.main)`
  position: relative;
`;

const isValid = e => !!e === true;
// getComponent :: NextRouter -> string -> React.Component
const getComponentFromRouter = R.curry(
  (router: NextRouter, path: string) => {}
);
const getTargetComponentsByHistory = R.pipe(R.filter(isValid));

const PageTransition = ({ children, router, ...props }) => {
  // const historyState = useSelector<AppState, TPageHistory>(
  //   state => state.pageHistory
  // );

  const [items, setItems] = useState<any[]>([router.asPath]);
  // const { isInit } = usePageHistory();

  const transRef = useSpringRef();

  const transitions = useTransition(items, {
    // ref: transRef,
    key: nanoid(),
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
    reset: true
  });

  // useEffect(() => {
  //   transRef.start();
  // }, [items]);

  useEffect(() => {
    const handleStart = url => {
      console.log(`${router.asPath} to ${url} ${router.asPath !== url}`);
      if (router.asPath !== url) {
        setItems(_ => {
          return [router.asPath, url];
        });
      }
      console.log(items);
    };
    const handleStop = () => {
      // NProgress.done()
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  // useEffect(() => {
  //   setItems(prev => {
  //     // console.log("set items", prev, [historyState.prev, historyState.path]);
  //     return [historyState.path, historyState.prev];
  //   });
  // }, [historyState]);

  // useEffect(() => {
  //   console.log("trans ref started");
  //   transRef.start();
  // }, [items]);

  return (
    <>
      {transitions((style, path) => {
        const { Component } =
          (router && router.components && router.components[path]) || {};
        // console.log("path", path);
        return (
          <AnimatedDiv style={style}>
            {children(path ? { Component, pageProps: props } : {})}
          </AnimatedDiv>
        );
      })}
    </>
  );
};

export default withRouter(PageTransition);
