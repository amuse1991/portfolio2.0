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

export const moveToLeft = keyframes`
	from { }
	to { transform: translateX(-100%); }
`;

export const moveFromLeft = keyframes`
	from { transform: translateX(-100%); }
`;

export const moveToRight = keyframes`
	from { }
	to { transform: translateX(100%); }
`;

export const moveFromRight = keyframes`
	from { transform: translateX(100%); }
`;

export const moveToTop = keyframes`
	from { }
	to { transform: translateY(-100%); }
`;

export const moveFromTop = keyframes`
	from { transform: translateY(-100%); }
`;

export const moveToBottom = keyframes`
	from { }
	to { transform: translateY(100%); }
`;

export const moveFromBottom = keyframes`
	from { transform: translateY(100%); }
`;

export const rotateDrop = keyframes`{
	0% { -webkit-transform: rotateZ(0deg); transform: rotateZ(0deg); }
	20% { -webkit-transform: rotateZ(10deg); transform: rotateZ(10deg); -webkit-animation-timing-function: ease-out; animation-timing-function: ease-out; }
	40% { -webkit-transform: rotateZ(17deg); transform: rotateZ(17deg); }
	60% { -webkit-transform: rotateZ(16deg); transform: rotateZ(16deg); }
	100% { -webkit-transform: translateY(100%) rotateZ(17deg); transform: translateY(100%) rotateZ(17deg); }
}`;

export const scaleUp = keyframes`
	from { opacity: 0; -webkit-transform: scale(.8); transform: scale(.8); }
`;
