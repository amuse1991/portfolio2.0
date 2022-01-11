import React from "react";

export default function DoubleArrowIcon({
  ...rest
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 20 20"
      height="48px"
      viewBox="0 0 20 20"
      width="48px"
      fill="#000000"
      {...rest}
    >
      <g>
        <rect fill="none" height="20" width="20" />
        <rect fill="none" height="20" width="20" />
      </g>
      <g>
        <g>
          <g>
            <circle cx="6" cy="7" r="3" />
          </g>
          <g>
            <path d="M11.03,12.37C9.56,11.5,7.84,11,6,11s-3.56,0.5-5.03,1.37C0.36,12.72,0,13.39,0,14.09V16h12v-1.91 C12,13.39,11.64,12.72,11.03,12.37z" />
          </g>
          <g>
            <path d="M15.03,12.37c-0.92-0.54-1.94-0.92-3.02-1.14c0.92,0.64,1.48,1.71,1.48,2.86V16H16v-1.91 C16,13.39,15.64,12.72,15.03,12.37z" />
          </g>
          <g>
            <path d="M10,10c1.66,0,3-1.34,3-3s-1.34-3-3-3C9.79,4,9.58,4.02,9.38,4.06C10.07,4.85,10.5,5.87,10.5,7 c0,1.13-0.43,2.14-1.12,2.93C9.58,9.98,9.79,10,10,10z" />
          </g>
          <g>
            <polygon points="19.5,7.75 17.75,7.75 17.75,6 16.25,6 16.25,7.75 14.5,7.75 14.5,9.25 16.25,9.25 16.25,11 17.75,11 17.75,9.25 19.5,9.25" />
          </g>
        </g>
      </g>
    </svg>
  );
}
