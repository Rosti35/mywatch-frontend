import {cn} from '@/lib/cn';
import {HTMLAttributes, PropsWithChildren, ReactNode} from 'react';

type CommonCardProps = HTMLAttributes<HTMLDivElement> & PropsWithChildren;

export const CardRoot = ({className, children, ...props}: CommonCardProps) => {
  return (
    <div
      className={cn('rounded-3xl bg-white h-fit p-6 flex flex-col gap-[14px]', className)}
      {...props}
    >
      {children}
    </div>
  );
};

type CardTitleProps = {
  actions: ReactNode | string | null;
} & CommonCardProps;
export const CardTitle = ({children, actions, ...props}: CardTitleProps) => {
  return (
    <div
      className="flex"
      {...props}
    >
      <p className="font-bold text-[20px] leading-[25px]">{children}</p>

      <span className="ml-auto flex items-center justify-center">{actions}</span>
    </div>
  );
};

type CardFieldProps = {
  caption: string;
} & CommonCardProps;
export const CardField = ({caption, children, className, ...props}: CardFieldProps) => {
  return (
    <div
      className={cn('flex flex-col', className)}
      {...props}
    >
      <p className="text-xs text-themed-grey-400">{caption}</p>

      <span>{children}</span>
    </div>
  );
};
