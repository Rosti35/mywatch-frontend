'use client';

import {ArrowLeftIcon} from '@radix-ui/react-icons';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {Fragment, PropsWithChildren, ReactNode} from 'react';

type SettingsLayoutProps = {
  title: string;
  description?: string | ReactNode;
  showSaveButton?: boolean;
  showBack?: boolean;
  back?: string;
} & PropsWithChildren;

const usePop = () => {
  const pathname = usePathname();

  return pathname?.split('/').slice(0, -1).join('/');
};

export const SettingsLayout = ({
  children,
  title,
  description,
  showSaveButton = true,
  showBack,
  back = 'Back',
}: SettingsLayoutProps) => {
  const prevRoute = usePop();

  return (
    <Fragment>
      {showBack ? (
        <Link href={prevRoute}>
          <button className="w-fit flex items-center justify-center gap-2">
            <ArrowLeftIcon className="w-6 h-6" /> {back}
          </button>
        </Link>
      ) : null}

      <span className="flex flex-col gap-4">
        <h1 className="text-lg font-semibold leading-8">{title}</h1>

        {description ? description : null}
      </span>

      <div className="flex h-full w-full flex-col overflow-hidden">{children}</div>

      {showSaveButton ? (
        <div className="mt-auto flex h-fit gap-4">
          <button className="rounded-full bg-black px-7 py-5 text-sm text-white">
            Save settings
          </button>
          <button className="rounded-full bg-white px-7 py-5 text-sm">Reset</button>
        </div>
      ) : null}
    </Fragment>
  );
};
