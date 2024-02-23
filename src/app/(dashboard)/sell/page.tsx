'use client';

import * as Toggle from '@radix-ui/react-toggle';
import {BrandItemProps, BrandList} from '@/sections/brand/brand-list';
import {DashboardPageLayout} from '../_layout';
import {SearchContent, SearchField, SearchRoot} from '@/ui/themed/search';
import Link from 'next/link';
import {PlusIcon} from '@/ui/common/icons/plus';
import {TextField} from '@/ui/themed/fields/text';
import {Select} from '@/ui/themed/fields/select';
import {WatchPreview} from '@/sections/demo/watch-card';

const Title = () => {
  return (
    <div className="flex w-full flex-col gap-5">
      <p>Sell watches</p>

      <div className="flex gap-4 font-normal text-sm">
        <button className="bg-themed-black-primary gap-[10px] text-white rounded-full h-10 px-5 flex items-center">
          <PlusIcon className="w-6 h-6" />
          Add watch
        </button>
        <button className="bg-[#D4D4D4] text-black rounded-full h-10 px-5">
          Import from other platforms
        </button>
      </div>
    </div>
  );
};
export default function Page() {
  return (
    <DashboardPageLayout title={<Title />}>
      <div className="h-fit w-full flex flex-col gap-5">
        <div className="space-y-[30px]">
          <div className="w-full h-fit relative flex flex-col gap-[14px]">
            <div className="flex gap-[14px]">
              <Select
                options={[]}
                placeholder="Brand & model"
              />
              <Select
                options={[]}
                placeholder="Warehouse"
              />
              <Select
                options={[]}
                placeholder="Status"
              />
              <Select
                options={[]}
                placeholder="Sort"
              />
            </div>
          </div>
        </div>

        <WatchPreview sell />
        <WatchPreview sell />
        <WatchPreview sell />
      </div>
    </DashboardPageLayout>
  );
}
