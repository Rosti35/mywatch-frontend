import {cn} from '@/lib/cn';
import {HTMLAttributes, PropsWithChildren, ReactNode} from 'react';
import {PlusIcon} from '../icons/plus';

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

export const EmptyCard = () => (
  <CardRoot className="items-center justify-center h-full gap-3.5 text-[#A3A3A3]">
    <PlusIcon className="w-6 h-6" />
    <p>Add new</p>
  </CardRoot>
);

type CardTitleProps = {
  actions: ReactNode | string | null;
} & CommonCardProps;
export const CardTitle = ({children, actions, ...props}: CardTitleProps) => {
  return (
    <div
      className="flex"
      {...props}
    >
      <p className="font-bold text-[20px] leading-[16px]">{children}</p>

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
      <p className="text-xs tracking-wide text-themed-grey-400">{caption}</p>

      <span className="tracking-wide">{children}</span>
    </div>
  );
};
