import {CountriesSelect} from '@/forms/countries-select';
import {PhoneField} from '@/ui/themed/fields/phone';
import {TextField} from '@/ui/themed/fields/text';

export const Address = () => (
  <div className="flex flex-col gap-2  w-full max-w-[600px]">
    <TextField
      placeholder="Address name"
      id="company_name"
    />
    <CountriesSelect placeholder="Country" />
    <TextField
      placeholder="City"
      id="city"
    />

    <div className="flex gap-3">
      <span className="w-full">
        <TextField
          id="address"
          placeholder="Address"
        />
      </span>
      <TextField
        id="postalCode"
        placeholder="ZIP / Postal code"
      />
    </div>
    <TextField
      placeholder="Name"
      id="name"
    />
    <PhoneField
      placeholder="Phone"
      id="phone"
    />
  </div>
);
