import {SettingsSidebar} from './settings/_components/sidebar';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col w-full h-dvh">
      <div className="flex gap-6 w-full h-full sm:pb-0 pb-[72px]">
        <div className="sm:block pl-[24px] py-[40px] hidden flex-1 w-full min-w-[262px] h-full max-w-[262px]">
          <SettingsSidebar />
        </div>
        <div className="w-full overflow-hidden h-full md:py-[30px] md:pr-[40px] p-0 ">
          <div className="w-full h-full overflow-auto sm:bg-themed-grey-100  sm:rounded-3xl bg-transparent rounded-none">
            <div className="sm:px-10 pb-0 w-full h-full">
              <div className="w-full h-full">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
