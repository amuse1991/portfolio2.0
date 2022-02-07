import React, { useContext } from "react";
import styled from "styled-components";
import { useTransition, animated } from "react-spring";

import { withRouter } from "next/router";

const Context = React.createContext<any>(null);

const Provider = ({ router, children }) => (
  <Context.Provider value={router}>{children}</Context.Provider>
);

const useRouter = () => useContext(Context);
const RouterContextProvider = withRouter(Provider);

const Transition = ({ children, ...props }) => {
  const router = useRouter();
  console.log(router);
  const transitions = useTransition(router, router => router.pathname, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: {
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      opacity: 0
    }
  });
  return (
    <>
      {transitions.map(({ item, props: style, key }) => {
        const { Component, props } =
          (item && item.components && item.components[item.pathname]) || {};

        return (
          <Page key={key} style={style}>
            {children(
              item ? { Component, pageProps: props && props.pageProps } : {}
            )}
          </Page>
        );
      })}
    </>
  );
};

function PageTransition({ children, ...props }) {
  return (
    <RouterContextProvider>
      <Transition {...props}>{children}</Transition>
    </RouterContextProvider>
  );
}

export default PageTransition;

const Page = styled(animated.main)`
  min-height: 100%;
  height: 100vh;
  min-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
