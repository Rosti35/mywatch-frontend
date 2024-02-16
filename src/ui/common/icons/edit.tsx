import {SVGProps} from 'react';

export const EditIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.5737 3.88545C15.3189 3.07808 15.6915 2.6744 16.0874 2.43893C17.0427 1.87076 18.2191 1.85309 19.1904 2.39232C19.5929 2.6158 19.9769 3.00812 20.745 3.79276C21.5131 4.5774 21.8972 4.96972 22.1159 5.38093C22.6438 6.37312 22.6265 7.57479 22.0703 8.5507C21.8398 8.95516 21.4446 9.33578 20.6543 10.097L11.2506 19.1543C9.75288 20.5969 9.004 21.3182 8.06806 21.6837C7.13212 22.0493 6.1032 22.0224 4.04536 21.9686L3.76538 21.9613C3.13891 21.9449 2.82567 21.9367 2.64359 21.73C2.4615 21.5234 2.48636 21.2043 2.53608 20.5662L2.56308 20.2197C2.70301 18.4235 2.77297 17.5255 3.12371 16.7182C3.47444 15.9109 4.07944 15.2555 5.28943 13.9445L14.5737 3.88545Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 4L20.5 11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 22H22.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
