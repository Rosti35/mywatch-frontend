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
      <div className="text-md  bg-themed-grey-100 font-semibold sticky top-0">
        <p>{continent}</p>
      </div>

      <div className="grid gap-[10px] mt-[16px] mb-[30px] h-full text-sm sm:grid-cols-2 xl:grid-cols-3 grid-cols-1">
        {countries?.sort().map(([country, iso]) => (
          <Checkbox key={iso}>
            <div className="flex items-center whitespace-nowrap gap-[10px]">
              <FlagImage
                width={24}
                height={24}
                iso2={iso}
              />
              <span className="text-ellipsis overflow-hidden max-w-40">{country}</span>
            </div>
          </Checkbox>
        ))}
      </div>
    </div>
  ));
