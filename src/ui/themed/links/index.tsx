'use client';
import {cn} from '@/lib/cn';
import {ArrowLeftIcon} from '@radix-ui/react-icons';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import {ComponentProps, HTMLAttributes, PropsWithChildren} from 'react';

export const GoBack = ({className, children, ...props}: HTMLAttributes<HTMLButtonElement>) => {
  const n = useRouter();
  return (
    <button
      className={cn(className, 'w-fit flex items-center gap-2 tracking-tight')}
      onClick={() => n.back()}
      {...props}
    >
      <ArrowLeftIcon className="sm:w-6 sm:h-6 h-5 w-5" />
      <span className="tracking-wide">{children}</span>
    </button>
  );
};
export const SubrouteTitle = ({
  children,
  back,
  href,
}: PropsWithChildren & {back?: string; href: string}) => (
  <div className="flex flex-col gap-4 ">
    {back ? <GoBack>{back}</GoBack> : null}
    <p className="sm:text-lg text-md font-semibold leading-2 tracking-tight">{children}</p>
  </div>
);
