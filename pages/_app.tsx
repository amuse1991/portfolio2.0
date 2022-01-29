import "../styles/globals.css";
import type { AppProps } from "next/app";
import GlobalStyle, { PAGE_TRANSITION_TIMEOUT } from "@styles/GlobalStyle";
import { wrapper } from "@store/store";
import { Provider } from "react-redux";
import ModalManager from "@components/ui/modal/Modal";
import LoadingIndicator from "@components/ui/LoadingIndicator";
import { useEffect } from "react";
import useComponentHistory from "@hooks/store/componentHistory/useComponentHistory";
import PageTransition from "@components/ui/PageTransition";
import { useRouter } from "next/router";
import { TComponentHistory } from "@store/modules/componentHistory/componentHistory.types";

function MyApp({ Component, ...pageProps }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(pageProps);
  const router = useRouter();
  const { initCpHistory, setCpHistory, getCpHistory, isInit } =
    useComponentHistory();
  useEffect(() => {
    initCpHistory();
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    if (!isInit) return;
    const current: TComponentHistory = {
      path: router.asPath
    };
    setCpHistory(current);
  }, [router.asPath, isInit, setCpHistory]);
  return (
    <Provider store={store}>
      <GlobalStyle />
      {/* <PageTransition PageComponent={{}} LastPageComponent={{}}>
        <Component {...props.pageProps} />
      </PageTransition> */}
      <Component {...props.pageProps} />
      <ModalManager />
    </Provider>
  );
}

export default wrapper.withRedux(MyApp);
