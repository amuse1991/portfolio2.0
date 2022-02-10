import "../styles/globals.css";
import type { AppProps } from "next/app";
import GlobalStyle, { PAGE_TRANSITION_TIMEOUT } from "@styles/GlobalStyle";
import { AppState, wrapper } from "@store/store";
import { Provider, useSelector, useStore } from "react-redux";
import ModalManager from "@components/ui/modal/Modal";
import { PageTransition } from "next-page-transitions";
import GNB from "@components/layout/GNB";

function App({ Component, ...pageProps }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(pageProps);
  return (
    <Provider store={store}>
      <GlobalStyle />
      <GNB />
      <PageTransition
        skipInitialTransition
        timeout={300}
        classNames="page-transition"
      >
        <Component {...props.pageProps} />
      </PageTransition>
      <ModalManager />
    </Provider>
  );
}

export default wrapper.withRedux(App);
