'use client';

import {LinksList} from './_components/links';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="lg:p-3 h-full flex gap-5">
      <div className="flex-col hidden lg:flex gap-2 max-w-64 w-full h-full">
        <h1 className="text-lg font-bold py-3">Settings</h1>

        <LinksList />
      </div>
      <div className="w-full flex flex-col  flex-1 bg-themed-grey-100 h-full overflow-hidden lg:rounded-3xl sm:p-10 p-5 gap-7">
        {children}
      </div>
    </div>
  );
}
