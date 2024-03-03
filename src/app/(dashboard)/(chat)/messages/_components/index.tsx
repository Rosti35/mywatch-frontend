'use client';

import {Message} from '@/app/(dashboard)/_components/message';
import {Title} from '@/app/(dashboard)/_layout';
import {cn} from '@/lib/cn';
import {
  ComboboxContent,
  ComboboxGroup,
  ComboboxInput,
  ComboboxRoot,
  ComboboxTrigger,
} from '@/ui/common/combobox';
import {usePathname} from 'next/navigation';

export const SearchLot = () => (
  <ComboboxRoot options={[]}>
    <div className="relative rounded-xl w-full flex items-center justify-center bg-themed-grey-300  pl-4 sm:h-[60px] h-[50px]">
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

export const MessageLink = ({link}: {link: string}) => {
  const pathname = usePathname();
  const active = pathname.includes(link);

  return (
    <span
      className={cn(
        'sm:px-5 sm:py-5 py-[14px] px-0 rounded-3xl',
        active ? 'bg-themed-black-primary text-white font-medium' : 'bg-transparent',
      )}
    >
      <Message id={link} />
    </span>
  );
};

export const Sidebar = () => {
  return (
    <div className="w-full h-full flex flex-col ">
      <span className=" sm:px-0 px-4">
        <Title>Messages</Title>
      </span>

      <div className="flex flex-col px-4 lg:px-0">
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
    </div>
  );
};
