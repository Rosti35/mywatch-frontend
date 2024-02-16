import {CountriesSelect} from '@/forms/countries-select';
import {TextField} from '@/ui/themed/fields/text';

export const Warehouse = () => (
  <div className="flex flex-col gap-2 max-w-[500px] ">
    <TextField
      placeholder="Address name"
      id="address_name"
    />
    <CountriesSelect placeholder="Country" />
    <TextField
      placeholder="City"
      id="city"
    />
    <TextField
      placeholder="Address"
      id="address"
    />
    <TextField
      placeholder="Details"
      id="details"
    />
  </div>
);
