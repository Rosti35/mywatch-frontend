import {cn} from '@/lib/cn';
import {MessageIcon} from '@/ui/common/icons/message';
import {StarIcon} from '@/ui/common/icons/star';
import {TimeIcon} from '@/ui/common/icons/time';
import {DealerBadge} from '@/ui/themed/dealer/badge';
import Link from 'next/link';
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
  <div className="pl-[30px] text-nowrap w-fit flex flex-col">
    <div>
      <p className="text-[14px]">Price</p>
      <p className="text-[26px] font-semibold">35 000 $</p>
    </div>

    <div className="mt-[10px] flex items-center gap-2">
      <TimeIcon className="w-6 h-6 text-themed-grey-400" />
      10:59:59
    </div>

    <div className="mt-[20px]">
      <button className=" h-[50px] min-w-[200px] bg-themed-black-primary text-white rounded-full w-full">
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

const SellWatch = () => (
  <div className="pl-[30px] text-nowrap w-fit flex flex-col">
    <div>
      <p className="text-[14px]">Price</p>
      <p className="text-[26px] font-semibold">35 000 $</p>
    </div>

    <div className="mt-[20px] flex items-center min-w-[200px] w-full gap-[10px] bg-green-700/10 rounded-xl py-[10px]">
      <TimeIcon className="w-6 h-6 text-green-600 ml-5" />
      <span className="text-[14px] leading-6">
        <p className="text-themed-grey-400">On sale, time left</p>
        <p>10:59:59</p>
      </span>
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

type WatchPreviewProps = {
  sell?: boolean;
};
export const WatchPreview = ({sell = false}: WatchPreviewProps) => {
  return (
    <div className=" bg-themed-grey-100 p-5 rounded-3xl flex">
      <div className="min-w-[240px] h-[240px] rounded-3xl bg-zinc-500" />

      <div className="flex flex-col px-6 py-6 border-r w-full border-r-themed-grey-200">
        <Link
          href={`${sell ? 'sell' : 'buy'}/1`}
          className="space-y-1"
        >
          <p>Rolex</p>
          <p className="font-bold text-[20px]">Daytona Stainless Steel Black Dial</p>
        </Link>

        <WatchDetails />

        {sell ? (
          <div className="mt-auto flex items-center gap-3">
            <button className="bg-white max-w-[200px] px-4 rounded-full py-2 flex items-center gap-[10px]">
              <MessageIcon className="w-6 h-6 text-black" />
              Messages 4
              <span className="w-[30px] h-6 bg-green-500 rounded-full font-bold text-[14px] flex items-center justify-center text-white">
                +2
              </span>
            </button>
          </div>
        ) : (
          <DealerBadge variant="sm" />
        )}
      </div>

      {sell ? <SellWatch /> : <BuyWatch />}
    </div>
  );
};
