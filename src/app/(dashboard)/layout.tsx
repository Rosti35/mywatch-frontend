import {Sidebar} from '@/sections/standalone/sidebar';
import {HomeIcon} from '@/ui/common/icons/home';
import {MessageIcon} from '@/ui/common/icons/message';
import {SaleIcon} from '@/ui/common/icons/sale';
import {SettingIcon} from '@/ui/common/icons/setting';
import {ShopIcon} from '@/ui/common/icons/shop';
import Link from 'next/link';

const BottomNavigation = () => {
  return (
    <div className="p-[10px] fixed bottom-0 sm:hidden flex justify-between w-full items-center px-[32px]  backdrop-blur-md bg-white/50">
      <Link
        href="/dashboard"
        className="text-black  flex flex-col justify-center items-center leading-7"
      >
        <HomeIcon className="w-6 h-6" />
        <p className="text-xs font-medium">Home</p>
      </Link>

      <Link
        href="/dashboard"
        className="text-black  flex flex-col justify-center items-center leading-7"
      >
        <SaleIcon className="w-6 h-6" />
        <p className="text-xs font-medium">Sell</p>
      </Link>

      <Link
        href="/dashboard"
        className="text-black  flex flex-col justify-center items-center leading-7"
      >
        <ShopIcon className="w-6 h-6" />
        <p className="text-xs font-medium">Sell</p>
      </Link>

      <Link
        href="/dashboard"
        className="text-black  flex flex-col justify-center items-center leading-7"
      >
        <MessageIcon className="w-6 h-6" />
        <p className="text-xs font-medium">Sell</p>
      </Link>

      <Link
        href="/dashboard"
        className="text-black  flex flex-col justify-center items-center leading-7"
      >
        <SettingIcon className="w-6 h-6" />
        <p className="text-xs font-medium">Settings</p>
      </Link>
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
        <div className="w-full h-full">{children}</div>

        <BottomNavigation />
      </div>
    </main>
  );
}
