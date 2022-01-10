import Document, { DocumentContext } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => {
        return originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });
      };

      const initalProps = await Document.getInitialProps(ctx);

      return {
        ...initalProps,
        styles: (
          <>
            {initalProps.styles}

            {sheet.getStyleElement()}
          </>
        )
      };
    } catch (err) {
      console.error(err);
    } finally {
      sheet.seal();
    }
  }
}
