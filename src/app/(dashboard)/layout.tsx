import {Sidebar} from '@/sections/standalone/sidebar';
import {HomeIcon} from '@/ui/common/icons/home';
import {MessageIcon} from '@/ui/common/icons/message';
import {SaleIcon} from '@/ui/common/icons/sale';
import {SettingIcon} from '@/ui/common/icons/setting';
import {ShopIcon} from '@/ui/common/icons/shop';
import Link from 'next/link';
import {PropsWithChildren} from 'react';

const LayoutScroll = ({children}: PropsWithChildren) => {
  return (
    <div className="w-full h-full overflow-auto">
      <div className="h-full md:pb-[40px] md:pr-[40px] xl:pl-0 md:pt-[40px] p-4">{children}</div>
    </div>
  );
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex overflow-hidden gap-4 h-screen bg-themed-grey-200">
      <div className="w-full hidden xl:block p-[10px] min-w-[270px] max-w-[270px]">
        <Sidebar />
      </div>
      <div className="flex flex-col w-full">
        <LayoutScroll>{children}</LayoutScroll>

        <div className="p-[10px] sm:hidden flex w-full items-center justify-center backdrop-blur-md bg-white/50">
          <Link
            href="/dashboard"
            className="text-black gap-[6px] px-[16px] py-[6px] flex flex-col justify-center items-center"
          >
            <HomeIcon className="w-6 h-6" />
            <p className="text-xs font-medium">Home</p>
          </Link>

          <Link
            href="/dashboard"
            className="text-black gap-[6px] px-[16px] py-[6px] flex flex-col justify-center items-center"
          >
            <SaleIcon className="w-6 h-6" />
            <p className="text-xs font-medium">Sell</p>
          </Link>

          <Link
            href="/dashboard"
            className="text-black gap-[6px] px-[16px] py-[6px] flex flex-col justify-center items-center"
          >
            <ShopIcon className="w-6 h-6" />
            <p className="text-xs font-medium">Sell</p>
          </Link>

          <Link
            href="/dashboard"
            className="text-black gap-[6px] px-[16px] py-[6px] flex flex-col justify-center items-center"
          >
            <MessageIcon className="w-6 h-6" />
            <p className="text-xs font-medium">Sell</p>
          </Link>

          <Link
            href="/dashboard"
            className="text-black gap-[6px] px-[16px] py-[6px] flex flex-col justify-center items-center"
          >
            <SettingIcon className="w-6 h-6" />
            <p className="text-xs font-medium">Sell</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
