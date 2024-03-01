'use client';

import {Button} from '@/ui/themed/button';
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
    <div className="w-full h-full flex flex-col gap-[30px]">
      <span className="flex flex-col gap-[14px]">
        {showBack ? (
          <Link href={prevRoute}>
            <button className="w-fit flex items-center justify-center gap-2">
              <ArrowLeftIcon className="w-6 h-6" /> {back}
            </button>
          </Link>
        ) : null}
        <h1 className="text-lg font-bold tracking-tight leading-[32px]">{title}</h1>

        {description ? <span className="leading-5">{description}</span> : null}
      </span>

      {children}

      {showSaveButton ? (
        <div className="mt-auto pb-4 flex flex-col sm:flex-row sm:gap-4 gap-2">
          <Button>Save settings</Button>
          <Button className="bg-white hover:opacity-70 text-themed-black-primary">Reset</Button>
        </div>
      ) : null}
    </div>
  );
};
