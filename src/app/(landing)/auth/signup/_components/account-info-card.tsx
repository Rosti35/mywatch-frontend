import {CheckIcon} from '@/ui/common/icons/check';
import {PropsWithChildren} from 'react';

const Paragraph = ({children}: PropsWithChildren) => (
  <div className="flex items-center gap-[14px]">
    <CheckIcon className="text-themed-black-primary stroke-themed-black-primary rounded-full bg-white min-w-6 min-h-6 max-w-6 max-h-6" />

    <p className="text-sm leading-[20px]">{children}</p>
  </div>
);

export const AccountInfoCard = () => (
  <div className="text-white p-10 text-sm flex gap-4 items-start justify-start flex-col bg-themed-black-primary rounded-3xl max-w-[505px] w-full">
    <div>
      <p className="leading-[20px]">Please note:</p>

      <p className="font-bold text-md tracking-tight mt-[10px] leading-[30px]">
        We can only register you as a dealer if you meet the following requirements:
      </p>
    </div>

    <div className="flex flex-col gap-[10px] tracking-normal">
      <Paragraph>You have a business or company entered into the commercial register</Paragraph>
      <Paragraph>You have at least 10 watches in your inventory</Paragraph>
      <Paragraph>At least 10 of your watches are worth €2,000 or more</Paragraph>
    </div>
  </div>
);
