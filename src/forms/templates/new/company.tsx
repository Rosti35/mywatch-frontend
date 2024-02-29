import {CountriesSelect} from '@/forms/countries-select';
import {TextField} from '@/ui/themed/fields/text';

export const Company = () => {
  return (
    <div className="flex relative flex-col gap-[10px]">
      <TextField
        id="companyName"
        placeholder="Company name"
      />
      <CountriesSelect placeholder="Country" />
      <TextField
        id="city"
        placeholder="City"
      />
      <div className="flex sm:flex-nowrap flex-wrap gap-3 w-full">
        <span className="w-full">
          <TextField
            id="address"
            placeholder="Address"
          />
        </span>
        <span className="min-w-[40px] sm:w-fit w-full">
          <TextField
            id="postalCode"
            placeholder="ZIP / Postal code"
          />
        </span>
      </div>
      <TextField
        id="website"
        placeholder="Website (if presents)"
      />
    </div>
  );
};
