import {WatchDetails} from '@/sections/demo/watch-card';
import {TimeIcon} from '@/ui/common/icons/time';
import {Button} from '@/ui/themed/button';
import {DealerBadge} from '@/ui/themed/dealer/badge';
import {SubrouteTitle} from '@/ui/themed/links';
import {ArrowLeftIcon} from '@radix-ui/react-icons';
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
          <SubrouteTitle
            href="/buy"
            back="Back to search"
          >
            Daytona Stainless Steel Black Dial
          </SubrouteTitle>

          <p className="text-lg font-semibold leading-8 tracking-tight">
            Daytona Stainless Steel Black Dial
          </p>

          <p className="text-md font-medium leading-8 tracking-tight">Rolex</p>

          <span className="leading-[25px]  tracking-wide">
            Released in 1963, Cosmograph Daytona watches have long gone beyond just a work of
            watchmaking and have become a legend. It is the name of the model, which is strongly
            associated with the famous race track, and the characteristic
          </span>

          <WatchDetails className="mt-1" />

          <span className="mt-[10px]">
            <p className="text-[14px] text-themed-grey-400">Fixed price</p>

            <div className="flex items-center gap-3">
              <p className="text-[30px] font-bold">33 344 $</p>
              <span className="flex gap-1">
                <TimeIcon className="w-6 h-6 text-themed-grey-400" />
                10:59:59
              </span>
            </div>
          </span>

          <div className="mt-1 flex gap-[14px] mb-[14px]">
            <Button className="px-[40px]">I want to buy</Button>
            <Button className="bg-themed-grey-100 px-[40px] text-themed-black-primary">
              Counter offer
            </Button>
          </div>

          <DealerBadge variant="md" />
        </div>
      </div>
    </div>
  );
}
