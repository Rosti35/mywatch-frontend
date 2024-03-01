'use client';

import {Sidebar} from './_components';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex gap-5 w-full h-full ">
      <div className="pt-[10px] h-full md:block hidden w-full max-w-[354px]">
        <Sidebar />
      </div>
      <div className="flex h-full w-full gap-5">
        <div className="w-full flex flex-col sm:bg-themed-grey-100 h-full overflow-show lg:rounded-3xl sm:p-[30px] p-0 gap-7">
          {children}
        </div>
      </div>
    </div>
  );
}
