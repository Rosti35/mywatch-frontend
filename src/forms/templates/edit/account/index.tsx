import {Select} from '@/ui/themed/fields/select';
import {TextField} from '@/ui/themed/fields/text';

export const Account = () => (
  <div className="overflow-auto flex flex-col gap-2 max-w-[500px] ">
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
);
