'use client';

import {Title} from '../_layout';
import {
  ComboboxContent,
  ComboboxGroup,
  ComboboxInput,
  ComboboxRoot,
  ComboboxTrigger,
} from '@/ui/common/combobox';
import {Message} from '../_components/message';
import {usePathname} from 'next/navigation';
import {cn} from '@/lib/cn';

const SearchLot = () => (
  <ComboboxRoot options={[]}>
    <div className="relative rounded-xl w-full flex items-center justify-center bg-themed-grey-300  pl-4 h-[60px]">
      <ComboboxTrigger
        className="h-6 w-full tracking-normal text-themed-grey-500"
        placeholder="Search by lot"
      />
      <ComboboxContent className="p-0 rounded-2xl w-full overflow-hidden border border-themed-grey-200">
        <ComboboxInput />
        <ComboboxGroup className="flex flex-col max-h-60 w-auto overflow-auto" />
      </ComboboxContent>
    </div>
  </ComboboxRoot>
);

const MessageLink = ({link}: {link: string}) => {
  const pathname = usePathname();
  const active = pathname.includes(link);

  return (
    <span
      className={cn(
        'p-5 rounded-3xl',
        active ? 'bg-themed-black-primary text-white font-medium' : 'bg-transparent',
      )}
    >
      <Message id={link} />
    </span>
  );
};

const Sidebar = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <Title>Messages</Title>

      <SearchLot />

      <div className="flex flex-col pt-[10px]">
        {[1, 2, 3].map(k => (
          <MessageLink
            key={k}
            link={String(k)}
          />
        ))}
      </div>
    </div>
  );
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex gap-5 w-full h-full pr-[40px] py-[30px]">
      <div className="pt-[10px] w-full max-w-[354px]">
        <Sidebar />
      </div>
      <div className="flex h-full w-full gap-5">
        <div className="w-full flex flex-col bg-themed-grey-100 h-full overflow-hidden lg:rounded-3xl p-[30px] gap-7">
          {children}
        </div>
      </div>
    </div>
  );
}
