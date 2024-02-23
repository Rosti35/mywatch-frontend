import {Logo} from '@/ui/common/branding/logo';
import {HomeIcon} from '@/ui/common/icons/home';
import {LegalIcon} from '@/ui/common/icons/legal';
import {LogoutIcon} from '@/ui/common/icons/logout';
import {MessageIcon} from '@/ui/common/icons/message';
import {QuestionIcon} from '@/ui/common/icons/question';
import {SaleIcon} from '@/ui/common/icons/sale';
import {SettingIcon} from '@/ui/common/icons/setting';
import {UserGroupIcon} from '@/ui/common/icons/user-group';
import Link from 'next/link';

export const Sidebar = () => {
  return (
    <aside className="w-full h-full flex flex-col gap-5 py-[30px]  text-white/70 bg-themed-black-primary rounded-3xl">
      <span className="text-xl px-[30px]">
        <Logo className="text-white max-w-[150px] mx-auto" />
      </span>

      <div className="flex flex-col text-sm px-[30px]">
        <Link
          href="/"
          className="flex hover:text-themed-grey-100 gap-3 w-full h-12 items-center"
        >
          <HomeIcon className="w-6 h-6 stroke-current" />
          Home
        </Link>
        <Link
          href="/"
          className="flex hover:text-themed-grey-100 gap-3 w-full h-12 items-center"
        >
          <SaleIcon className="w-6 h-6 stroke-current" />
          Sell
        </Link>
        <Link
          href="/"
          className="flex hover:text-themed-grey-100 gap-3 w-full h-12 items-center"
        >
          <HomeIcon className="w-6 h-6 stroke-current " />
          Buy
        </Link>
        <Link
          href="/deals"
          className="flex hover:text-themed-grey-100 gap-3 w-full h-12 items-center"
        >
          <LegalIcon className="w-6 h-6 stroke-current " />
          My deals
        </Link>
        <Link
          href="/dealers"
          className="flex hover:text-themed-grey-100 gap-3 w-full h-12 items-center"
        >
          <UserGroupIcon className="w-6 h-6 stroke-current " />
          Dealers
        </Link>
        <Link
          href="/messages"
          className="flex hover:text-themed-grey-100 gap-3 w-full h-12 items-center"
        >
          <MessageIcon className="w-6 h-6 stroke-current " />
          Messages
        </Link>
        <Link
          href="/settings"
          className="flex hover:text-themed-grey-100 gap-3 w-full h-12 items-center"
        >
          <SettingIcon className="w-6 h-6 stroke-current " />
          Settings
        </Link>
      </div>

      <div className="mt-auto px-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-zinc-700 rounded-full"></div>
          <span className="flex flex-col">
            <p>Ineichen Zuriсh</p>
            <p className="text-xs text-white/50">Premium dealer</p>
          </span>
        </div>
      </div>

      <div className="flex flex-col">
        <Link
          href="/"
          className="flex hover:text-themed-grey-100 gap-3 w-full h-12 items-center px-[30px]"
        >
          <QuestionIcon className="w-6 h-6 stroke-current " />
          Support
        </Link>

        <Link
          href="/"
          className="flex hover:text-themed-grey-100 gap-3 w-full h-12 items-center px-[30px]"
        >
          <LogoutIcon className="w-6 h-6 stroke-current " />
          Logout
        </Link>
      </div>
    </aside>
  );
};
