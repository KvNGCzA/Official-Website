import React, { ReactElement } from "react";

const Avalanche = (props: any): ReactElement => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="50px"
    height="50px"
    viewBox="0 0 50 50"
    {...props}
  >
    <g id="surface1">
      <path
        style={{
          stroke: "none",
          fillRule: "evenodd",
          fill: "rgb(90.980392%,25.490196%,25.882353%)",
          fillOpacity: 1,
        }}
        d="M 50 25 C 50 38.808594 38.808594 50 25 50 C 11.191406 50 0 38.808594 0 25 C 0 11.191406 11.191406 0 25 0 C 38.808594 0 50 11.191406 50 25 Z M 50 25 "
      />
      <path
        style={{
          stroke: "none",
          fillRule: "nonzero",
          fill: "rgb(100%,100%,100%)",
          fillOpacity: 1,
        }}
        d="M 33.820312 25.648438 C 34.683594 24.152344 36.082031 24.152344 36.949219 25.648438 L 42.34375 35.117188 C 43.207031 36.613281 42.5 37.835938 40.769531 37.835938 L 29.902344 37.835938 C 28.1875 37.835938 27.480469 36.613281 28.328125 35.117188 Z M 23.386719 7.421875 C 24.253906 5.925781 25.628906 5.925781 26.496094 7.421875 L 27.695312 9.585938 L 30.53125 14.566406 C 31.21875 15.984375 31.21875 17.65625 30.53125 19.074219 L 21.023438 35.550781 C 20.15625 36.890625 18.71875 37.734375 17.125 37.835938 L 9.230469 37.835938 C 7.5 37.835938 6.792969 36.632812 7.65625 35.117188 Z M 23.386719 7.421875 "
      />
    </g>
  </svg>
);

export default Avalanche;
