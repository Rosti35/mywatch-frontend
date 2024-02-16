// Temporarily using country names, while no list of brands yet
import {Checkbox} from '@/ui/common/checkbox';
import {defaultCountries} from 'react-international-phone';
import groupBy from 'object.groupby';

const groupNamesByLetter = () => groupBy(defaultCountries, ([country]) => country.toUpperCase()[0]);

export const BrandList = () => {
  return Object.entries(groupNamesByLetter()).map(([continent, countries]) => (
    <div
      key={continent}
      className="flex gap-7"
    >
      <div className="text-md font-bold h-full sticky  top-0 bg-themed-grey-100">
        <p>{continent}</p>
      </div>

      <div className="grid gap-3 h-full w-full text-sm sm:grid-cols-2 xl:grid-cols-3 grid-cols-1 mb-7">
        {countries?.sort().map(([country, iso]) => (
          <div
            key={iso}
            className="flex items-center whitespace-nowrap gap-2"
          >
            <Checkbox>
              <span className="text-ellipsis overflow-hidden">{country}</span>
            </Checkbox>
          </div>
        ))}
      </div>
    </div>
  ));
};
