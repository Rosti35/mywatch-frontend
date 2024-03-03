import {cn} from '@/lib/cn';
import {HTMLAttributes} from 'react';

export const TableHeader = ({children, className, ...props}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        'w-full text-themed-grey-400 grid text-[14px] h-[50px] items-center',
        className,
      )}
      style={{gridTemplateColumns: '23.3% 22.1% 24.4% 20% 0%'}}
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
        'w-full grid-cols-5 text-nowrap grid [&>*]:h-[90px] items-center border-t border-t-themed-grey-300',
        className,
      )}
      style={{gridTemplateColumns: '23.3% 22.1% 24.4% 16% 0%'}}
      {...props}
    >
      {children}
    </div>
  );
};
