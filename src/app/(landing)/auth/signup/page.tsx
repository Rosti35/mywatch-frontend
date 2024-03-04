'use client';

import {TabContent, TabRoot, TabTrigger, TabTriggerContainer} from '@/ui/themed/tabs';

import {Company} from '@/forms/templates/new/company';
import {Person} from '@/forms/templates/new/person';
import {Account} from '@/forms/templates/new/account';
import {AccountInfoCard} from './_components/account-info-card';
import {Button} from '@/ui/themed/button';
import * as RadioGroup from '@radix-ui/react-radio-group';
import Link from 'next/link';

const RadioGroupDemo = () => (
  <form>
    <RadioGroup.Root
      className="flex sm:flex-row flex-col sm:gap-[30px] gap-[14px]"
      defaultValue="default"
    >
      <div className="flex items-center">
        <RadioGroup.Item
          className="w-6 h-6 rounded-full outline-none cursor-default border border-[#D4D4D4]"
          value="default"
          id="r1"
        >
          <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-3 after:h-3 after:rounded-[50%] after:bg-themed-black-primary" />
        </RadioGroup.Item>
        <label
          className="text-black text-[15px] leading-none pl-[15px]"
          htmlFor="r1"
        >
          Legal entity / corporation
        </label>
      </div>
      <div className="flex items-center">
        <RadioGroup.Item
          className="w-6 h-6 rounded-full outline-none cursor-default border border-[#D4D4D4]"
          value="offense"
          id="r1"
        >
          <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-3 after:h-3 after:rounded-[50%] after:bg-themed-black-primary" />
        </RadioGroup.Item>
        <label
          className="text-black text-[15px] leading-none pl-[15px]"
          htmlFor="r1"
        >
          Natural person / sole proprietor
        </label>
      </div>
    </RadioGroup.Root>
  </form>
);

const CompanyInfo = () => (
  <section>
    <h2 className="sm:text-[24px] text-[18px] font-semibold mb-5 leading-[30px]  tracking-tight">
      Company info
    </h2>
    <TabRoot defaultValue="tab1">
      <RadioGroupDemo />

      <div>
        <TabContent
          value="tab1"
          className="flex flex-col"
        >
          <Company />
        </TabContent>

        <TabContent value="tab2">
          <Person />
        </TabContent>
      </div>
    </TabRoot>
  </section>
);

const AccountInfo = () => (
  <section>
    <h2 className="sm:text-[24px] text-[18px] font-semibold mb-5 tracking-tight leading-[24px]">
      Account info
    </h2>
    <Account />
  </section>
);

export default function Page() {
  return (
    <div className="flex flex-col">
      <h1 className="sm:text-[56px] text-md font-semibold tracking-[-1px] sm:mb-10 mb-[30px]  leading-[100%]">
        Create an account
      </h1>

      <div className="flex lg:flex-row flex-col-reverse">
        <div className="w-full gap-[30px] flex flex-col max-w-[610px]">
          <CompanyInfo />
          <AccountInfo />

          <div className="flex sm:flex-row w-full gap-6 items-center">
            <Link href="/dashboard">
              <Button>Create account</Button>
            </Link>

            <div className="text-themed-grey-400 sm:text-[14px] text-xs max-w-[300px]">
              By creating an account, you accept our terms of service and end user license agreement
            </div>
          </div>
        </div>
        <div className="w-full md:flex hidden mt-[52px] items-end justify-end h-fit">
          <AccountInfoCard />
        </div>
      </div>
    </div>
  );
}
