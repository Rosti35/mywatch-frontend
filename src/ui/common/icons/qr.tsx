import {SVGProps} from 'react';

export const QrIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18 15L18 18H14L14 15L18 15Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M8.99396 2H2V8.99396M15.006 2H22V8.99396M15.006 22H22V15.006M8.99396 22H2V15.006"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M13 6V13H6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M10 6L10 10H6L6 6L10 6Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M6 18H11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M17 10L17 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M17 6L17 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
};
