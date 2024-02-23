import {cn} from '@/lib/cn';
import {HTMLAttributes} from 'react';

export const TableHeader = ({children, className, ...props}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        'w-full grid-cols-5 text-themed-grey-400 grid text-[14px] h-[50px] items-center',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const TableRow = ({children, className, ...props}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        'w-full grid-cols-5 text-nowrap grid [&>*]:h-[90px] border-t border-t-themed-grey-300',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
