import "../styles/globals.css";
import type { AppProps } from "next/app";
import GlobalStyle from "@styles/GlobalStyle";
import { wrapper } from "@store/store";
import { Provider } from "react-redux";

function MyApp({ Component, ...pageProps }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(pageProps);
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Component {...props.pageProps} />
    </Provider>
  );
}

export default wrapper.withRedux(MyApp);
