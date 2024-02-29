'use client';

import {SettingsSidebar} from './_components/sidebar';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex gap-5 w-full h-full">
        <div className="sm:block hidden flex-1 w-full min-w-[262px] h-full max-w-[262px]">
          <SettingsSidebar />
        </div>
        <div className="sm:rounded-3xl rounded-none sm:p-10 p-0 w-full h-full sm:bg-themed-grey-100 bg-transparent">
          {children}
        </div>
      </div>
    </div>
  );
}
