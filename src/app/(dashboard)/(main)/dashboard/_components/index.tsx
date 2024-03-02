import {cn} from '@/lib/cn';
import {PlusIcon} from '@/ui/common/icons/plus';
import Link from 'next/link';
import {ComponentProps, HTMLAttributes} from 'react';

export const DashboardCardRoot = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        'md:p-[30px] p-4 sm:rounded-3xl rounded-[20px] w-full bg-themed-grey-100 ',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const DashboardCardContent = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn('w-full flex mt-auto', className)}
      {...props}
    >
      {children}
    </div>
  );
};

export const DashboardCardTitle = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn('w-full flex', className)}
      {...props}
    >
      {children}
    </div>
  );
};

export const DashboardCardActivity = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn('flex flex-col w-full gap-4', className)}
      {...props}
    >
      {children}
    </div>
  );
};

export const DashboardTitleLink = (props: ComponentProps<typeof Link>) => (
  <Link
    className="leading-5 md:text-sm text-xs tracking-wide"
    {...props}
  />
);

export const AddButton = () => (
  <button className="bg-themed-black-primary ml-auto my-auto  text-white rounded-full min-w-[50px] h-[50px] items-center flex justify-center">
    <PlusIcon className="w-6 h-6" />
  </button>
);
