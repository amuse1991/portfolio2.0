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
import { NextPageContext } from "next/types";
import usePageHistory from "@hooks/store/pageHistory/usePageHistory";

function App({ Component, ...pageProps }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(pageProps);

  const transition = false;

  return (
    <Provider store={store}>
      <GlobalStyle />
      {transition ? (
        <PageTransition>
          {/* <Component {...props} /> */}
          {() => {
            return <Component {...props.pageProps} />;
          }}
        </PageTransition>
      ) : (
        <Component {...props.pageProps} />
      )}

      <ModalManager />
    </Provider>
  );
}

// App.getInitialProps = async (context: NextPageContext) => {
//   context.

//   return { pageProps };
// };

export default wrapper.withRedux(App);
