import {cn} from '@/lib/cn';
import {MessageIcon} from '@/ui/common/icons/message';
import {StarIcon} from '@/ui/common/icons/star';
import {TimeIcon} from '@/ui/common/icons/time';
import {DealerBadge} from '@/ui/themed/dealer/badge';
import Link from 'next/link';
import {HTMLAttributes, SVGProps} from 'react';
import {FlagImage, defaultCountries} from 'react-international-phone';

const [, iso2] = defaultCountries[0];

export const Price = () => (
  <div>
    <p className="text-[14px] leading-3">Price</p>
    <p className="text-[26px] font-semibold leading-[45px]">35 000 $</p>
  </div>
);

export const Warehouse = () => (
  <div className="mt-auto text-sm">
    <p className="text-[14px] tracking-wide">Warehouse</p>
    <p className="flex items-center gap-2">
      <FlagImage iso2={iso2} />
      Some warehouse
    </p>
  </div>
);

type MessagesLinkProps = {
  count?: number;
  newMessages?: number;
};
export const MessagesLink = ({count, newMessages}: MessagesLinkProps) => {
  return (
    <div className="mt-auto mb-[6px] flex items-center gap-[14px-2]">
      <button className="bg-white max-w-[200px] px-4 rounded-full h-[40px] flex items-center gap-[10px]">
        <MessageIcon className="w-6 h-6 text-black" />
        <span className="text-[16px] font-normal flex items-center justify-center gap-[10px] tracking-[-0.03rem]">
          Messages {count ? <span>{count}</span> : null}
        </span>

        {newMessages ? (
          <span className="w-[30px] h-6 bg-green-500 rounded-full font-bold text-[14px] flex items-center justify-center text-white">
            +2
          </span>
        ) : null}
      </button>
    </div>
  );
};
type RatingBadgeProps = SVGProps<SVGSVGElement>;
export const RatingBadge = ({className, ...props}: RatingBadgeProps) => {
  return (
    <span className="flex gap-[10px] items-center">
      <StarIcon
        className={cn('w-4 h-4 text-yellow-500', className)}
        {...props}
      />
      4.8
      <span className="text-themed-grey-400">(543 deals)</span>
    </span>
  );
};

const BuyWatch = () => (
  <div className="pl-[30px] text-nowrap w-fit flex flex-col">
    <Price />

    <div className="mt-[6px] flex items-center gap-2">
      <TimeIcon className="w-6 h-6 text-themed-grey-400" />
      10:59:59
    </div>

    <div className="mt-[20px]">
      <button className=" h-[50px] min-w-[200px] bg-themed-black-primary text-white rounded-full w-full">
        Want to buy
      </button>
    </div>
    <Warehouse />
  </div>
);

export const SaleCountdown = () => (
  <div className="h-[62px] max-w-[200px] flex items-center min-w-[200px] w-full gap-[10px] bg-green-700/10 rounded-xl py-[10px]">
    <TimeIcon className="w-6 h-6 text-green-600 ml-5" />
    <span className="text-[14px] ">
      <p className="text-themed-grey-400 tracking-wide">On sale, time left</p>
      <p className="font-medium text-[16px] tracking-wide">10:59:59</p>
    </span>
  </div>
);

const SellWatch = () => (
  <div className="pl-[30px] gap-[15px] text-nowrap w-fit flex flex-col">
    <Price />
    <SaleCountdown />
  </div>
);

export const WatchDetails = ({className, ...props}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('mt-5 flex gap-[34px]', className)}
    {...props}
  >
    <div>
      <p className="text-[14px] leading-3 text-themed-grey-600">Year</p>
      <p className="leading-8">2023</p>
    </div>
    <div>
      <p className="text-[14px] leading-3 text-themed-grey-600">Package</p>
      <p className="leading-8">Box and papers</p>
    </div>
    <div>
      <p className="text-[14px]  leading-3 text-themed-grey-600">Condition</p>
      <p className="leading-8">Brand new</p>
    </div>
    <div>
      <p className="text-[14px]  leading-3 text-themed-grey-600">Reference</p>
      <p className="leading-8">112312</p>
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
          <MessagesLink
            count={3}
            newMessages={2}
          />
        ) : (
          <DealerBadge variant="sm" />
        )}
      </div>

      {sell ? <SellWatch /> : <BuyWatch />}
    </div>
  );
};
