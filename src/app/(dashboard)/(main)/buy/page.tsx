'use client';

import {TextField} from '@/ui/themed/fields/text';
import {WatchPreview} from '@/sections/demo/watch-card';
import {DashboardPageLayout} from '../../_layout';
import {FilterSelect} from '../../_components/filter';
import {Button} from '@/ui/themed/button';

const Title = () => {
  return (
    <div className="flex w-full flex-wrap sm:flex-nowrap items-center">
      <span className="tracking-tighter text-nowrap">New watches for sale</span>
      <Button
        size="sm"
        className="sm:ml-auto font-medium px-5 text-nowrap"
      >
        Set up selection
      </Button>
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
              <TextField placeholder="Find the model" />
              <div className="sm:flex hidden gap-[14px] ">
                <FilterSelect>Brand & Model</FilterSelect>
                <FilterSelect>Warehouse</FilterSelect>
                <FilterSelect>Sort by</FilterSelect>
              </div>
            </div>
          </div>

          <WatchPreview />
          <WatchPreview />
          <WatchPreview />
          <WatchPreview />
          <WatchPreview />
          <WatchPreview />
          <WatchPreview />
          <WatchPreview />
          <WatchPreview />
          
        </div>
      </DashboardPageLayout>
    </div>
  );
}
