import {SVGProps} from 'react';

export const BubbleRight = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.5312 11.1228C16.7206 10.1411 16.8198 9.12724 16.8198 8.09024V0.972656H0.909943V24.0001C4.7624 24.0001 8.29506 22.6309 11.0478 20.3525C13.7941 22.182 18.1978 23.9211 23.5181 22.9537C22.0527 22.3257 16.4005 18.5576 16.6098 11.0213C16.5847 11.0559 16.5584 11.0897 16.5312 11.1228Z"
        fill="currentColor"
      />
    </svg>
  );
};
