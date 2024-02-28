'use client';

import {PropsWithChildren} from 'react';
import {Title} from '../_layout';
import {LinksList} from './_components/links';

const SettingsLayout = ({children}: PropsWithChildren) => (
  <div className="flex h-full w-full gap-5">{children}</div>
);

const SettingsSidebar = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <Title>Settings</Title>

      <span className="font-normal text-sm">
        <LinksList />
      </span>
    </div>
  );
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex gap-5 w-full h-full pr-[40px] py-[30px]">
      <div className="pt-[10px] flex-1 w-full min-w-[262px] max-w-[262px]">
        <SettingsSidebar />
      </div>
      <SettingsLayout>
        <div className="w-full flex flex-col bg-themed-grey-100 h-full overflow-hidden lg:rounded-3xl sm:p-10 p-5 gap-7">
          {children}
        </div>
      </SettingsLayout>
    </div>
  );
}
