'use client';

import {cn} from '@/lib/cn';
import * as Primitive from '@/ui/common/tabs';
import {ComponentProps, HTMLAttributes} from 'react';

export const TabRoot = ({
  className,
  children,
  ...props
}: ComponentProps<typeof Primitive.TabRoot>) => {
  return (
    <Primitive.TabRoot
      className={cn('flex flex-col gap-5', className)}
      {...props}
    >
      {children}
    </Primitive.TabRoot>
  );
};

export const TabTrigger = ({
  className,
  children,
  activeClassname,
  ...props
}: ComponentProps<typeof Primitive.TabTrigger>) => {
  return (
    <Primitive.TabTrigger
      activeClassname={cn('text-black', activeClassname)}
      className={cn(
        'px-5 flex-1 flex text-themed-grey-500 rounded-full items-center justify-center relative text-sm leading-none',
        className,
      )}
      {...props}
    >
      {children}
    </Primitive.TabTrigger>
  );
};

export const TabTriggerContainer = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        'flex rounded-full h-[58px] p-1 overflow-hidden  bg-themed-grey-300',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

type BadgeProps = {count: string | number};
const Badge = ({count}: BadgeProps) =>
  count === 0 ? null : (
    <div className="min-w-6 h-6 rounded-full flex items-center justify-center leading-5">
      {count}
    </div>
  );

export const TabTriggerWithBadge = ({
  children,
  count,
  ...props
}: ComponentProps<typeof TabTrigger> & BadgeProps) => {
  return (
    <TabTrigger
      {...props}
      disableTransition
      className="md:px-6 md:py-3 h-full min-h-[50px] [&>div]:bg-themed-black-primary [&>div]:text-white py-2 px-4 w-full flex transition-all gap-2 justify-center rounded-full bg-white"
      activeClassname="text-white bg-themed-black-primary [&>div]:!bg-white [&>div]:text-black"
    >
      {children}
      <Badge count={count} />
    </TabTrigger>
  );
};

export const TabContent = Primitive.TabContent;
