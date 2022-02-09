import reset from "styled-reset";
import { createGlobalStyle, css } from "styled-components";
import { palette } from "./palette";
import {
  moveFromRight,
  moveToLeft,
  moveToTop,
  rotateDrop,
  scaleUp
} from "./keyframes";

export const PAGE_TRANSITION_TIMEOUT = 400;

const globalStyle = css`
  ${reset};
  * {
    box-sizing: border-box;
  }
  body {
    color: ${palette.black_denim};
  }
`;

const pageTransition = css`
  .page-transition-enter {
    opacity: 0.8;
    /* transform: translate3d(0, 20px, 0); */
  }
  .page-transition-enter-active {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    transition: opacity ${PAGE_TRANSITION_TIMEOUT}ms,
      transform ${PAGE_TRANSITION_TIMEOUT}ms;
  }
  .page-transition-exit {
    opacity: 1;
  }
  .page-transition-exit-active {
    opacity: 0.8;
    transition: opacity ${PAGE_TRANSITION_TIMEOUT}ms;
  }
  .loading-indicator-appear,
  .loading-indicator-enter {
    opacity: 0.8;
  }
  .loading-indicator-appear-active,
  .loading-indicator-enter-active {
    opacity: 1;
    transition: opacity ${PAGE_TRANSITION_TIMEOUT}ms;
  }
`;

const GlobalStyle = createGlobalStyle`
  ${globalStyle};
  ${pageTransition};
`;

export default GlobalStyle;
