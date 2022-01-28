import "../styles/globals.css";
import type { AppProps } from "next/app";
import GlobalStyle, { PAGE_TRANSITION_TIMEOUT } from "@styles/GlobalStyle";
import { wrapper } from "@store/store";
import { Provider } from "react-redux";
import ModalManager from "@components/ui/modal/Modal";
import { PageTransition } from "next-page-transitions";
import LoadingIndicator from "@components/ui/LoadingIndicator";

function MyApp({ Component, ...pageProps }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(pageProps);
  return (
    <Provider store={store}>
      <GlobalStyle />
      <PageTransition
        timeout={PAGE_TRANSITION_TIMEOUT}
        classNames="page-transition"
        loadingComponent={<LoadingIndicator />}
        loadingDelay={500}
        loadingTimeout={{
          enter: PAGE_TRANSITION_TIMEOUT,
          exit: 0
        }}
        loadingClassNames="loading-indicator"
      >
        <Component {...props.pageProps} />
      </PageTransition>

      <ModalManager />
    </Provider>
  );
}

export default wrapper.withRedux(MyApp);
