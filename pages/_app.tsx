import "../styles/globals.css";
import type { AppProps } from "next/app";
import GlobalStyle, { PAGE_TRANSITION_TIMEOUT } from "@styles/GlobalStyle";
import { AppState, wrapper } from "@store/store";
import { Provider, useSelector, useStore } from "react-redux";
import ModalManager from "@components/ui/modal/Modal";
import PageTransition from "@components/ui/PageTransition";
import { useSpringRef } from "react-spring";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";

function App({ Component, ...pageProps }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(pageProps);
  // const { Component: SsrComponent, pageProps: ssrPageProps } = props;
  const router = useRouter();
  return (
    <Provider store={store}>
      <GlobalStyle />
      <PageTransition>
        {({ children, pageProps }) => {
          return <Component {...pageProps} />;
        }}
      </PageTransition>
      {/* <Component {...pageProps} /> */}
      <ModalManager />
    </Provider>
  );
}

export default wrapper.withRedux(App);
