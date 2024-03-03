import {cn} from '@/lib/cn';
import {HTMLAttributes, PropsWithChildren} from 'react';
import {GoBack} from '../links';

export const Badge = ({className, children, ...props}: HTMLAttributes<HTMLSpanElement>) => (
  <span
    className={cn(
      'font-bold text-[14px] rounded-full min-w-[29px] h-6 bg-green-500 text-white flex items-center justify-center',
      className,
    )}
    {...props}
  >
    {children}
  </span>
);
