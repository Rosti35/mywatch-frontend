import {cn} from '@/lib/cn';
import {MessageIcon} from '@/ui/common/icons/message';
import {StarIcon} from '@/ui/common/icons/star';
import {TimeIcon} from '@/ui/common/icons/time';
import {Button} from '@/ui/themed/button';
import {DealerBadge} from '@/ui/themed/dealer/badge';
import Link from 'next/link';
import {HTMLAttributes, SVGProps} from 'react';
import {FlagImage, defaultCountries} from 'react-international-phone';

const [, iso2] = defaultCountries[0];

export const Price = () => (
  <div>
    <p className="lg:text-[14px] hidden sm:block text-xs leading-3">Price</p>
    <p className="lg:text-[26px] text-[18px] font-semibold leading-[45px]">35 000 $</p>
  </div>
);

export const Warehouse = () => (
  <div className="mt-auto text-sm">
    <p className="sm:text-[14px] text-xs tracking-wide text-[#A3A3A3]">Warehouse</p>
    <p className="flex items-center gap-2 sm:text-sm text-[14px]">
      <FlagImage iso2={iso2} />
      Zurich
    </p>
  </div>
);
export const SellWatchMobile = () => {
  return (
    <div className="flex sm:hidden  p-[10px] w-full h-full bg-white rounded-[20px] gap-[2px]">
      <div className="w-full flex flex-col h-full">
        <div className="w-full max-w-[150px] h-fit aspect-square rounded-3xl bg-zinc-500" />
        <MessagesLink
          count={3}
          newMessages={2}
        />
        <div className="mt-5 px-[10px]">
          <Warehouse />
        </div>
      </div>

      <div className="w-full flex flex-col  h-full">
        <Link
          href="/sell/1"
          className="space-y-1"
        >
          <p className="text-xs leading-4">Rolex</p>
          <p className="font-bold text-[14px] leading-[19px]">Daytona Stainless Steel Black Dial</p>
        </Link>

        <div className="mt-[11px]">
          <WatchDetails />
        </div>

        <Price />

        <SaleCountdown />
      </div>
    </div>
  );
};

export const BuyWatchMobile = () => {
  return (
    <div className="flex flex-col bg-white rounded-[20px]   p-[10px] sm:hidden ">
      <div className="flex w-full h-full gap-[14px]">
        <div className="w-full flex flex-col h-full">
          <div className="w-full max-w-[150px] h-fit aspect-square rounded-3xl bg-zinc-500" />
        </div>

        <div className="w-full flex flex-col gap-2 h-full">
          <Link
            href="/sell/1"
            className="space-y-1"
          >
            <p className="text-xs">Rolex</p>
            <p className="font-bold text-[14px]">Daytona Stainless Steel Black Dial</p>
          </Link>

          <WatchDetails />

          <Price />
        </div>
      </div>

      <div className="flex flex-col w-full gap-4">
        <div className="flex gap-4 w-full">
          <DealerBadge variant="sm" />
          <Warehouse />
        </div>
        <button className=" h-[50px] bg-themed-black-primary text-white rounded-full w-full">
          Want to buy
        </button>
      </div>
    </div>
  );
};
type MessagesLinkProps = {
  count?: number;
  newMessages?: number;
};
export const MessagesLink = ({count, newMessages}: MessagesLinkProps) => {
  return (
    <div className="flex items-center gap-[14px]">
      <button className="bg-white max-w-[200px] px-4 rounded-full h-[40px] flex items-center gap-[10px]">
        <MessageIcon className="sm:w-6 sm:h-6 w-5 h-5 text-black" />
        <span className="sm:text-[16px] text-xs lg:before:content-['Messages'] before:content-none font-normal flex items-center justify-center gap-[10px] tracking-[-0.03rem]">
          {count ? <span>{count}</span> : null}
        </span>

        {newMessages ? (
          <span className="w-[30px] sm:h-6 h-5 bg-green-500 rounded-full font-bold sm:text-[14px] text-xs flex items-center justify-center text-white">
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
    <span className="flex sm:text-sm text-[14px] text-nowrap gap-[7px] items-center">
      <StarIcon
        className={cn('w-4 h-4 text-yellow-500', className)}
        {...props}
      />
      4.8
      <span className="text-themed-grey-400 ml-[2px] sm:text-sm text-xs">(543 deals)</span>
    </span>
  );
};

const BuyWatch = () => (
  <div className="pl-[30px] text-nowrap w-fit flex h-full flex-col">
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
    <div className="mt-auto flex h-full">
      <Warehouse />
    </div>
  </div>
);

export const SaleCountdown = () => (
  <div className="md:h-[62px] h-[57px] max-w-[170px] flex items-center justify-center w-full gap-[10px] bg-green-700/10 rounded-xl py-[8px]">
    <TimeIcon className="w-6 h-6 text-green-600 " />
    <span className="lg:text-[14px] text-xs">
      <p className="text-themed-grey-400 tracking-wide">On sale, time left</p>
      <p className="font-medium text-[16px] tracking-wide">10:59:59</p>
    </span>
  </div>
);

const SellWatch = () => (
  <div className="lg:pl-[30px] pl-4 gap-[15px] text-nowrap w-full flex flex-col">
    <Price />
    <SaleCountdown />
  </div>
);

export const WatchDetails = ({className, ...props}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'lg:text-[16px] text-xs text-nowrap flex-col sm:flex-row flex lg:gap-[30px] gap-[10px] [&>*]:leading-3',
      className,
    )}
    {...props}
  >
    <div className="flex gap-[6px] flex-row sm:flex-col ">
      <p className="text-themed-grey-600 sm:text-[14px] text-xs sm:leading-[4px]">Year</p>
      <p className="sm:leading-7">2023</p>
    </div>
    <div className="flex gap-[6px] flex-row sm:flex-col">
      <p className="text-themed-grey-600 sm:text-[14px] text-xs sm:leading-[4px]">Package</p>
      <p className="sm:leading-7">Box and papers</p>
    </div>
    <div className="flex gap-[6px] flex-row sm:flex-col">
      <p className="text-themed-grey-600 sm:text-[14px] text-xs sm:leading-[4px]">Condition</p>
      <p className="sm:leading-7">Brand new</p>
    </div>
    <div className="flex gap-[6px] flex-row sm:flex-col">
      <p className="text-themed-grey-600 sm:text-[14px] text-xs sm:leading-[4px]">Reference</p>
      <p className="sm:leading-7">112312</p>
    </div>
  </div>
);

type WatchPreviewProps = {
  sell?: boolean;
};
export const WatchPreview = ({sell = false}: WatchPreviewProps) => {
  return (
    <>
      {sell ? <SellWatchMobile /> : <BuyWatchMobile />}
      <div className="bg-themed-grey-100 hidden sm:flex h-auto p-5 rounded-3xl">
        <div className="max-w-[240px] w-full my-auto h-fit aspect-square rounded-3xl bg-zinc-500" />

        <div className="flex flex-col w-full sm:gap-5 lg:px-6 px-2 lg:py-6 p-2 border-r  border-r-themed-grey-200">
          <Link
            href={`/${sell ? 'sell' : 'buy'}/1`}
            className="space-y-1"
          >
            <p className="sm:leading-5">Rolex</p>
            <p className="font-bold text-[20px] sm:leading-9 tracking-tight">
              Daytona Stainless Steel Black Dial
            </p>
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

        <div className="max-w-[230px] w-full">{sell ? <SellWatch /> : <BuyWatch />}</div>
      </div>
    </>
  );
};
