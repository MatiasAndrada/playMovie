import * as React from "react";

export const Loading = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{
      margin: "auto",
      background: "0 0",
      display: "block",
      shapeRendering: "auto",
    }}
    /*
    width={197}
    height={197}
    */
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <path d="M11 50a39 39 0 0 0 78 0 39 41.8 0 0 1-78 0" fill="#0051a2">
      <animateTransform
        attributeName="transform"
        type="rotate"
        dur="0.78125s"
        repeatCount="indefinite"
        keyTimes="0;1"
        values="0 50 51.4;360 50 51.4"
      />
    </path>
  </svg>
);
