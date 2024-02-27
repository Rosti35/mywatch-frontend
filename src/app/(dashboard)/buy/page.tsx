'use client';

import {DashboardPageLayout} from '../_layout';

import {TextField} from '@/ui/themed/fields/text';
import {WatchPreview} from '@/sections/demo/watch-card';
import {FilterSelect} from '../_components/filter';

const Title = () => {
  return (
    <div className="flex w-full items-center">
      <span className="tracking-tighter">New watches for sale</span>
      <button className="ml-auto text-sm font-medium px-5 rounded-full bg-themed-black-primary text-white">
        Set up selection
      </button>
    </div>
  );
};
export default function Stock() {
  return (
    <div>
      <DashboardPageLayout title={<Title />}>
        <div className="h-fit w-full flex flex-col gap-5">
          <div className="space-y-[30px]">
            <div className="w-full h-fit relative flex flex-col gap-[14px]">
              <TextField
                className="px-4"
                placeholder="Find the model you want to  add to your stock"
              />
              <div className="flex gap-[14px]">
                <FilterSelect>Brand & Model</FilterSelect>
                <FilterSelect>Warehouse</FilterSelect>
                <FilterSelect>Sort by</FilterSelect>
              </div>
            </div>
          </div>

          <WatchPreview />
          <WatchPreview />
          <WatchPreview />
        </div>
      </DashboardPageLayout>
    </div>
  );
}
