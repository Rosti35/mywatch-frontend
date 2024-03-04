'use client';

import {Dealer, sampleDealer} from '@/fake';
import {TabContent, TabRoot, TabTriggerWithBadge} from '@/ui/themed/tabs';
import Link from 'next/link';
import {FlagImage} from 'react-international-phone';
import {TableHeader, TableRow} from '@/ui/common/table';
import {Button} from '@/ui/themed/button';
import {PlusIcon} from '@/ui/common/icons/plus';
import {CheckIcon} from '@/ui/common/icons/check';
import {PropsWithChildren, useRef, useState} from 'react';
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from '@/ui/common/dialog';
import * as RadioGroup from '@radix-ui/react-radio-group';
import {RatingBadge} from '@/sections/demo/watch-card';
import {FilterSelect} from '../../_components/filter';
import {DashboardPageLayout, Title} from '../../_layout';
import {FilterIcon} from '@/ui/common/icons/filter';
import {useIsomorphicLayoutEffect} from '@/hooks/common/use-isomorphic-layout-effect';
import {AnimatePresence, motion} from 'framer-motion';

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
            Premium dealer
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
    <div className="w-full border-b border-b-[#D4D4D4] last:border-b-0 first:pt-0 py-[14px] flex h-fit">
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

        <p>
          <span className="text-[#737373]">Current stock</span> {sampleDealer.stock}
        </p>
      </div>

      <div className="flex flex-col justify-center gap-[7px] ml-auto">
        <Button
          size="sm"
          className="text-sm sm:px-5 text-white px-[14px] sm:text-[14px]"
        >
          <PlusIcon className="w-6 h-6" />
        </Button>

        <AddToBlacklistDialog>
          <Button
            size="sm"
            className="bg-white text-red-500 sm:px-5 px-[20px] text-[14px]"
          >
            Block
          </Button>
        </AddToBlacklistDialog>
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
      <div className="w-full gap-3 flex items-center">
        <button className="h-[50px] bg-themed-black-primary rounded-full min-w-[50px] text-white flex items-center justify-center p-0">
          <PlusIcon className="w-6 h-6 m-auto" />
        </button>
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
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  const handleWheel = (e: WheelEvent) => {
    setShow(e.deltaY > 0);
  };

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    element.addEventListener('wheel', handleWheel);
    return () => {
      element.removeEventListener('wheel', handleWheel);
    };
  });
  return (
    <div
      ref={ref}
      className="w-full h-full sm:pt-[40px] lg:pl-[23px] relative  flex flex-col"
    >
      <AnimatePresence>
        {show ? (
          <motion.div
            initial={{y: 100}}
            animate={{y: 0}}
            exit={{y: 100}}
            className="fixed w-full h-fit bottom-[68px] flex items-center justify-center"
          >
            <button className="bg-themed-grey-100 px-5 py-[10px] flex items-center rounded-full gap-[10px] text-nowrap m-6">
              <FilterIcon className="w-6 h-6" />
              Filter and sorting
            </button>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <span className=" sm:px-0 px-4">
        <Title>Our trusted dealers</Title>
      </span>
      <div
        title="Out trusted dealers"
        className="flex flex-col w-full h-full"
      >
        <TabRoot
          defaultValue="dealers"
          className="gap-[30px] h-full w-full"
        >
          <div className="sm:w-fit w-full h-full sm:[&>*]:h-[50px] [&>*]:h-[40px] overflow-auto px-4 md:px-0 items-center whitespace-nowrap sm:gap-[14px] gap-[10px] flex">
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

          <TabContent
            disableTransition
            value="dealers"
            className="w-full h-full "
          >
            <div className="flex flex-col lg:pr-[40px] w-full h-full gap-[16px]">
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
