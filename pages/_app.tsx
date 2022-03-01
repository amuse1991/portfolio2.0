import "../styles/globals.css";
import type { AppProps } from "next/app";
import GlobalStyle from "@styles/GlobalStyle";
import { wrapper } from "@store/store";
import { Provider } from "react-redux";
import ModalManager from "@components/ui/modal/Modal";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const IndexComponent = dynamic(() => import("@pages/index"), { ssr: false });

function App({ Component, ...pageProps }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(pageProps);
  const router = useRouter();
  return (
    <Provider store={store}>
      <GlobalStyle />
      {router.asPath === "/" ? (
        <IndexComponent {...props.pageProps} />
      ) : (
        <Component {...props.pageProps} />
      )}
      <ModalManager />
    </Provider>
  );
}

export default wrapper.withRedux(App);
