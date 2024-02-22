import {ArrowLeftIcon} from '@radix-ui/react-icons';
import Link from 'next/link';
import {PropsWithChildren} from 'react';

export const GoBack = ({
  children,
  label,
  href,
}: PropsWithChildren & {label: string; href: string}) => (
  <div
    className="flex flex-col gap-4"
    style={{lineHeight: '20px'}}
  >
    <Link
      href={href}
      className="w-fit flex items-center gap-2 font-medium text-sm"
    >
      <ArrowLeftIcon className="w-6 h-6" />
      {label}
    </Link>

    <p className="text-lg font-semibold leading-8">{children}</p>
  </div>
);
