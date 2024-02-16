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
        'flex rounded-full h-[60px] p-1 overflow-hidden  bg-themed-grey-300',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const TabContent = Primitive.TabContent;
