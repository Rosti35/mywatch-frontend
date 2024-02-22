import {cn} from '@/lib/cn';
import {StarIcon} from '@/ui/common/icons/star';
import {TimeIcon} from '@/ui/common/icons/time';
import {HTMLAttributes} from 'react';
import {FlagImage, defaultCountries} from 'react-international-phone';

const [, iso2] = defaultCountries[0];

export const RatingBadge = () => {
  return (
    <span className="flex gap-2 items-center">
      <StarIcon className="w-4 h-4 text-yellow-500" />
      4.8
      <span className="text-themed-grey-400">(543 deals)</span>
    </span>
  );
};

const BuyWatch = () => (
  <div className="pl-[30px] text-nowrap max-w-[200px] w-full flex flex-col">
    <div>
      <p className="text-[14px]">Price</p>
      <p className="text-[26px] font-semibold">35 000 $</p>
    </div>

    <div className="mt-[10px] flex items-center gap-2">
      <TimeIcon className="w-6 h-6 text-themed-grey-400" />
      10:59:59
    </div>

    <div className="mt-[20px]">
      <button className=" h-[50px] bg-themed-black-primary text-white rounded-full w-full">
        Want to buy
      </button>
    </div>

    <div className="mt-auto text-sm">
      <p className="text-[14px]">Warehouse</p>
      <p className="flex items-center gap-2">
        <FlagImage iso2={iso2} />
        Some warehouse
      </p>
    </div>
  </div>
);

export const WatchDetails = ({className, ...props}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('mt-5 flex gap-[30px]', className)}
    {...props}
  >
    <div>
      <p className="text-[14px] text-themed-grey-600">Year</p>
      <p>2023</p>
    </div>
    <div>
      <p className="text-[14px] text-themed-grey-600">Package</p>
      <p>Box and papers</p>
    </div>
    <div>
      <p className="text-[14px] text-themed-grey-600">Condition</p>
      <p>Brand new</p>
    </div>
    <div>
      <p className="text-[14px] text-themed-grey-600">Reference</p>
      <p>112312</p>
    </div>
  </div>
);

export const WatchPreview = () => {
  return (
    <div className="bg-white p-5 rounded-3xl flex">
      <div className="min-w-[240px] h-[240px] rounded-3xl bg-zinc-500" />

      <div className="flex flex-col px-6 py-6 border-r w-full border-r-themed-grey-200">
        <div className="space-y-1">
          <p>Rolex</p>
          <p className="font-bold text-[20px]">Daytona Stainless Steel Black Dial</p>
        </div>

        <WatchDetails />

        <div className="mt-auto flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-800" />
          <div>
            Ineichen Zuriсh
            <RatingBadge />
          </div>
        </div>
      </div>

      <BuyWatch />
    </div>
  );
};
