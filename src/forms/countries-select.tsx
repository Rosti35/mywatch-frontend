import {Select} from '@/ui/themed/fields/select';
import {FC} from 'react';
import {FlagImage, defaultCountries} from 'react-international-phone';

const countryOptions = defaultCountries.map(([country, iso]) => {
  return {
    value: country,
    label: (
      <div className="flex items-center gap-2">
        <FlagImage
          width={24}
          height={24}
          iso2={iso}
        />
        {country}
      </div>
    ),
  };
});

export const CountriesSelect: FC<{placeholder: string}> = ({placeholder}) => (
  <Select
    options={countryOptions}
    placeholder={placeholder}
  />
);
