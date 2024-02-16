import {CheckIcon} from '@/ui/common/icons/check';
import {PropsWithChildren} from 'react';

const Paragraph = ({children}: PropsWithChildren) => (
  <div className="flex items-center gap-3">
    <span className="w-fit h-fit rounded-full bg-white">
      <CheckIcon className="text-themed-black-primary stroke-themed-black-primary w-7 h-7" />
    </span>
    <p className="text-sm">{children}</p>
  </div>
);

export const AccountInfoCard = () => (
  <div className="w-full flex items-center justify-center h-fit">
    <div className="lg:max-w-lg text-white lg:mt-12 mt-0 ml-auto md:p-10 p-5 gap-2 flex flex-col text-lg w-full bg-themed-black-primary rounded-3xl">
      <p className="font-light text-sm">Please note:</p>

      <p className="font-bold text-md leading-8">
        We can only register you as a dealer if you meet the following requirements:
      </p>

      <div className="mt-2 flex flex-col gap-2">
        <Paragraph>You have a business or company entered into the commercial register</Paragraph>
        <Paragraph>You have at least 10 watches in your inventory</Paragraph>
        <Paragraph>At least 10 of your watches are worth €2,000 or more</Paragraph>
      </div>
    </div>
  </div>
);
