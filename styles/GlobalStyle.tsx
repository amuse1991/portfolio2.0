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

// const pageTransition = css`
//   .page-transition-enter {
//     animation: ${scaleUp} 0.7s ease both;
//     /* animation: ${moveFromRight} 0.7s ease-in-out both; */
//     /* transform: translate3d(0, 0, 0); */
//   }
//   .page-transition-enter-active {
//     /* animation: ${scaleUp} 0.7s ease both; */
//     /* animation: ${moveFromRight} 0.7s ease-in-out both; */
//     /* transform: translate3d(0, 0, 0);
//     transition: transform ${PAGE_TRANSITION_TIMEOUT}ms; */
//     /* animation: ${moveToLeft} 0.7s ease-in-out both; */
//   }
//   .page-transition-exit {
//     display: block !important;
//     /* animation: ${moveToLeft} 0.7s ease-in-out both; */
//     /* transform: translate3d(0, 0, 0); */
//   }
//   .page-transition-exit-active {
//     display: block !important;
//     -webkit-transform-origin: 0% 0%;
//     transform-origin: 0% 0%;
//     -webkit-animation: ${rotateDrop} 1s both ease-in;
//     animation: ${rotateDrop} 1s both ease-in;
//     /* animation: ${moveToLeft} 0.7s ease-in-out both; */
//     /* transform: translate3d(-100vw, 0, 0);
//     transition: transform ${PAGE_TRANSITION_TIMEOUT}ms; */
//   }
//   .loading-indicator-appear,
//   .loading-indicator-enter {
//     opacity: 1;
//   }
//   .loading-indicator-appear-active,
//   .loading-indicator-enter-active {
//     opacity: 1;
//     transition: opacity ${PAGE_TRANSITION_TIMEOUT}ms;
//   }
// `;

const pageTransition = css`
  .page-transition-enter {
    opacity: 0;
  }
  .page-transition-enter-active {
    opacity: 1;
    transition: opacity 200ms;
  }
  .page-transition-exit {
    opacity: 1;
  }
  .page-transition-exit-active {
    opacity: 0;
    transition: opacity 200ms;
  }
`;

const GlobalStyle = createGlobalStyle`
  ${globalStyle};
  ${pageTransition};
`;

export default GlobalStyle;
