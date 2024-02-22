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
    <div className="flex w-full items-center">
      Add watch to stock
      <button className="ml-auto text-sm font-medium px-5 rounded-full bg-themed-grey-300">
        Import from other platforms
      </button>
    </div>
  );
};
export default function Page() {
  return (
    <div>
      <DashboardPageLayout title={<Title />}>
        <div className="h-fit w-full flex flex-col gap-5 pr-[40px] pb-[40px]">
          <div className="space-y-[30px]">
            <div className="w-full h-fit relative flex flex-col gap-[14px]">
              <div className="flex gap-[14px]">
                <Select
                  options={[]}
                  placeholder="Brand & model"
                />
                <Select
                  options={[]}
                  placeholder="Brand & model"
                />
                <Select
                  options={[]}
                  placeholder="Brand & model"
                />
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
