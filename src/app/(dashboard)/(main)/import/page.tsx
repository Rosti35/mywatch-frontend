import {CardRoot} from '@/ui/common/card';
import {TrashIcon} from '@/ui/common/icons/trash';
import {TableHeader, TableRow} from '@/ui/common/table';
import {Button} from '@/ui/themed/button';
import {GoBack, SubrouteTitle} from '@/ui/themed/links';
import {PropsWithChildren} from 'react';

const ProductCard = () => {
  return (
    <div className="bg-white flex flex-col rounded-[20px] pr-[14px] py-[10px] gap-4">
      <div className="flex gap-[10px]">
        <div className="min-w-[80px] h-[80px] bg-zinc-500" />
        <div className="flex justify-between flex-col text-[14px]">
          <p className="font-bold">Rolex</p>
          <p className="tracking-wide">Daytona Stainless Steel Black Dial</p>
          <p className="tracking-wide text-xs">Ref. 116520-0015</p>
        </div>
      </div>
      <div className="flex gap-[25px] w-full pl-[14px]">
        <div className="flex flex-col">
          <p className="tracking-wide text-xs text-[#737373]">Year</p>
          <p className="tracking-wide text-xs">2020</p>
        </div>
        <div className="flex flex-col">
          <p className="tracking-wide text-xs text-[#737373]">Package</p>
          <p className="tracking-wide text-xs">Box and papers</p>
        </div>
        <div className="flex flex-col">
          <p className="tracking-wide text-xs text-[#737373]">Condition</p>
          <p className="tracking-wide text-xs">Brand new</p>
        </div>
      </div>

      <div className="pl-[14px] flex">
        <p className="text-[18px] font-semibold">36 000 $</p>

        <TrashIcon className="w-5 h-5 ml-auto" />
      </div>
    </div>
  );
};

const ProductList = () => (
  <div className="w-full sm:block hidden">
    <TableHeader
      style={{
        gridTemplateColumns: '32% 10.6% 14.5% 13.8% 15.2%  10%',
      }}
    >
      <span className="tracking-wide">Brand / Model</span>
      <span className="tracking-wide">Year</span>
      <span className="tracking-wide">Ref.number</span>
      <span className="tracking-wide">Condition</span>
      <span className="tracking-wide">Package</span>
      <span className="tracking-wide">Price</span>
    </TableHeader>

    <div>
      {[1, 2, 3].map(k => {
        return (
          <TableRow
            key={k}
            className="h-[120px]"
            style={{
              gridTemplateColumns: '32% 10.6% 14.5% 13.8% 15.2%  10%',
            }}
          >
            <div className="w-full  flex gap-4 items-center mt-1">
              <div className="w-[80px] h-[80px] bg-zinc-500" />
              <div className="flex max-w-[200px] text-wrap h-full py-[8px] flex-col">
                <p className="leading-8 font-bold">Rolex</p>
                <p className="leading-5 tracking-wide">Daytona Stainless Steel Black Dial</p>
              </div>
            </div>
            <div className="w-full flex items-center tracking-wide mt-1">2020</div>
            <div className="w-full  flex items-center tracking-wide mt-1">116520-0015</div>
            <div className="w-full  flex items-center tracking-wide mt-1">Brand new</div>

            <div className="w-full   gap-3 flex items-center tracking-wide mt-1">Box, papers</div>
            <div className="w-full   gap-5 flex items-center mt-1">
              <span className="font-bold tracking-wide">33 783 $</span>
              <TrashIcon className="w-6 h-6" />
            </div>
          </TableRow>
        );
      })}
    </div>
  </div>
);

export default function Page() {
  return (
    <div className="px-4 pb-4 lg:pb-4 pt-5 lg:pl-[22px] lg:pr-[40px] lg:pt-[42px]">
      <div className="w-full flex flex-col sm:gap-[30px] gap-5">
        <SubrouteTitle
          href="/sell"
          back="Back"
        >
          Import from other platforms
        </SubrouteTitle>

        <CardRoot className="sm:p-[30px] p-[20px] w-full flex flex-col bg-themed-grey-100 gap-[10px]">
          <p className="text-md font-bold leading-8">Chrono24</p>
          <ProductList />
          <div className="md:hidden flex flex-col gap-2">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>

          <div className="flex mt-[12px] text-sm gap-2">
            <Button className="px-7">
              <span className="tracking-wide">Add to my stock</span>
            </Button>

            <Button className="px-7 text-themed-black-primary bg-[#e5e5e5]">
              <span className="tracking-wide">Cancel</span>
            </Button>
          </div>
        </CardRoot>
      </div>
    </div>
  );
}
