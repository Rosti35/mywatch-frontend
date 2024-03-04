'use client';

import {TextField} from '@/ui/themed/fields/text';
import {WatchPreview} from '@/sections/demo/watch-card';
import {DashboardPageLayout} from '../../_layout';
import {FilterSelect} from '../../_components/filter';
import {Button} from '@/ui/themed/button';

const Title = () => {
  return (
    <div className="flex w-full flex-wrap sm:flex-nowrap items-center gap-5">
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
export default function Page() {
  return (
    <div className="px-4 pb-4 lg:pb-4 lg:pl-[22px] lg:pr-[40px] lg:pt-[42px]">
      <DashboardPageLayout title={<Title />}>
        <div className="h-fit w-full flex flex-col gap-8">
          <div className="space-y-[30px] hidden sm:block" >
            <div className="w-full h-fit relative flex flex-col gap-[14px]">
              <TextField placeholder="Find the model" />
              <div className="gap-[14px] ">
                <FilterSelect>Brand & Model</FilterSelect>
                <FilterSelect>Warehouse</FilterSelect>
                <FilterSelect>Sort by</FilterSelect>
              </div>
            </div>
          </div>

          <div className="w-full h-full flex flex-col sm:gap-5 gap-2">
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
        </div>
      </DashboardPageLayout>
    </div>
  );
}
