import {Warehouse, WatchDetails} from '@/sections/demo/watch-card';
import {TimeIcon} from '@/ui/common/icons/time';
import {Button} from '@/ui/themed/button';
import {DealerBadge} from '@/ui/themed/dealer/badge';
import {SubrouteTitle} from '@/ui/themed/links';
import {ArrowLeftIcon} from '@radix-ui/react-icons';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex flex-col sm:h-dvh md:flex-row sm:gap-5 overflow-hidden sm:pt-[39px] sm:pr-[40px] sm:pl-[22px] sm:pb-0">
      <span className="sm:hidden block pt-5 pl-4 sm:p-0">
        <SubrouteTitle
          href="/sell"
          back="Back to list"
        />
      </span>

      <div className="overflow-auto w-full px-4 sm:px-0 h-full min-h-[300px]">
        <div className="w-full gap-5 flex md:flex-col min-h-[280px] h-full flex-row">
          <div className="max-w-[544px] min-w-[300px] max-h-[544px] rounded-3xl w-full h-full aspect-square bg-zinc-400" />
          <div className="max-w-[544px] min-w-[300px] max-h-[544px] rounded-3xl w-full h-full aspect-square bg-zinc-400" />
        </div>
      </div>
      <div className="w-full sm:p-0 p-4">
        <div className="flex flex-col gap-4 ">
          <span>
            <span className="hidden sm:block">
              <SubrouteTitle
                href="/sell"
                back="Back to list"
              />
            </span>

            <p className="sm:text-lg text-md font-semibold leading-8 tracking-tight">
              Daytona Stainless Steel Black Dial
            </p>
          </span>

          <p className="text-md font-medium leading-8 tracking-tight">Rolex</p>

          <span className="leading-[24px] sm:text-sm text-[14px]  tracking-wide">
            Released in 1963, Cosmograph Daytona watches have long gone beyond just a work of
            watchmaking and have become a legend. It is the name of the model, which is strongly
            associated with the famous race track, and the characteristic
          </span>

          <WatchDetails className="mt-1" />

          <span className="mt-[10px]">
            <p className="text-[14px] text-themed-grey-400">Fixed price</p>

            <div className="flex items-center gap-3">
              <p className="text-[30px] font-bold">33 344 $</p>
              <span className="sm:flex hidden gap-1">
                <TimeIcon className="w-6 h-6 text-themed-grey-400" />
                10:59:59
              </span>
            </div>
          </span>

          <div className="sm:hidden flex justify-between">
            <span className="w-full mr-9 text-nowrap">
              <DealerBadge variant="sm" />
            </span>
            <span className="w-full">
              <Warehouse />
            </span>
          </div>

          <div className="mt-1 flex sm:gap-[14px] gap-2 text-nowrap mb-[14px]">
            <Button className="px-[40px] w-full sm:w-fit">I want to buy</Button>
            <Button className="bg-themed-grey-100 sm:w-fit w-full px-[40px] text-themed-black-primary">
              Counter offer
            </Button>
          </div>

          <span className="hidden sm:block">
            <DealerBadge variant="md" />
          </span>
        </div>
      </div>
    </div>
  );
}
