import { keyframes } from "styled-components";

export const fadeIn = keyframes`
  from {
    opacity:0
  }
  to{
    opacity:1
  }
`;

export const fadeOut = keyframes`
  from {
    opacity:1
  }
  to{
    opacity:0
  }
`;

export const slideIn = keyframes`
  from { transform: scaleX(0) }
  to   { transform: scaleX(1) }
`;

export const spin = keyframes`
  0% {transform: rotate(0deg)}
  100% { transform: rotate(360deg)}
`;
