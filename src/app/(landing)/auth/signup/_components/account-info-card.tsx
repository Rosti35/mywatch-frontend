import {CheckIcon} from '@/ui/common/icons/check';
import {PropsWithChildren} from 'react';

const Paragraph = ({children}: PropsWithChildren) => (
  <div className="flex items-center gap-[14px] h-10">
    <span className="w-fit h-fit rounded-full bg-white">
      <CheckIcon className="text-themed-black-primary stroke-themed-black-primary w-7 h-7" />
    </span>
    <p className="text-sm">{children}</p>
  </div>
);

export const AccountInfoCard = () => (
  <div className="text-white p-10 flex flex-col text-lg bg-themed-black-primary rounded-3xl max-w-[500px]">
    <p className="font-light text-sm">Please note:</p>

    <p className="font-semibold tracking-tight text-md mt-10px">
      We can only register you as a dealer if you meet the following requirements:
    </p>

    <div className="flex flex-col gap-[10px] mt-4">
      <Paragraph>You have a business or company entered into the commercial register</Paragraph>
      <Paragraph>You have at least 10 watches in your inventory</Paragraph>
      <Paragraph>At least 10 of your watches are worth €2,000 or more</Paragraph>
    </div>
  </div>
);
