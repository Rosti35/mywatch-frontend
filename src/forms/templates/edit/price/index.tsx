import {FieldLayout} from '@/ui/themed/fields/layout';
import {NumericFormat} from 'react-number-format';

export const Price = () => (
  <div className="flex flex-col gap-4">
    <p className="text-md font-semibold">Price</p>
    <div className="h-fit flex">
      <FieldLayout className="rounded-r-none max-w-48 min-w-0 border-r border-r-themed-grey-200">
        <NumericFormat
          value="0"
          allowLeadingZeros={false}
          suffix=" $"
          thousandSeparator=" "
          id="lowest"
          className="h-[24px] outline-none"
        />

        <label
          htmlFor="lowest"
          className=" pointer-events-none transition-all text-themed-grey-400 h-[15px] bg-transparent text-xs  font-light flex items-center "
        >
          Lowest price
        </label>
      </FieldLayout>
      <FieldLayout className="rounded-l-none max-w-48 min-w-0 w-full">
        <NumericFormat
          value="1000000"
          allowLeadingZeros={false}
          suffix=" $"
          thousandSeparator=" "
          id="highest"
          className="h-[24px] outline-none"
        />

        <label
          htmlFor="highest"
          className=" pointer-events-none transition-all text-themed-grey-400 h-[15px] bg-transparent text-xs  font-light flex items-center "
        >
          Highest price
        </label>
      </FieldLayout>
    </div>
  </div>
);
