import "../styles/globals.css";
import type { AppProps } from "next/app";
import GlobalStyle, { PAGE_TRANSITION_TIMEOUT } from "@styles/GlobalStyle";
import { AppState, wrapper } from "@store/store";
import { Provider, useSelector, useStore } from "react-redux";
import ModalManager from "@components/ui/modal/Modal";
import LoadingIndicator from "@components/ui/LoadingIndicator";
import { useEffect, useState } from "react";
import PageTransition from "@components/ui/PageTransition";
import { useRouter } from "next/router";
import { TPageHistory } from "@store/modules/pageHistory/pageHistory.types";
import usePageHistory from "@hooks/store/pageHistory/usePageHistory";

function MyApp({ Component, ...pageProps }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(pageProps);
  // const historyState = useSelector<AppState, TPageHistory>(
  //   state => state.pageHistory
  // );
  const [history, setHistory] = useState<TPageHistory>();
  const router = useRouter();
  const { initCpHistory, setPageHistory, getPageHistory, isInit } =
    usePageHistory();
  useEffect(() => {
    initCpHistory();
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    if (!isInit) return;
    setPageHistory({ path: router.asPath });
    setHistory(getPageHistory());
    // eslint-disable-next-line
  }, [router.asPath, setPageHistory]);
  return (
    <Provider store={store}>
      <GlobalStyle />
      <PageTransition history={history}>
        <Component {...props.pageProps} />
      </PageTransition>
      {/* <Component {...props.pageProps} /> */}
      <ModalManager />
    </Provider>
  );
}

export default wrapper.withRedux(MyApp);
