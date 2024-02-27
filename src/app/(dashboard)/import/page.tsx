import {CardRoot} from '@/ui/common/card';
import {TrashIcon} from '@/ui/common/icons/trash';
import {TableHeader, TableRow} from '@/ui/common/table';
import {Button} from '@/ui/themed/button';
import {ArrowLeftIcon} from '@radix-ui/react-icons';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex mt-[10px] gap-5 overflow-hidden">
      <div className="w-full flex flex-col gap-[30px] pt-[30px]">
        <div className="flex flex-col gap-4 ">
          <Link
            href="/sell"
            className="w-fit flex items-center gap-2 tracking-tight"
          >
            <ArrowLeftIcon className="w-6 h-6" />
            <span className="tracking-wide"> Back</span>
          </Link>

          <p className="text-lg font-semibold leading-8 tracking-tight">
            Import from other platforms
          </p>
        </div>

        <CardRoot className="p-[30px] w-full flex flex-col bg-themed-grey-100 gap-[10px]">
          <p className="text-md font-bold leading-8">Chrono24</p>
          <div className="w-full">
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
                        <p className="leading-5 tracking-wide">
                          Daytona Stainless Steel Black Dial
                        </p>
                      </div>
                    </div>
                    <div className="w-full flex items-center tracking-wide mt-1">2020</div>
                    <div className="w-full  flex items-center tracking-wide mt-1">116520-0015</div>
                    <div className="w-full  flex items-center tracking-wide mt-1">Brand new</div>

                    <div className="w-full   gap-3 flex items-center tracking-wide mt-1">
                      Box, papers
                    </div>
                    <div className="w-full   gap-5 flex items-center mt-1">
                      <span className="font-bold tracking-wide">33 783 $</span>
                      <TrashIcon className="min-w-6 min-h-6" />
                    </div>
                  </TableRow>
                );
              })}
            </div>

            <div className="flex mt-[12px] text-sm gap-2">
              <Button className="px-7">
                <span className="tracking-wide">Add to my stock</span>
              </Button>

              <Button className="px-7 text-themed-black-primary bg-[#e5e5e5]">
                <span className="tracking-wide">Cancel</span>
              </Button>
            </div>
          </div>
        </CardRoot>
      </div>
    </div>
  );
}
