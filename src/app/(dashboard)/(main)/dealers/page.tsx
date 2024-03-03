'use client';

import {Dealer, sampleDealer} from '@/fake';
import {TabContent, TabRoot, TabTriggerWithBadge} from '@/ui/themed/tabs';
import Link from 'next/link';
import {FlagImage} from 'react-international-phone';
import {TableHeader, TableRow} from '@/ui/common/table';
import {Button} from '@/ui/themed/button';
import {PlusIcon} from '@/ui/common/icons/plus';
import {CheckIcon} from '@/ui/common/icons/check';
import {PropsWithChildren} from 'react';
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from '@/ui/common/dialog';
import * as RadioGroup from '@radix-ui/react-radio-group';
import {RatingBadge} from '@/sections/demo/watch-card';
import {FilterSelect} from '../../_components/filter';
import {DashboardPageLayout, Title} from '../../_layout';

const RadioGroupDemo = () => (
  <form>
    <RadioGroup.Root
      className="flex flex-col gap-2.5"
      defaultValue="default"
    >
      <div className="flex items-center">
        <RadioGroup.Item
          className="w-6 h-6 rounded-full outline-none cursor-default border border-themed-grey-300"
          value="default"
          id="r1"
        >
          <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-3 after:h-3 after:rounded-[50%] after:bg-themed-black-primary" />
        </RadioGroup.Item>
        <label
          className="text-black text-[15px] leading-none pl-[15px]"
          htmlFor="r1"
        >
          Default
        </label>
      </div>
      <div className="flex items-center">
        <RadioGroup.Item
          className="w-6 h-6 rounded-full outline-none cursor-default border border-themed-grey-300"
          value="offense"
          id="r1"
        >
          <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-3 after:h-3 after:rounded-[50%] after:bg-themed-black-primary" />
        </RadioGroup.Item>
        <label
          className="text-black text-[15px] leading-none pl-[15px]"
          htmlFor="r1"
        >
          Offense
        </label>
      </div>
      <div className="flex items-center">
        <RadioGroup.Item
          className="w-6 h-6 rounded-full outline-none cursor-default border border-themed-grey-300"
          value="compact"
          id="r3"
        >
          <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-3 after:h-3 after:rounded-[50%] after:bg-themed-black-primary" />
        </RadioGroup.Item>
        <label
          className="text-black text-[15px] leading-none pl-[15px]"
          htmlFor="r3"
        >
          Compact
        </label>
      </div>
    </RadioGroup.Root>
  </form>
);
const DealerProfile = () => {
  return (
    <div className="flex h-20 gap-5 items-center">
      <div className="h-20 w-20 rounded-full bg-blue-500" />

      <div className="flex flex-col justify-center">
        <p className="text-lg font-bold leading-10 tracking-tight">Ineichen Zuriсh</p>

        <p className="text-sm flex gap-[16px] mt-[1px] font-normal leading-6">
          <span className="leading-5 tracking-wide flex items-center gap-[10px]">
            <CheckIcon className="w-[18px] text-white h-[18px] bg-blue-400 rounded-full" />
            Verfied dealer
          </span>
          <span className="text-themed-grey-400">Since 2023</span>
        </p>
      </div>
    </div>
  );
};

function AddToBlacklistDialog({children}: PropsWithChildren) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[430px] bg-themed-grey-100 gap-[30px] rounded-[32px] p-[40px]">
        <DialogHeader>
          <DialogTitle>
            <DealerProfile />
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-[16px]">
          <p className="font-semibold text-[20px]">Select the reason for blocking</p>
          <RadioGroupDemo />

          <Button className="mt-6 bg-red-600 text-white">Block user</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

const Filters = () => (
  <div className="sm:flex hidden w-full gap-4 items-stretch flex-1">
    <FilterSelect>Location</FilterSelect>
    <FilterSelect>Rating</FilterSelect>
    <FilterSelect>Sort by</FilterSelect>
  </div>
);

const DealerCatalogItemMobile = () => {
  return (
    <div className="w-full border-b border-b-[#D4D4D4] last:border-b-0 first:pt-0 py-[20px] flex h-fit">
      <div className="flex gap-[10px] flex-col">
        <Link
          href={`dealers/${sampleDealer.id}`}
          className="font-bold flex items-center tracking-wide text-sm w-full hover:underline gap-1"
        >
          {sampleDealer.name}
          <CheckIcon className="w-4 h-4 rounded-full bg-themed-black-primary text-white" />
        </Link>

        <p className="w-full text-xs text-nowrap sm:text-sm flex items-center gap-2">
          <FlagImage iso2={sampleDealer.iso2} />
          {sampleDealer.location}

          <RatingBadge />
        </p>

        <p>Current stock {sampleDealer.stock}</p>
      </div>

      <div className="flex flex-col ml-auto">
        <Button
          size="sm"
          className="mt-auto text-sm sm:px-5 px-[14px] sm:text-[14px]"
        >
          <PlusIcon className="w-6 h-6" />
        </Button>

        <Button
          size="sm"
          className="mt-auto text-sm bg-white text-red-500 sm:px-5 px-[14px] sm:text-[14px]"
        >
          Block
        </Button>
      </div>
    </div>
  );
};

type DealerCatalogItemProps = {} & Dealer;
const DealerCatalogItem = ({name, location, iso2, stock, id}: DealerCatalogItemProps) => {
  return (
    <TableRow>
      <div className="w-full bg-themed-grey-200 flex items-center">
        <Link
          href={`dealers/${id}`}
          className="font-bold flex items-center tracking-wide w-full hover:underline gap-1"
        >
          {name}
          <CheckIcon className="w-4 h-4 rounded-full bg-themed-black-primary text-white" />
        </Link>
      </div>
      <div className="w-full bg-themed-grey-200 flex items-center">
        <p className="w-full">
          <RatingBadge />
        </p>
      </div>
      <div className="w-full bg-themed-grey-200 flex items-center">
        <p className="w-full flex items-center gap-2">
          <FlagImage iso2={iso2} />
          {location}
        </p>
      </div>
      <div className="w-full bg-themed-grey-200 flex items-center">
        <p className="w-full">{stock}</p>
      </div>
      <div className="w-full bg-red-900  gap-3 flex items-center">
        <Button
          size="md"
          className="h-[50px] min-w-[50px] flex items-center justify-center p-0"
        >
          <PlusIcon className="w-6 h-6 m-auto" />
        </Button>
        <AddToBlacklistDialog>
          <Button
            size="md"
            className="bg-white text-red-500 hover:bg-red-200"
          >
            Block
          </Button>
        </AddToBlacklistDialog>
      </div>
    </TableRow>
  );
};

export default function Page() {
  return (
    <div className="w-full h-full sm:pt-[40px] lg:px-6 flex flex-col">
      <span className=" sm:px-0 px-4">
        <Title>Out trusted dealers</Title>
      </span>
      <div
        title="Out trusted dealers"
        className="flex flex-col w-full h-full"
      >
        <TabRoot
          defaultValue="dealers"
          className="gap-[30px] h-full w-full overflow-x-hidden"
        >
          <div className="overflow-x-auto overflow-y-hidden">
            <div className="sm:w-fit w-full px-4 md:px-0 items-center whitespace-nowrap h-[80px] gap-4 flex">
              <TabTriggerWithBadge
                value="dealers"
                count={0}
              >
                All dealers
              </TabTriggerWithBadge>
              <TabTriggerWithBadge
                value="partners"
                count={3}
              >
                My partners
              </TabTriggerWithBadge>
              <TabTriggerWithBadge
                value="black_list"
                count={3}
              >
                Black list
              </TabTriggerWithBadge>
            </div>
          </div>

          <TabContent
            disableTransition
            value="dealers"
            className="w-full h-full"
          >
            <div className="flex flex-col w-full h-full gap-[16px]">
              <Filters />

              <div className="md:block hidden">
                <TableHeader>
                  <span className="mt-1">Dealer</span>
                  <span className="mt-1">Rating</span>
                  <span className="mt-1">Location</span>
                  <span className="mt-1">Current stock</span>
                </TableHeader>

                <div>
                  <DealerCatalogItem {...sampleDealer} />
                  <DealerCatalogItem {...sampleDealer} />
                  <DealerCatalogItem {...sampleDealer} />
                  <DealerCatalogItem {...sampleDealer} />
                </div>
              </div>

              <div className="md:hidden w-full h-full flex flex-col px-4">
                <DealerCatalogItemMobile />
                <DealerCatalogItemMobile />
                <DealerCatalogItemMobile />
                <DealerCatalogItemMobile />
                <DealerCatalogItemMobile />
              </div>
            </div>
          </TabContent>
        </TabRoot>
      </div>
    </div>
  );
}
