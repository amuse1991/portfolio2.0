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

const GlobalStyle = createGlobalStyle`
  ${globalStyle};
`;

export default GlobalStyle;
