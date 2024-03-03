import {Suspense} from 'react';
import {Sidebar} from './messages/_components';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col w-full h-dvh">
      <div className="flex gap-6 w-full h-full sm:pb-0 pb-[72px]">
        <div className="sm:block pl-[24px] py-[40px] hidden flex-1 w-full min-w-[356px] h-full max-w-[356px]">
          <Suspense fallback={<div>Loading...</div>}>
            <Sidebar />
          </Suspense>
        </div>
        <div className="w-full overflow-hidden h-full md:py-[30px] md:pr-[40px] p-0 ">
          <div className="w-full h-full overflow-auto sm:bg-themed-grey-100  sm:rounded-3xl bg-transparent rounded-none">
            <div className="sm:p-[30px] w-full h-full">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
