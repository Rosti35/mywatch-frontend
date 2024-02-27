import {MessagesLink, SaleCountdown, WatchDetails} from '@/sections/demo/watch-card';
import {Button} from '@/ui/themed/button';
import {ArrowLeftIcon, Cross1Icon} from '@radix-ui/react-icons';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex mt-[10px] gap-5 overflow-hidden">
      <div className="overflow-auto w-full h-full pt-[30px] pb-5">
        <div className="w-full gap-5 flex flex-col">
          <div className="max-w-[544px] max-h-[544px] rounded-3xl w-full h-full aspect-square bg-zinc-400" />
          <div className="max-w-[544px] max-h-[544px] rounded-3xl w-full h-full aspect-square bg-zinc-400" />
        </div>
      </div>
      <div className="w-full pt-[30px]">
        <div className="flex flex-col gap-4 ">
          <Link
            href="/sell"
            className="w-fit flex items-center gap-2 tracking-tight"
          >
            <ArrowLeftIcon className="w-6 h-6" />
            <span className="tracking-wide"> Back to list</span>
          </Link>

          <p className="text-lg font-semibold leading-8 tracking-tight">
            Daytona Stainless Steel Black Dial
          </p>

          <p className="text-md font-medium leading-8 tracking-tight">Rolex</p>

          <MessagesLink count={2} />

          <span className="leading-[24px]  tracking-wide">
            Released in 1963, Cosmograph Daytona watches have long gone beyond just a work of
            watchmaking and have become a legend. It is the name of the model, which is strongly
            associated with the famous race track, and the characteristic
          </span>

          <WatchDetails className="mt-1" />

          <span className="mt-1 flex text-nowrap gap-[24px] py-1 items-center">
            <div>
              <p className="text-[14px] text-themed-grey-400 leading-5 tracking-wide">
                Fixed price
              </p>

              <div className="flex items-center gap-4">
                <p className="text-[30px] font-bold">33 344 $</p>
              </div>
            </div>
            <SaleCountdown />
          </span>

          <div className="mt-5 flex gap-[14px]">
            <Button>Edit information</Button>
            <Button className="bg-themed-grey-100 text-themed-black-primary gap-2">
              <Cross1Icon className="w-6 h-6" />
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
