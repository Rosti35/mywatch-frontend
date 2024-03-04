'use client';

import Link from 'next/link';
import {
  MessagesLink,
  Price,
  Warehouse,
  Warehouse as WarehousePreview,
  WatchDetails,
  WatchPreview,
} from '@/sections/demo/watch-card';
import {TabContent, TabRoot} from '@/ui/common/tabs';
import {TabTriggerWithBadge} from '@/ui/themed/tabs';
import {MessageIcon} from '@/ui/common/icons/message';
import {FlagImage, defaultCountries} from 'react-international-phone';
import {DashboardPageLayout} from '../../_layout';
import {DealerBadge} from '@/ui/themed/dealer/badge';

const Deal = () => (
  <div className={'lg:text-[16px] text-xs text-nowrap flex-row flex gap-[24px] [&>*]:leading-3'}>
    <div className="flex gap-[6px] flex-col ">
      <p className="text-themed-grey-600 sm:text-[14px] text-xs sm:leading-[4px]">Date</p>
      <p className="sm:leading-7">10 Dec 2023</p>
    </div>
    <div className="flex gap-[6px] flex-col">
      <p className="text-themed-grey-600 sm:text-[14px] text-xs sm:leading-[4px]">Deal</p>
      <p className="sm:leading-7">234-23</p>
    </div>
  </div>
);

const ArchiveItem = () => (
  <div className="bg-themed-grey-100 hidden sm:flex h-auto p-5 rounded-3xl">
    <div className="max-w-[240px] w-full my-auto h-fit aspect-square rounded-3xl bg-zinc-500" />

    <div className="flex flex-col w-full sm:gap-5 lg:px-6 px-2 lg:py-6 p-2 border-r  border-r-themed-grey-200">
      <Link
        href={'/stock'}
        className="space-y-1"
      >
        <p className="sm:leading-5">Rolex</p>
        <p className="font-bold text-[20px] sm:leading-9 tracking-tight">
          Daytona Stainless Steel Black Dial
        </p>
      </Link>

      <WatchDetails />

      <div className="mt-auto flex items-center gap-5">
        <div className="w-10 h-10 rounded-full bg-blue-800" />
        <div>
          <p className="tracking-wide">Ineichen Zuriсh</p>
          <p className="text-[#4B5563] text-[14px]">Buyer</p>
        </div>

        <div className="flex items-center gap-[14px]">
          <button className="bg-white max-w-[200px] px-4 rounded-full h-[40px] flex items-center gap-[10px]">
            <MessageIcon className="sm:w-6 sm:h-6 w-5 h-5 text-black" />
          </button>
        </div>
      </div>
    </div>

    <div className="max-w-[230px] w-full">
      <div className="pl-[30px] text-nowrap w-fit flex h-full flex-col">
        <Price />

        <div className="mt-[18px] flex items-center gap-2">
          <Deal />
        </div>

        <div className="mt-auto flex h-full">
          <Warehouse />
        </div>
      </div>
    </div>
  </div>
);

const ArchiveItemMobile = () => {
  return (
    <div className="flex flex-col bg-white rounded-[20px]   p-[10px] sm:hidden ">
      <div className="grid grid-cols-2 w-full h-full gap-[14px]">
        <div className="w-full flex flex-col h-full">
          <div className="w-full max-w-[150px] h-fit aspect-square rounded-3xl bg-zinc-500" />
        </div>

        <div className="w-full flex flex-col gap-2 h-full">
          <Link
            href="/sell/1"
            className="space-y-1"
          >
            <p className="text-xs">Rolex</p>
            <p className="font-bold text-[14px]">Daytona Stainless Steel Black Dial</p>
          </Link>

          <WatchDetails />

          <Price />
        </div>
      </div>

      <div className="flex flex-col w-full gap-4">
        <Deal />
        <div className="flex gap-4 w-full">
          <DealerBadge variant="sm" />
          <Warehouse />
        </div>
      </div>
    </div>
  );
};

export default function Page() {
  return (
    <div className="px-4 pb-4 lg:pb-4 lg:px-6 lg:pt-[40px]">
      <DashboardPageLayout title="Archive">
        <TabRoot
          defaultValue="sales"
          className="gap-7 flex flex-col"
        >
          <div className="w-fit flex gap-[14px] sm:[&>*]:h-[50px] [&>*]:h-[40px]  text-nowrap">
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
            <div className="sm:gap-5 gap-[10px] flex flex-col">
              <ArchiveItem />
              <ArchiveItemMobile />
              <ArchiveItem />
              <ArchiveItemMobile />
              <ArchiveItem />
              <ArchiveItemMobile />
              <ArchiveItem />
              <ArchiveItemMobile />
            </div>
          </TabContent>
        </TabRoot>
      </DashboardPageLayout>
    </div>
  );
}
