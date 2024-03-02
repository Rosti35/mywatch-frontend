import {cn} from '@/lib/cn';
import {ArrowLeftIcon} from '@radix-ui/react-icons';
import Link from 'next/link';
import {ComponentProps} from 'react';

export const GoBack = ({className, children, ...props}: ComponentProps<typeof Link>) => (
  <Link
    className={cn(className, 'w-fit flex items-center gap-2 tracking-tight')}
    {...props}
  >
    <ArrowLeftIcon className="sm:w-6 sm:h-6 h-5 w-5" />
    <span className="tracking-wide">{children}</span>
  </Link>
);
