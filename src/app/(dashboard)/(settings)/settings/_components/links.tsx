'use client';

import {cn} from '@/lib/cn';
import {TelegramIcon} from '@/ui/common/icons/telegram';
import {WhatsappIcon} from '@/ui/common/icons/whapsapp';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {PropsWithChildren} from 'react';

type SettingLinkProps = {link: string} & PropsWithChildren;
const SettingLink = ({link, children}: SettingLinkProps) => {
  const pathname = usePathname();
  const active = pathname.includes(link);

  return (
    <Link
      href={`/settings/${link}`}
      key={link}
      className="border-b border-[#D4D4D4]  sm:border-0 last:border-b-0"
    >
      <button
        className={cn(
          'w-full z-40 relative sm:px-5 px-0 h-[50px] sm:px-5 px-4 text-left transition-all items-center justify-center text-themed-black-primary rounded-xl hover:bg-themed-grey-300',
          active ? 'bg-themed-black-primary text-white hover:bg-themed-black-primary/90' : null,
        )}
      >
        {children}
      </button>
    </Link>
  );
};

export const LinksList = () => {
  return (
    <div className="w-full h-full flex flex-col last:border-b-0 leading-5">
      <SettingLink link="company">Company profile</SettingLink>
      <SettingLink link="accounts">Bank accounts</SettingLink>
      <SettingLink link="delivery">Delivery addresses</SettingLink>
      <SettingLink link="warehouses">Warehouses</SettingLink>
      <SettingLink link="buying">Buying preferences</SettingLink>
      <SettingLink link="selling">Selling preferences</SettingLink>
      <SettingLink link="integrations">
        <span className="flex items-center gap-2">
          Integrations
          <span className="text-white flex bg-themed-black-primary py-[5px] px-[8px] items-center justify-between gap-2 rounded-full">
            <WhatsappIcon className="w-5 h-5" />
            <TelegramIcon className="w-5 h-5" />
          </span>
        </span>
      </SettingLink>
      <SettingLink link="security">Security</SettingLink>
      <SettingLink link="notifications">Notifications</SettingLink>
    </div>
  );
};
