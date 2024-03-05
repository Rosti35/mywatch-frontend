'use client';

import {TextField} from '@/ui/themed/fields/text';
import {WatchPreview} from '@/sections/demo/watch-card';
import {DashboardPageLayout} from '../../_layout';
import {FilterSelect} from '../../_components/filter';
import {Button} from '@/ui/themed/button';
import {FilterIcon} from '@/ui/common/icons/filter';
import {MicIcon} from '@/ui/common/icons/mic';
import {CameraIcon} from '@/ui/common/icons/camera';
import Link from 'next/link';

const Title = () => {
  return (
    <div className="flex w-full flex-wrap sm:flex-nowrap items-center gap-5">
      <span className="tracking-tighter text-nowrap">New watches for sale</span>
      <Link href="/settings/buying">
        <Button
          size="sm"
          className="sm:ml-auto font-medium px-5 text-nowrap flex items-center justify-center gap-[10px]"
        >
          <FilterIcon className="w-6 h-6" /> Set up selection
        </Button>
      </Link>
    </div>
  );
};
export default function Page() {
  return (
    <div className="px-4 pb-4 lg:pb-4 lg:pl-[22px] lg:pr-[40px] lg:pt-[42px]">
      <DashboardPageLayout title={<Title />}>
        <div className="h-fit w-full flex flex-col gap-8">
          <div className="space-y-[30px] hidden sm:block">
            <div className="w-full h-fit relative flex flex-col gap-[14px]">
              <div className="flex w-full bg-white h-[60px] items-center rounded-xl overflow-hidden">
                <input
                  className={
                    'w-full outline-none p-5 text-sm placeholder:text-ellipsis placeholder:overflow-hidden placeholder:text-[#262626]'
                  }
                  placeholder="Find the model"
                />

                <div className="ml-auto flex py-5 pr-5 gap-5 text-themed-black-primary">
                  <MicIcon className="w-6 h-6" />
                  <CameraIcon className="w-6 h-6" />
                </div>
              </div>
              <div className="gap-[14px] flex">
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
