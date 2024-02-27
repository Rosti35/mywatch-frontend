'use client';

import {DashboardPageLayout} from '../_layout';
import {PlusIcon} from '@/ui/common/icons/plus';
import {WatchPreview} from '@/sections/demo/watch-card';
import {Button} from '@/ui/themed/button';
import {FilterSelect} from '../_components/filter';

const Title = () => {
  return (
    <div className="flex w-full mt-[20px] flex-col gap-5">
      <p className="tracking-tighter leading-7">Sell watches</p>

      <div className="flex gap-4 font-normal text-sm">
        <Button
          size="sm"
          className="bg-themed-black-primary gap-[10px] text-white rounded-full px-5 flex items-center"
        >
          <PlusIcon className="w-6 h-6" />
          Add watch
        </Button>
        <Button
          size="sm"
          className="bg-[#D4D4D4] text-themed-black-primary rounded-full px-5"
        >
          Import from other platforms
        </Button>
      </div>
    </div>
  );
};
export default function Page() {
  return (
    <DashboardPageLayout title={<Title />}>
      <div className="h-fit w-full flex flex-col gap-8">
        <div className="space-y-[30px]">
          <div className="w-full h-fit relative flex flex-col gap-[14px]">
            <div className="flex gap-[14px]">
              <FilterSelect>Brand & Model</FilterSelect>
              <FilterSelect>Warehouse</FilterSelect>
              <FilterSelect>Status</FilterSelect>
              <FilterSelect>Sort by</FilterSelect>
            </div>
          </div>
        </div>

        <div className="w-full h-full flex flex-col gap-5">
          <WatchPreview sell />
          <WatchPreview sell />
          <WatchPreview sell />
        </div>
      </div>
    </DashboardPageLayout>
  );
}
