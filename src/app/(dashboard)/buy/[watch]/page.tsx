import {RatingBadge, WatchDetails} from '@/sections/demo/watch-card';
import {TimeIcon} from '@/ui/common/icons/time';
import {ArrowLeftIcon} from '@radix-ui/react-icons';
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

          <span className="mt-1">
            <p className="text-[14px] text-themed-grey-400">Fixed price</p>

            <div className="flex items-center gap-4">
              <p className="text-[30px] font-bold">33 344 $</p>
              <TimeIcon className="w-6 h-6 text-themed-grey-400" />
              10:59:59
            </div>
          </span>

          <div className="mt-1 flex gap-[14px]">
            <button className="py-5 px-10 bg-themed-black-primary rounded-full text-white">
              I want to buy
            </button>
            <button className="py-5 px-10 bg-themed-grey-100 rounded-full">Counter offer</button>
          </div>

          <div className="mt-4 flex items-center gap-3">
            <div className="w-[60px] h-[60px] rounded-full bg-blue-800" />
            <div className="leading-7">
              <p className="font-bold">Ineichen Zuriсh</p>
              <RatingBadge />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
