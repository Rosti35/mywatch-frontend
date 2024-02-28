'use client';

import {Logo} from '@/ui/common/branding/logo';
import {HomeIcon} from '@/ui/common/icons/home';
import {LegalIcon} from '@/ui/common/icons/legal';
import {LogoutIcon} from '@/ui/common/icons/logout';
import {MessageIcon} from '@/ui/common/icons/message';
import {QuestionIcon} from '@/ui/common/icons/question';
import {SaleIcon} from '@/ui/common/icons/sale';
import {SettingIcon} from '@/ui/common/icons/setting';
import {ShopIcon} from '@/ui/common/icons/shop';
import {UserGroupIcon} from '@/ui/common/icons/user-group';
import {VerificationIcon} from '@/ui/common/icons/verification';
import Link from 'next/link';
import {useSearchParams} from 'next/navigation';
import {FC, ReactNode, SVGProps, Suspense} from 'react';

type SidebarLinkProps = {
  href: string;
  children: ReactNode;
  icon: FC<SVGProps<SVGSVGElement>>;
  disabled?: boolean;
};
const SidebarLink = ({href, children, icon, disabled}: SidebarLinkProps) => {
  const Icon = icon;
  if (disabled) {
    return (
      <Link
        href={href}
        className="flex pointer-events-none text-white/10 gap-[10px] w-full items-center pb-1"
      >
        <Icon className="w-6 h-6 mb-1 stroke-current" />
        <p className="mb-1 tracking-wide font-normal">{children}</p>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className="flex hover:text-themed-grey-100 gap-[10px] text-white/70  w-full items-center pb-1"
    >
      <Icon className="w-6 h-6 mb-1 stroke-current" />
      <p className="mb-1 tracking-wide font-normal">{children}</p>
    </Link>
  );
};

export const _Sidebar = () => {
  const params = useSearchParams();

  const newUser = Boolean(params.get('new'));

  return (
    <aside className="w-full h-full flex flex-col gap-5 py-[30px]  text-white/70 bg-themed-black-primary rounded-3xl">
      <span className="text-xl px-[30px]">
        <Logo className="text-white max-w-[150px] mx-auto" />
      </span>

      <div className="flex flex-col text-sm px-[30px] [&>*]:h-[54px]">
        <SidebarLink
          href="/"
          icon={HomeIcon}
        >
          Home
        </SidebarLink>

        {newUser ? (
          <SidebarLink
            href="/upload?new=true"
            icon={VerificationIcon}
          >
            Verification
          </SidebarLink>
        ) : null}
        <SidebarLink
          href="/sell"
          icon={SaleIcon}
          disabled={newUser}
        >
          Sell
        </SidebarLink>

        <SidebarLink
          href="/buy"
          icon={ShopIcon}
          disabled={newUser}
        >
          Buy
        </SidebarLink>
        <SidebarLink
          href="/"
          icon={LegalIcon}
          disabled={newUser}
        >
          My deals
        </SidebarLink>
        <SidebarLink
          href="/dealers"
          icon={UserGroupIcon}
          disabled={newUser}
        >
          Dealers
        </SidebarLink>
        <SidebarLink
          href="/messages"
          icon={MessageIcon}
        >
          Messages
        </SidebarLink>
        <SidebarLink
          href="/settings/company"
          icon={SettingIcon}
        >
          Settings
        </SidebarLink>
      </div>

      <div className="mt-auto px-6 h-[42px] mb-1">
        <div className="flex items-center gap-[14px]">
          <div className="w-12 h-12 bg-zinc-700 rounded-full"></div>
          <span className="flex flex-col">
            <p className="tracking-wide">Ineichen Zuriсh</p>
            <p className="text-[14px] text-white/50 leading-7 tracking-wide">Premium dealer</p>
          </span>
        </div>
      </div>

      <div className="flex flex-col px-[30px] [&>*]:h-[48px]">
        <SidebarLink
          icon={QuestionIcon}
          href="/"
        >
          Support
        </SidebarLink>
        <SidebarLink
          icon={LogoutIcon}
          href="/"
        >
          Logout
        </SidebarLink>
      </div>
    </aside>
  );
};
export const Sidebar = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <_Sidebar />
    </Suspense>
  );
};
