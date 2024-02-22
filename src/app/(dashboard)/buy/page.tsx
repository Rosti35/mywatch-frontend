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
    <div>
      <DashboardPageLayout title={<Title />}>
        <div className="h-fit w-full flex flex-col gap-5">
          <div className="space-y-[30px]">
            <div className="w-full h-fit relative flex flex-col gap-[14px]">
              <TextField placeholder="Find the model you want to  add to your stock" />
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
