import {TabContent, TabRoot, TabTrigger, TabTriggerContainer} from '@/ui/themed/tabs';

import {Company} from '@/forms/templates/new/company';
import {Person} from '@/forms/templates/new/person';
import {Account} from '@/forms/templates/new/account';
import {AccountInfoCard} from './_components/account-info-card';

const CompanyInfo = () => (
  <section>
    <h2 className="text-2xl font-semibold mb-5">Company info</h2>
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
    <h2 className="text-2xl font-semibold mb-5">Account info</h2>
    <Account />
  </section>
);

export default function SignUp() {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-xl font-semibold tracking-tight leading-tight">Create an account</h1>

      <div className="flex lg:gap-20 gap-5 lg:flex-row flex-col-reverse">
        <div className="w-full gap-[30px] flex flex-col">
          <CompanyInfo />
          <AccountInfo />

          <div className="mt-3 h-16 flex sm:flex-row w-full gap-6 items-center">
            <button className="rounded-full h-full text-sm min-w-44 text-white bg-themed-black-primary">
              Create account
            </button>

            <div className="text-themed-grey-400 sm:text-[14px] text-xs max-w-[300px]">
              By creating an account, you accept our terms of service and end user license agreement
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center h-fit">
          <AccountInfoCard />
        </div>
      </div>
    </div>
  );
}
