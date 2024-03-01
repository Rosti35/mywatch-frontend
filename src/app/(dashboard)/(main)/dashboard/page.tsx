'use client';

import {RatingBadge} from '@/sections/demo/watch-card';
import {PlusIcon} from '@/ui/common/icons/plus';
import Link from 'next/link';
import {TabRoot, TabTrigger, TabTriggerContainer} from '@/ui/themed/tabs';

import {TabContent} from '@/ui/common/tabs';

import {LineChart} from '@/ui/common/chart';
import {ArrowTopRightIcon} from '@radix-ui/react-icons';
import {CheckIcon} from '@/ui/common/icons/check';
import {cn} from '@/lib/cn';
import {useSearchParams} from 'next/navigation';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/ui/common/dialog';
import {Button} from '@/ui/themed/button';
import {HTMLAttributes, PropsWithChildren} from 'react';
import {PhoneField} from '@/ui/themed/fields/phone';
import {DashboardPageLayout} from '../../_layout';
import {Message} from '../../_components/message';

const data: [number, number][] = Array.from(Array(4).keys()).map(i => [
  i,
  Math.round(Math.random() * 100),
]);

const DashboardCard = ({children, className, ...props}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        'md:p-[30px] p-4 sm:rounded-3xl rounded-[20px] w-full bg-themed-grey-100 ',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const DealerProfile = () => {
  return (
    <div className="flex sm:gap-5 gap-[14px] items-center">
      <div className="sm:max-h-20 sm:max-w-20 max-w-[50px] my-auto w-full h-auto aspect-square rounded-full bg-blue-500" />

      <div className="flex flex-col sm:max-h-auto max-h-[50px]">
        <p className="sm:text-lg text-[18px] font-bold leading-6 tracking-tight">Ineichen Zuriсh</p>

        <p className="flex sm:gap-[16px] gap-1 leading-6 font-normal sm:text-sm text-xs text-nowrap">
          <span className="tracking-wide leading-3 flex items-center gap-[10px]">
            <CheckIcon className="sm:w-5 sm:h-5 h-4 w-4 aspect-square text-white bg-blue-400 rounded-full" />
            Verfied dealer
          </span>
          <RatingBadge className="sm:w-5 sm:h-5 h-4 w-4 aspect-square" />
          <span className="text-themed-grey-400 sm:block hidden">Since 2023</span>
        </p>
      </div>
    </div>
  );
};

function SendInvitationDialog({children}: PropsWithChildren) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-themed-grey-100 gap-[30px] rounded-[32px] p-[40px]">
        <DialogHeader>
          <DialogTitle>Invite your trusted partners</DialogTitle>
          <DialogDescription>
            Just send an invitation and start making quick, convenient transactions
          </DialogDescription>
        </DialogHeader>

        <TabRoot
          defaultValue={'whatsapp'}
          className="flex flex-col gap-[16px]"
        >
          <TabTriggerContainer className="bg-themed-grey-200">
            <TabTrigger value="whatsapp">Whatsapp</TabTrigger>
            <TabTrigger value="tg">Telegram</TabTrigger>
            <TabTrigger value="sms">SMS</TabTrigger>
            <TabTrigger value="email">Email</TabTrigger>
          </TabTriggerContainer>
          <TabContent value="whatsapp">
            <PhoneField placeholder="Phone" />
          </TabContent>

          <Button className="w-full">Send invitation code</Button>
        </TabRoot>
      </DialogContent>
    </Dialog>
  );
}

const StockStatus = () => (
  <DashboardCard className="flex">
    <Link
      href="/stock"
      className="flex flex-col gap-2"
    >
      <p className="leading-5 md:text-sm text-[14px] text-nowrap">My stock</p>
      <p className="mt-auto md:text-lg text-md font-bold">12</p>
    </Link>
    <button className="bg-themed-black-primary ml-auto my-auto text-white rounded-full w-[50px] h-[50px] items-center flex justify-center">
      <Link href="/stock">
        <PlusIcon className="w-6 h-6" />
      </Link>
    </button>
  </DashboardCard>
);

const SalesStatus = () => (
  <DashboardCard className="gap-[10px] flex flex-col">
    <Link
      href="/sell"
      className="leading-5 md:text-sm text-[14px]"
    >
      My active sales
    </Link>
    <p className="mt-auto flex items-center justify-between sm:justify-normal sm:gap-[14px]">
      <span className="md:text-lg text-md font-bold">10</span>
      <span className="rounded-full border text-nowrap border-themed-black-primary md:text-sm text-xs h-fit px-[10px] leading-5 py-[4px]">
        10 replies
      </span>
      <span className="font-bold text-[14px] rounded-full w-[30px] h-6 bg-green-500 text-white flex items-center justify-center">
        +2
      </span>
    </p>
  </DashboardCard>
);
type UserStep = {
  completed: boolean;
  description: string;
};
type NewUserStepperProps = {
  steps: UserStep[];
};
const NewUserStepper = ({steps}: NewUserStepperProps) => {
  return (
    <div className="flex sm:px-[30px] p-4 overflow-auto gap-4 mt-auto w-full">
      {steps.map(({completed, description}, i) => {
        return (
          <div
            key={i}
            className="lg:h-[140px] h-[120px] min-w-[120px] text-wrap w-full rounded-3xl bg-white/10 p-[20px] flex flex-col"
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
                `text-wrap mt-auto text-[14px] leading-[18px] text-left  `,
                completed && 'line-through',
              )}
            >
              {description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

const AvatarsRow = () => (
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
);

const SellsStatus = () => (
  <DashboardCard className="bg-themed-grey-100 flex flex-col">
    <div className="flex flex-col gap-4">
      <Link
        href="/buy"
        className="leading-5 md:text-sm text-xs tracking-wide"
      >
        Watches on sale
      </Link>
      <p className="sm:text-lg text-md font-bold flex gap-[18px] sm:leading-10 leading-5 items-center">
        12 322
        <span className="font-bold text-[14px] rounded-full w-[30px] h-6 bg-green-500 text-white flex items-center justify-center">
          +2
        </span>
      </p>
    </div>
    <Link
      href="/settings/buying"
      className="mt-auto font-normal tracking-wide sm:text-[15px] text-xs items-center sm:leading-none leading-10 flex gap-[6px]"
    >
      Set up your buying preferences <ArrowTopRightIcon className="w-6 h-6" />
    </Link>
  </DashboardCard>
);

const PartnersStatus = () => (
  <DashboardCard className="flex flex-col">
    <div className="flex w-full">
      <div className="flex flex-col gap-4">
        <Link
          className="leading-4 tracking-wide"
          href="/dealers"
        >
          My partners
        </Link>
        <p className="text-lg font-bold">98</p>
      </div>
      <button className="bg-themed-black-primary ml-auto  text-white rounded-full w-[50px] h-[50px] items-center flex justify-center">
        <PlusIcon className="w-6 h-6" />
      </button>
    </div>
    <div className="w-full  flex mt-auto">
      <AvatarsRow />
      <Link
        href="/#"
        className="ml-auto font-medium text-nowrap flex h-fit mt-auto items-center gap-[6px]"
      >
        Black list <ArrowTopRightIcon className="w-6 h-6" />
      </Link>
    </div>
  </DashboardCard>
);

const SendInvitationCard = () => (
  <DashboardCard className="bg-themed-black-primary text-white flex">
    <div className="flex flex-col gap-4">
      <p className="font-medium text-[22px] leading-6 tracking-[-0.02rem]">
        Invite your trusted partners
      </p>
      <p className="leading-5 font-light text-themed-grey-300">
        Start making quick, comfortable convenient deals with no fee
      </p>
      <SendInvitationDialog>
        <Button className="mt-auto bg-themed-grey-100 text-themed-black-primary w-fit">
          Send invintation
        </Button>
      </SendInvitationDialog>
    </div>
  </DashboardCard>
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

const Boarding = () => (
  <div className="justify-between flex flex-col w-full">
    <DashboardCard className="bg-transparent">
      <p className="font-bold text-lg leading-10 tracking-tight">
        Complete the boarding to mywatch
      </p>
    </DashboardCard>

    <NewUserStepper steps={steps} />
  </div>
);

const InvitationCard = () => (
  <DashboardCard className="bg-transparent">
    <div className="ml-auto p-6 bg-themed-black-primary w-full rounded-3xl h-full flex flex-col">
      <p className="text-md font-bold leading-8 tracking-[-0.6px]">I have an invitation</p>
      <p className="text-themed-grey-400 leading-5 my-auto mt-[6px]">
        This will instantly open access to all mywatch services
      </p>
      <div className="bg-themed-grey-100 mt-4 w-full rounded-full mb-1 flex h-[54px] pl-4 items-center">
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
  </DashboardCard>
);

export default function Page() {
  const params = useSearchParams();

  const newUser = Boolean(params.get('new'));

  return (
    <DashboardPageLayout title={<DealerProfile />}>
      <div className="flex sm:gap-5 gap-2 flex-col h-auto">
        {newUser ? (
          <div className="flex lg:flex-nowrap flex-wrap w-full h-fit md:gap-[20px] gap-2 text-white bg-[#89A4B7] rounded-[32px] ">
            <Boarding />
            <InvitationCard />
          </div>
        ) : null}
        <div className="flex md:gap-5 w-full md:min-h-[137px] gap-2 max-h-[90px] md:max-h-[137px]">
          <StockStatus />
          <SalesStatus />
        </div>

        <div className="flex lg:flex-nowrap flex-wrap sm:gap-5 gap-2 w-full  h-full ">
          <SellsStatus />
          <PartnersStatus />
          {newUser ? null : <SendInvitationCard />}
        </div>
        <TabRoot
          defaultValue="day"
          className="grid md:grid-cols-2 grid-cols-1 md:gap-5 gap-2 h-full flex-wrap w-full flex-1"
        >
          <DashboardCard className="min-h-[240px] gap-5 h-full w-full flex-col flex">
            <div className="flex w-full h-fit text-nowrap sm:flex-nowrap flex-wrap">
              <div className="flex flex-col w-full gap-4">
                <p className="leading-4 tracking-wide">Market pulse</p>
                <p className="flex gap-6 md:text-lg text-md font-bold">
                  <span className="tracking-tightest">569 123 $</span>
                  <span className="md:text-sm text-xs font-medium mt-auto mb-1 tracking-wide text-green-500 flex items-center justify-center gap-1">
                    <ArrowTopRightIcon className="w-6 h-6" />
                    12 545 $
                  </span>
                </p>
              </div>

              <div className="ml-auto max-w-[200px] flex w-full">
                <TabTriggerContainer className="h-fit bg-[#e5e5e5] w-full p-1">
                  <TabTrigger
                    value="day"
                    className="text-sm md:text-xs min-h-[30px]"
                    activeClassname="font-medium"
                  >
                    Day
                  </TabTrigger>
                  <TabTrigger
                    value="month"
                    className="text-sm md:text-xs min-h-[30px]"
                    activeClassname="font-medium"
                  >
                    Month
                  </TabTrigger>
                </TabTriggerContainer>
              </div>
            </div>
            <TabContent
              value="day"
              className="h-full  w-full flex-1 items-stretch"
            >
              <LineChart data={data} />
            </TabContent>
          </DashboardCard>
          <DashboardCard className="gap-6 w-full h-full flex flex-col">
            <p className="flex gap-4 items-center">
              <span className="text-[22px] font-bold leading-3">Chats</span>

              <span className="font-bold items-center justify-center text-[14px] flex bg-red-500 text-white rounded-full w-[30px] h-6">
                +2
              </span>
              <Link
                href="/"
                className="ml-auto tracking-tight flex items-center gap-2"
              >
                All messages <ArrowTopRightIcon className="w-6 h-6" />
              </Link>
            </p>
            <div className="flex h-full items-center flex-col gap-[14px]">
              {[1, 2, 3].map(i => {
                return <Message key={i} />;
              })}
            </div>
          </DashboardCard>
        </TabRoot>
      </div>
    </DashboardPageLayout>
  );
}