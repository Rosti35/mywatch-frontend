'use client';

import {PlusIcon} from '@/ui/common/icons/plus';
import {WatchPreview} from '@/sections/demo/watch-card';
import {Button} from '@/ui/themed/button';
import Link from 'next/link';
import {DashboardPageLayout} from '../../_layout';
import {FilterSelect} from '../../_components/filter';

const Title = () => {
  return (
    <div className="flex w-full flex-col sm:gap-5 gap-[8px]">
      <p className="tracking-tighter sm:leading-7 leading-[42px]">Sell watches</p>

      <div className="flex sm:gap-4 gap-2 font-normal text-sm text-nowrap">
        <Link
          href={'/stock'}
          className="sm:w-fit w-full"
        >
          <Button
            size="sm"
            className="bg-themed-black-primary  gap-[10px] text-white rounded-full w-full sm:w-fit flex items-center"
          >
            <PlusIcon className="w-6 h-6" />
            Add watch
          </Button>
        </Link>

        <Link
          href={'/import'}
          className="sm:w-fit w-full"
        >
          <Button
            size="sm"
            className="bg-[#D4D4D4]  text-themed-black-primary rounded-full w-full sm:w-fit"
          >
            Import from other platforms
          </Button>
        </Link>
      </div>
    </div>
  );
};
export default function Page() {
  return (
    <DashboardPageLayout title={<Title />}>
      <div className="h-fit w-full flex flex-col gap-8">
        <div className="space-y-[30px] hidden sm:block">
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
