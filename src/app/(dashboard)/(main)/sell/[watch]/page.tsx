import {MessagesLink, SaleCountdown, WatchDetails} from '@/sections/demo/watch-card';
import {Button} from '@/ui/themed/button';
import {SubrouteTitle} from '@/ui/themed/links';
import {Cross1Icon} from '@radix-ui/react-icons';

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
          <div className="max-w-[544px] min-w-[300px]  max-h-[544px] rounded-3xl w-full h-full aspect-square bg-zinc-400" />
          <div className="max-w-[544px] min-w-[300px] max-h-[544px] rounded-3xl w-full h-full aspect-square bg-zinc-400" />
        </div>
      </div>
      <div className="w-full sm:p-0 p-4">
        <div className="flex flex-col gap-5 ">
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
          <p className="sm:text-md text-sm font-medium leading-8 tracking-tight">Rolex</p>

          <MessagesLink count={2} />

          <span className="leading-[24px] sm:text-sm text-[14px]  tracking-wide">
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

              <p className="sm:text-[30px] text-md font-bold">33 344$</p>
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
