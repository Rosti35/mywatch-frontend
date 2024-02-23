import {RatingBadge, WatchDetails} from '@/sections/demo/watch-card';
import {TimeIcon} from '@/ui/common/icons/time';
import {DealerBadge} from '@/ui/themed/dealer/badge';
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
          <Link
            href="/buy"
            className="w-fit flex items-center gap-2 tracking-tight"
          >
            <ArrowLeftIcon className="w-6 h-6" />
            Back to search
          </Link>

          <p className="text-lg font-semibold leading-8 tracking-tight">
            Daytona Stainless Steel Black Dial
          </p>

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
            <div className="flex w-fit items-center min-w-[200px] gap-[10px] bg-green-700/10 rounded-xl py-[10px]">
              <TimeIcon className="w-6 h-6 text-green-600 ml-5" />
              <span className="text-[14px] leading-6">
                <p className="text-themed-grey-400">On sale, time left</p>
                <p>10:59:59</p>
              </span>
            </div>
          </span>

          <div className="mt-1 flex gap-[14px]">
            <button className="py-5 px-10 bg-themed-black-primary rounded-full text-white">
              Edit information
            </button>
            <button className="py-5 px-[30px] gap-[10px] bg-themed-grey-100 flex rounded-full">
              <Cross1Icon className="w-6 h-6" />
              Cancel
            </button>
          </div>

          <DealerBadge variant="md" />
        </div>
      </div>
    </div>
  );
}
