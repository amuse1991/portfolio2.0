import "../styles/globals.css";
import type { AppProps } from "next/app";
import GlobalStyle, { PAGE_TRANSITION_TIMEOUT } from "@styles/GlobalStyle";
import { AppState, wrapper } from "@store/store";
import { Provider, useSelector, useStore } from "react-redux";
import ModalManager from "@components/ui/modal/Modal";
import PageTransition from "@components/ui/PageTransition";

function MyApp({ Component, ...pageProps }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(pageProps);
  // const { Component: SsrComponent, pageProps: ssrPageProps } = props;
  return (
    <Provider store={store}>
      <GlobalStyle />
      <PageTransition>
        {({ children, pageProps }) => {
          return children ? (
            <Component {...pageProps} />
          ) : (
            <Component {...pageProps} />
            // <SsrComponent {...ssrPageProps} />
          );
        }}
      </PageTransition>
      {/* <Component {...pageProps} /> */}
      <ModalManager />
    </Provider>
  );
}

export default wrapper.withRedux(MyApp);
