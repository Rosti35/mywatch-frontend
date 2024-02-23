'use client';

import {DashboardPageLayout} from '../_layout';
import {RatingBadge} from '@/sections/demo/watch-card';
import {PlusIcon} from '@/ui/common/icons/plus';
import Link from 'next/link';
import {TabRoot, TabTrigger, TabTriggerContainer} from '@/ui/themed/tabs';

import {TabContent} from '@/ui/common/tabs';

import {LineChart} from '@/ui/common/chart';
import {ArrowBottomLeftIcon, ArrowTopRightIcon} from '@radix-ui/react-icons';
import {CheckIcon} from '@/ui/common/icons/check';
import {cn} from '@/lib/cn';
import {useParams, useSearchParams} from 'next/navigation';

const DealerProfile = () => {
  return (
    <div className="flex h-20 gap-5 items-center">
      <div className="h-20 w-20 rounded-full bg-blue-500" />

      <div className="flex flex-col justify-center">
        <p className="text-lg font-bold">Ineichen Zuriсh</p>

        <p className="text-sm flex gap-5 font-normal leading-6">
          Out premium dealer <RatingBadge />
          <span className="text-themed-grey-400">Since 2023</span>
        </p>
      </div>
    </div>
  );
};

const Row1 = () => (
  <div className="flex gap-5 w-full min-h-[137px]">
    <div className="p-[30px] rounded-3xl w-full bg-themed-grey-100 flex">
      <div className="flex flex-col gap-4">
        <p>My Stock</p>
        <p className="mt-auto text-lg font-bold">12</p>
      </div>
      <button className="bg-themed-black-primary ml-auto my-auto text-white rounded-full w-[50px] h-[50px] items-center flex justify-center">
        <PlusIcon className="w-6 h-6" />
      </button>
    </div>
    <div className="p-[30px] gap-[16px] rounded-3xl w-full bg-themed-grey-100 flex flex-col">
      <p>My active sales</p>
      <p className="mt-auto flex items-center gap-[14px]">
        <span className="text-lg font-bold">356</span>
        <span className="rounded-full border border-themed-black-primary h-fit px-4 leading-5 py-[5px]">
          10 replies
        </span>
        <span className="font-bold text-[14px] rounded-full w-[30px] h-6 bg-green-500 text-white flex items-center justify-center">
          +2
        </span>
      </p>
    </div>
  </div>
);

const data: [number, number][] = Array.from(Array(4).keys()).map(i => [
  i,
  Math.round(Math.random() * 100),
]);

const Row2 = () => (
  <div className="flex gap-5 w-full  h-full max-h-[208px]">
    <div className="p-[30px] rounded-3xl w-full bg-themed-grey-100 flex flex-col">
      <div className="flex flex-col gap-4">
        <p>Watches on sale</p>
        <p className="text-lg font-bold flex gap-[14px] items-center">
          12 322
          <span className="font-bold text-[14px] rounded-full w-[30px] h-6 bg-green-500 text-white flex items-center justify-center">
            +2
          </span>
        </p>
      </div>
      <Link
        href="/#"
        className="mt-auto font-medium flex gap-[6px]"
      >
        Set up your buying preferences <ArrowTopRightIcon className="w-6 h-6" />
      </Link>
    </div>
    <div className="p-[30px] rounded-3xl w-full bg-themed-grey-100 flex flex-col">
      <div className="flex w-full">
        <div className="flex flex-col gap-4">
          <p>My partners</p>
          <p className="text-lg font-bold">98</p>
        </div>
        <button className="bg-themed-black-primary ml-auto my-auto text-white rounded-full w-[50px] h-[50px] items-center flex justify-center">
          <PlusIcon className="w-6 h-6" />
        </button>
      </div>
      <div className="w-full  flex mt-auto">
        <div className="relative flex ">
          {[1, 2, 3, 4, 5].map((k, i) => {
            return (
              <div
                className="w-[40px] h-[40px] border border-white rounded-full bg-themed-black-primary"
                style={{transform: `translateX(-${i * 20}px)`}}
                key={k}
              />
            );
          })}
        </div>
        <Link
          href="/#"
          className="ml-auto font-medium text-nowrap flex h-fit mt-auto items-center gap-[6px]"
        >
          Black list <ArrowTopRightIcon className="w-6 h-6" />
        </Link>
      </div>
    </div>
    <div className="p-[30px] rounded-3xl w-full bg-themed-black-primary text-white flex">
      <div className="flex flex-col gap-4">
        <p className="font-bold text-[22px] leading-5">Invite your trusted partners</p>
        <p className="leading-5 font-light">
          Start making quick, comfortable convenient deals with no fee
        </p>
        <button className="rounded-full mt-auto bg-themed-grey-100 text-themed-black-primary w-fit px-6 leading-5 min-h-[50px]">
          Sent invintation
        </button>
      </div>
    </div>
  </div>
);

const steps = [
  {
    completed: true,
    description: 'Complete company profile',
  },
  {
    completed: false,
    description: 'Upload verification documents',
  },
  {
    completed: false,
    description: 'Add your first watch for sale',
  },
  {
    completed: false,
    description: 'Set up your buying preferences',
  },
  {
    completed: false,
    description: 'View offers from dealers',
  },
];
export default function Page() {
  const params = useSearchParams();

  const newUser = Boolean(params.get('new'));
  return (
    <DashboardPageLayout title={<DealerProfile />}>
      <div className="flex gap-5 flex-col h-full">
        {newUser ? (
          <div className="flex w-full  min-h-[261px] gap-[20px] text-white p-[30px] bg-[#89A4B7] rounded-3xl ">
            <div className=" justify-between flex flex-col w-full">
              <p className="font-bold text-lg mb-auto h-[41px] tracking-tight">
                Complete the boarding to mywatch
              </p>

              <div className="flex gap-4 mt-auto w-full">
                {steps.map(({completed, description}, i) => {
                  return (
                    <div
                      key={i}
                      className="h-[140px] text-wrap w-full rounded-3xl bg-white/10 p-[20px] flex flex-col"
                    >
                      {completed ? (
                        <CheckIcon className="w-6 h-6 bg-green-600 rounded-full" />
                      ) : (
                        <div className="w-6 h-6 border border-white rounded-full mb-auto flex items-center justify-center">
                          {i + 1}
                        </div>
                      )}
                      <p
                        className={cn(
                          `text-wrap mt-auto text-[14px] text-left  `,
                          completed && 'line-through',
                        )}
                      >
                        {description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="ml-auto p-6 bg-themed-black-primary max-w-[325px] w-full rounded-3xl h-full flex flex-col">
              <p className="text-md font-bold">I have an invitation</p>
              <p>This will instantly open access to all mywatch services</p>
              <div className="bg-themed-grey-100 w-full rounded-full flex mt-auto h-[54px] pl-4 items-center">
                <input
                  type="text"
                  placeholder="Partner key"
                  className="bg-transparent outline-none text-themed-black-primary h-full w-full placeholder:text-themed-black-primary"
                />
                <button className="px-6 rounded-full h-full bg-themed-black-primary border-[2px] border-themed-grey-100">
                  Check
                </button>
              </div>
            </div>
          </div>
        ) : null}
        <Row1 />

        <Row2 />
        <TabRoot
          defaultValue="day"
          className="flex gap-5 flex-row w-full flex-1 min-h-[300px]"
        >
          <div className="p-[30px] rounded-3xl gap-5 h-full w-full flex-col bg-themed-grey-100 flex">
            <div className="flex w-full">
              <div className="flex flex-col w-full gap-4">
                <p>Market pulse</p>
                <p className="flex gap-6 text-lg font-bold">
                  569 123 $
                  <span className="text-sm font-medium mt-auto text-green-500 flex items-center justify-center gap-1">
                    <ArrowTopRightIcon className="w-6 h-6" />
                    12 545 $
                  </span>
                </p>
              </div>

              <div className="ml-auto max-w-[200px] flex w-full">
                <TabTriggerContainer className="h-fit w-full p-1">
                  <TabTrigger
                    value="day"
                    className="min-h-[30px]"
                  >
                    day
                  </TabTrigger>
                  <TabTrigger
                    value="month"
                    className="min-h-[30px]"
                  >
                    month
                  </TabTrigger>
                </TabTriggerContainer>
              </div>

              {/* <LineChart /> */}
            </div>
            <TabContent
              value="day"
              className="h-full flex-1 w-full"
            >
              <LineChart data={data} />
            </TabContent>
          </div>
          <div className="p-[30px] gap-7 rounded-3xl w-full h-full bg-themed-grey-100 flex flex-col">
            <p className="flex gap-4 items-center">
              <span className="text-[22px] font-bold leading-7">Chats</span>

              <span className="font-bold items-center justify-center text-[14px] flex bg-red-500 text-white rounded-full w-[30px] h-6">
                +2
              </span>
              <Link
                href="/"
                className="ml-auto flex items-center gap-2"
              >
                All messages <ArrowTopRightIcon className="w-6 h-6" />
              </Link>
            </p>
            <div className="flex h-full items-center flex-col gap-[14px]">
              {[1, 2, 3].map(i => {
                return (
                  <div
                    key={i}
                    className="flex gap-[14px] w-full items-center"
                  >
                    <div className="w-[48px] h-[48px] rounded-full bg-zinc-700" />
                    <div className="flex flex-col justify-center gap-1">
                      <p className="leading-5 font-medium">Mywatch</p>
                      <p className="leading-4 text-themed-grey-500 text-[14px]">
                        Hi! Welcome to mywatch
                      </p>
                    </div>
                    <span className="ml-auto text-themed-grey-400 text-[14px]">10:45</span>
                  </div>
                );
              })}
            </div>
          </div>
        </TabRoot>
      </div>
    </DashboardPageLayout>
  );
}
