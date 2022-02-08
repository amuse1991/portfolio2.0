import React, { useContext, useEffect } from "react";
import styled, { css } from "styled-components";
import { useTransition, animated, useSpringRef } from "react-spring";

import { withRouter } from "next/router";

const PageTransition = ({ children, router, ...props }) => {
  const transitions = useTransition(router, {
    key: router => router.pathname,
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" }
  });

  return (
    <>
      {transitions((style, router) => {
        const { Component, props: componentProps } =
          (router && router.components && router.components[router.pathname]) ||
          {};
        return (
          <animated.main key={router.key} style={style}>
            {children(
              router ? { Component, pageProps: props && componentProps } : {}
            )}
          </animated.main>
        );
      })}
    </>
  );
};

export default withRouter(PageTransition);
