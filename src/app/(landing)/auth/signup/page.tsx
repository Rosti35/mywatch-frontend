import {TabContent, TabRoot, TabTrigger, TabTriggerContainer} from '@/ui/themed/tabs';

import {Company} from '@/forms/templates/new/company';
import {Person} from '@/forms/templates/new/person';
import {Account} from '@/forms/templates/new/account';
import {AccountInfoCard} from './_components/account-info-card';
import {Button} from '@/ui/themed/button';

const CompanyInfo = () => (
  <section>
    <h2 className="text-[24px] font-semibold mb-5 leading-[30px]  tracking-tight">Company info</h2>
    <TabRoot defaultValue="tab1">
      <TabTriggerContainer>
        <TabTrigger value="tab1">Legal entity / corporation</TabTrigger>
        <TabTrigger value="tab2">Natural person / sole proprietor</TabTrigger>
      </TabTriggerContainer>

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
    <h2 className="text-2xl font-semibold mb-5 tracking-tight leading-[30px]">Account info</h2>
    <Account />
  </section>
);

export default function Page() {
  return (
    <div className="flex flex-col">
      <h1 className="text-[56px] font-semibold tracking-[-1px] mb-10  leading-[100%]">
        Create an account
      </h1>

      <div className="flex lg:flex-row flex-col-reverse">
        <div className="w-full gap-[30px] flex flex-col max-w-[610px]">
          <CompanyInfo />
          <AccountInfo />

          <div className="flex sm:flex-row w-full gap-6 items-center">
            <Button>Create account</Button>

            <div className="text-themed-grey-400 sm:text-[14px] text-xs max-w-[300px]">
              By creating an account, you accept our terms of service and end user license agreement
            </div>
          </div>
        </div>
        <div className="w-full flex mt-[52px] items-end justify-end h-fit">
          <AccountInfoCard />
        </div>
      </div>
    </div>
  );
}
