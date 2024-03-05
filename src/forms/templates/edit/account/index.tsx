import {TabContent, TabTrigger} from '@/ui/common/tabs';
import {Select} from '@/ui/themed/fields/select';
import {TextField} from '@/ui/themed/fields/text';
import {TabRoot, TabTriggerContainer} from '@/ui/themed/tabs';

export const Account = () => (
  <div className="overflow-hidden flex flex-col gap-2 max-w-[500px] ">
    <TabRoot defaultValue={'bank'}>
      <TabTriggerContainer>
        <TabTrigger
          className="w-full text-[#737373]"
          activeClassname="text-themed-black-primary"
          value="bank"
        >
          Bank account
        </TabTrigger>
        <TabTrigger
          className="w-full text-[#737373]"
          activeClassname="text-themed-black-primary"
          value="crypto"
        >
          Crypto wallet
        </TabTrigger>
      </TabTriggerContainer>

      <TabContent
        disableTransition
        value="bank"
        className="flex flex-col"
      >
        <div className="flex flex-col gap-[10px]">
          <TextField
            placeholder="Legal company name"
            id="company_name"
          />
          <Select
            placeholder="Bank details"
            options={[]}
          />
          <TextField
            placeholder="SWIFT / BIC code"
            id="code"
          />
          <TextField
            placeholder="IBAN / Account number"
            id="account_number"
          />
        </div>
      </TabContent>
    </TabRoot>
  </div>
);
