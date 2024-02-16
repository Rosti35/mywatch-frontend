import {getContinentName} from '@/forms/get-continent';
import {Checkbox} from '@/ui/common/checkbox';
import {FlagImage, defaultCountries} from 'react-international-phone';
import groupBy from 'object.groupby';

const groupCountriesByContinent = () =>
  groupBy(defaultCountries, ([, iso]) => getContinentName(iso));

const countryContinents = Object.entries(groupCountriesByContinent());

export const ContinentList = () =>
  countryContinents.map(([continent, countries]) => (
    <div key={continent}>
      <div className="text-md font-bold sticky top-0 bg-themed-grey-100">
        <p>{continent}</p>
      </div>

      <div className="grid gap-2 my-7 h-full text-sm sm:grid-cols-2 xl:grid-cols-3 grid-cols-1">
        {countries?.sort().map(([country, iso]) => (
          <div
            key={iso}
            className="flex items-center whitespace-nowrap gap-2"
          >
            <Checkbox>
              <FlagImage
                width={24}
                height={24}
                iso2={iso}
              />
              <span className="text-ellipsis overflow-hidden">{country}</span>
            </Checkbox>
          </div>
        ))}
      </div>
    </div>
  ));
