import {Suspense} from 'react';
import {SettingsSidebar} from './settings/_components/sidebar';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col w-full h-dvh">
      <div className="flex gap-[20px] w-full h-full sm:pb-0 pb-[72px]">
        <div className="sm:block pl-[22px] py-[40px] hidden flex-1 w-full min-w-[284px] h-full max-w-[284px]">
          <SettingsSidebar />
        </div>
        <div className="w-full overflow-hidden h-full md:py-[30px] md:pr-[40px] p-0 ">
          <div className="w-full h-full overflow-auto sm:bg-themed-grey-100  sm:rounded-3xl bg-transparent rounded-none">
            <div className="sm:px-[40px] sm:pb-[40px] w-full h-full">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
