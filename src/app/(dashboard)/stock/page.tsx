'use client';

import * as Toggle from '@radix-ui/react-toggle';
import {BrandItemProps, BrandList} from '@/sections/brand/brand-list';
import {DashboardPageLayout} from '../_layout';
import {SearchContent, SearchField, SearchRoot} from '@/ui/themed/search';
import Link from 'next/link';
import {PlusIcon} from '@/ui/common/icons/plus';

const BrandItem = ({brand}: BrandItemProps) => {
  return (
    <Link
      href="/stock/brand"
      aria-label="Brand"
      className="data-[state=on]:bg-themed-black-primary data-[state=on]:text-white hover:bg-themed-black-primary/80 hover:text-white transition-all rounded-md px-2"
    >
      {brand}
    </Link>
  );
};

const Title = () => {
  return (
    <div className="flex w-full items-center">
      Add watch to stock
      <button className="ml-auto text-sm font-medium px-5 rounded-full bg-themed-grey-300">
        Import from other platforms
      </button>
    </div>
  );
};
export default function Stock() {
  return (
    <DashboardPageLayout title={<Title />}>
      <div className="h-fit overflow-hidden w-full flex flex-col">
        <div className="pr-[40px] space-y-[30px]">
          <div className="w-full h-fit relative">
            <SearchRoot options={[]}>
              <SearchField placeholder="Find the model you want to  add to your stock" />

              <SearchContent>
                <div className="h-[76px] flex flex-col border-b border-b-themed-grey-200 justify-center px-[30px]">
                  <p>Rolex Daytona</p>
                  <p className="text-themed-grey-400">Series</p>
                </div>
                <div className="h-[76px] flex flex-col justify-center px-[30px]">
                  <p>Rolex Daytona</p>
                  <p className="text-themed-grey-400">Series</p>
                </div>

                <div className="h-[112px] flex border-t border-t-themed-grey-200 items-center gap-[10px] px-[30px]">
                  <div className="h-20 w-20 bg-zinc-400" />

                  <div>
                    <p>Rolex Daytona Stainless Steel Black Dial</p>
                    <p className="text-caption text-themed-grey-400">12312</p>
                  </div>
                </div>
                <div className="h-[112px] flex border-t border-t-themed-grey-200 items-center gap-[10px] px-[30px]">
                  <div className="h-20 w-20 bg-zinc-400" />

                  <div>
                    <p>Rolex Daytona Stainless Steel Black Dial</p>
                    <p className="text-caption text-themed-grey-400">12312</p>
                  </div>
                </div>
              </SearchContent>
            </SearchRoot>
          </div>
          <div className="flex">
            <p className="text-md font-bold">Choose brand</p>
            <button className="ml-auto flex gap-2 items-center rounded-full bg-themed-grey-100 px-5">
              <PlusIcon className="w-6 h-6" /> My brand is not listed
            </button>
          </div>
        </div>

        <div className="overflow-auto h-full space-y-[30px] py-[30px]">
          <BrandList
            template={BrandItem}
            className="sm:grid-cols-2 xl:grid-cols-4 grid-cols-1"
          />
        </div>
      </div>
    </DashboardPageLayout>
  );
}
