import {RatingBadge, WatchDetails} from '@/sections/demo/watch-card';
import {TimeIcon} from '@/ui/common/icons/time';
import {DealerBadge} from '@/ui/themed/dealer/badge';
import {SubrouteTitle} from '@/ui/themed/links';
import {ArrowLeftIcon, Cross1Icon} from '@radix-ui/react-icons';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex gap-5 overflow-hidden">
      <div className="overflow-auto w-full h-full pt-[30px] pb-5">
        <div className="w-full gap-5 flex flex-col">
          <div className="max-w-[544px] max-h-[544px] rounded-3xl w-full h-full aspect-square bg-zinc-400" />
          <div className="max-w-[544px] max-h-[544px] rounded-3xl w-full h-full aspect-square bg-zinc-400" />
        </div>
      </div>
      <div className="w-full pl-5 pt-[30px]">
        <div className="flex flex-col gap-4 ">
          <SubrouteTitle href='/archive' back="Back to search">Daytona Stainless Steel Black Dial</SubrouteTitle>

          <p className="text-md font-medium leading-8 tracking-tight">Rolex</p>

          <span className="mt-1 leading-7 tracking-tight">
            Released in 1963, Cosmograph Daytona watches have long gone beyond just a work of
            watchmaking and have become a legend. It is the name of the model, which is strongly
            associated with the famous race track, and the characteristic
          </span>

          <WatchDetails className="mt-1" />

          <span className="mt-1 flex text-nowrap gap-5 items-center">
            <div>
              <p className="text-[14px] text-themed-grey-400">Fixed price</p>

              <div className="flex items-center gap-4">
                <p className="text-[30px] font-bold">33 344 $</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <p className="flex flex-col gap-1">
                <span className="text-[14px] leading-4 text-themed-grey-400">Date</span>
                <span className="leading-5">10 dec 2023</span>
              </p>
              <p className="flex flex-col gap-1">
                <span className="text-[14px] leading-4 text-themed-grey-400">Deal №</span>
                <span className="leading-5">463-45</span>
              </p>
            </div>
          </span>

          <div className="mt-[40px] flex gap-[14px]">
            <button className="py-5 px-10 bg-themed-black-primary rounded-full text-white">
              Chat with seller
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
