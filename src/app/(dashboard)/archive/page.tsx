'use client';

import * as Toggle from '@radix-ui/react-toggle';
import {BrandItemProps, BrandList} from '@/sections/brand/brand-list';
import {DashboardPageLayout} from '../_layout';
import {SearchContent, SearchField, SearchRoot} from '@/ui/themed/search';
import Link from 'next/link';
import {PlusIcon} from '@/ui/common/icons/plus';
import {TextField} from '@/ui/themed/fields/text';
import {Select} from '@/ui/themed/fields/select';
import {WatchDetails, WatchPreview} from '@/sections/demo/watch-card';
import {TabContent, TabRoot} from '@/ui/common/tabs';
import {TabTriggerWithBadge} from '@/ui/themed/tabs';
import {DealerBadge} from '@/ui/themed/dealer/badge';
import {MessageIcon} from '@/ui/common/icons/message';
import {TimeIcon} from '@/ui/common/icons/time';

export default function Page() {
  return (
    <DashboardPageLayout title="Archive">
      <TabRoot
        defaultValue="sales"
        className="gap-7 flex flex-col pb-[40px]"
      >
        <div className="w-fit flex gap-[14px] text-nowrap">
          <TabTriggerWithBadge
            count={3}
            value="sales"
          >
            My sales
          </TabTriggerWithBadge>
          <TabTriggerWithBadge
            count={3}
            value="purchases"
          >
            My purchases
          </TabTriggerWithBadge>
        </div>
        <TabContent
          value="sales"
          disableTransition
        >
          <div className="h-fit w-full flex flex-col gap-5">
            <div className=" bg-themed-grey-100 p-5 rounded-3xl flex">
              <div className="min-w-[240px] h-[240px] rounded-3xl bg-zinc-500" />

              <div className="flex flex-col px-6 py-6 border-r w-full border-r-themed-grey-200">
                <Link
                  href="/archive/1"
                  className="space-y-1"
                >
                  <p>Rolex</p>
                  <p className="font-bold text-[20px]">Daytona Stainless Steel Black Dial</p>
                </Link>

                <WatchDetails />

                <div className="flex mt-auto gap-5">
                  <div className="mt-4 flex items-center gap-3">
                    <div className="w-[40px] h-[40px] rounded-full bg-blue-800" />
                    <div className="leading-6 h-full flex flex-col justify-center gap-1">
                      <p className="font-bold">Ineichen Zuriсh</p>
                      <p className="leading-4 text-[14px]">Buyer</p>
                    </div>
                  </div>
                  <div className="mt-auto flex items-center gap-3">
                    <button className="bg-white max-w-[200px] px-4 rounded-full py-2 flex items-center gap-[10px]">
                      <MessageIcon className="w-6 h-6 text-black" />4
                    </button>
                  </div>
                </div>
              </div>
              <div className="pl-[30px] text-nowrap min-w-[230px] pr-[30px] flex flex-col">
                <div>
                  <p className="text-[14px]">Price</p>
                  <p className="text-[26px] font-semibold">35 000 $</p>
                </div>

                <div className="mt-[10px] flex items-center gap-6">
                  <p className="flex flex-col gap-1">
                    <span className="text-[14px] leading-4 text-themed-grey-400">Date</span>
                    <span className="leading-5">10 dec 2023</span>
                  </p>
                  <p className="flex flex-col gap-1">
                    <span className="text-[14px] leading-4 text-themed-grey-400">Deal №</span>
                    <span className="leading-5">463-45</span>
                  </p>
                </div>

                <div className="mt-auto text-sm">
                  <p className="text-[14px]">Warehouse</p>
                  <p className="flex items-center gap-2">Some warehouse</p>
                </div>
              </div>
            </div>
          </div>
        </TabContent>
      </TabRoot>
    </DashboardPageLayout>
  );
}
