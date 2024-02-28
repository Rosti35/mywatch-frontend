import {SVGProps} from 'react';

export const AttachmentIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18.1766 12L19.7208 10.4558C21.4264 8.75022 21.4264 5.98485 19.7208 4.27922C18.0151 2.57359 15.2498 2.57359 13.5442 4.27922L4.2792 13.5442C2.5736 15.2498 2.5736 18.0152 4.2792 19.7208C5.9848 21.4264 8.7502 21.4264 10.4558 19.7208L13.9302 16.2464C14.9962 15.1804 14.9962 13.4521 13.9302 12.386C12.8642 11.32 11.1358 11.32 10.0698 12.386L8.1396 14.3162"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
