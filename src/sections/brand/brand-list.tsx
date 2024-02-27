// Temporarily using country names, while no list of brands yet
import {Checkbox} from '@/ui/common/checkbox';
import {defaultCountries} from 'react-international-phone';
import groupBy from 'object.groupby';
import {FC, HTMLAttributes} from 'react';
import {cn} from '@/lib/cn';

const groupNamesByLetter = () => groupBy(defaultCountries, ([country]) => country.toUpperCase()[0]);

export type BrandItemProps = {
  brand: string;
};
const BrandCheckbox = ({brand}: BrandItemProps) => (
  <Checkbox>
    <span className="text-ellipsis overflow-hidden max-w-40">{brand}</span>
  </Checkbox>
);

type BrandListProps = {
  template?: FC<BrandItemProps>;
} & HTMLAttributes<HTMLDivElement>;
export const BrandList = ({template = BrandCheckbox, className, ...props}: BrandListProps) => {
  const Template = template;

  return Object.entries(groupNamesByLetter()).map(([continent, countries]) => (
    <div
      key={continent}
      className="flex gap-7 px-1 leading-5 w-full h-full mb-[30px]"
    >
      <div className="text-[20px] font-bold h-full sticky top-0 ">
        <p className="leading-9">{continent}</p>
      </div>

      <div
        className={cn(
          'grid gap-[10px] h-full w-full text-sm sm:grid-cols-2 xl:grid-cols-3 grid-cols-1',
          className,
        )}
        {...props}
      >
        {countries?.sort().map(([country, iso]) => (
          <div
            key={iso}
            className="flex items-center whitespace-nowrap gap-2"
          >
            <Template brand={country} />
          </div>
        ))}
      </div>
    </div>
  ));
};
