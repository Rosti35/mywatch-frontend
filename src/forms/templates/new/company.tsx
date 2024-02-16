import {CountriesSelect} from '@/forms/countries-select';
import {TextField} from '@/ui/themed/fields/text';

export const Company = () => {
  return (
    <div className="flex relative flex-col gap-3">
      <TextField
        id="companyName"
        placeholder="Company name"
      />
      <CountriesSelect placeholder="Country" />
      <TextField
        id="city"
        placeholder="City"
      />
      <div className="flex gap-3">
        <TextField
          id="address"
          placeholder="Address"
        />
        <TextField
          id="postalCode"
          placeholder="ZIP / Postal code"
        />
      </div>
    </div>
  );
};
