import "../styles/globals.css";
import type { AppInitialProps, AppProps } from "next/app";
import GlobalStyle from "@styles/GlobalStyle";
import { SagaStore, wrapper } from "@store/store";
import { Provider } from "react-redux";
import ModalManager from "@components/ui/modal/Modal";
import App from "next/app";
import { END } from "redux-saga";
import React from "react";

class WrappedApp extends App<AppInitialProps> {
  public static getInitialProps = wrapper.getInitialAppProps(
    store => async context => {
      // 1. Wait for all page actions to dispatch
      const pageProps = {
        // https://nextjs.org/docs/advanced-features/custom-app#caveats
        ...(await App.getInitialProps(context)).pageProps
      };

      // 2. Stop the saga if on server
      if (context.ctx.req) {
        store.dispatch(END);
        await (store as SagaStore).sagaTask?.toPromise();
      }

      // 3. Return props
      return { pageProps };
    }
  );

  public render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <GlobalStyle />
        <Component {...pageProps} />
        <ModalManager />
      </>
    );
  }
}

export default wrapper.withRedux(WrappedApp);
