'use client';

import {PropsWithChildren} from 'react';
import {SettingsSidebar} from './_components/sidebar';

const SettingsLayout = ({children}: PropsWithChildren) => (
  <div className="flex h-full w-full gap-5">{children}</div>
);

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="overflow-hidden h-full">
      <div className="flex gap-5 overflow-auto w-full h-full md:pr-[40px] pr-4 sm:py-[30px] py-[26px]">
        <div className="pt-[10px] sm:block hidden flex-1 w-full min-w-[262px] max-w-[262px]">
          <SettingsSidebar />
        </div>
        <SettingsLayout>
          <div className="w-full flex flex-col sm:bg-themed-grey-100 bg-transparent h-full sm:rounded-3xl rounded-none sm:p-10 p-0 gap-7">
            {children}
          </div>
        </SettingsLayout>
      </div>
    </div>
  );
}
