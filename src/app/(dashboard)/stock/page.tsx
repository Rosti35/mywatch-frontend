'use client';

import * as Toggle from '@radix-ui/react-toggle';
import {BrandItemProps, BrandList} from '@/sections/brand/brand-list';
import {DashboardPageLayout} from '../_layout';
import {SearchContent, SearchField, SearchRoot} from '@/ui/themed/search';

const BrandItem = ({brand}: BrandItemProps) => {
  return (
    <Toggle.Root
      aria-label="Brand"
      className="data-[state=on]:bg-themed-black-primary data-[state=on]:text-white hover:bg-themed-black-primary/80 hover:text-white transition-all rounded-md px-2"
    >
      {brand}
    </Toggle.Root>
  );
};

export default function Stock() {
  return (
    <DashboardPageLayout title="Add watch to stock">
      <div className="h-fit overflow-hidden w-full flex flex-col">
        <div className="pr-[30px] space-y-[30px]">
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
          <p className="text-md font-bold">Choose brand</p>
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
