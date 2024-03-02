'use client';

import {RatingBadge} from '@/sections/demo/watch-card';

import Link from 'next/link';
import {TabRoot, TabTrigger, TabTriggerContainer} from '@/ui/themed/tabs';

import {TabContent} from '@/ui/common/tabs';

import {LineChart} from '@/ui/common/chart';
import {ArrowTopRightIcon} from '@radix-ui/react-icons';
import {CheckIcon} from '@/ui/common/icons/check';
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
import {PropsWithChildren, ReactNode} from 'react';
import {PhoneField} from '@/ui/themed/fields/phone';
import {DashboardPageLayout} from '../../_layout';
import {Message} from '../../_components/message';
import {
  AddButton,
  DashboardCardActivity,
  DashboardCardContent,
  DashboardCardRoot,
  DashboardCardTitle,
  DashboardTitleLink,
} from './_components';
import {Badge} from '@/ui/themed/typography';
import {NewUserStepper} from './_components/stepper';
import {
  DealerProfile,
  DealerProfileAvatar,
  DealerCompanyName,
  DealerVerification,
} from '@/ui/themed/dealer';

const data: [number, number][] = Array.from(Array(4).keys()).map(i => [
  i,
  Math.round(Math.random() * 100),
]);

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
  <DashboardCardRoot className="flex">
    <DashboardCardTitle>
      <DashboardCardActivity>
        <DashboardTitleLink href="/stock">
          <p className="leading-5 md:text-sm text-[14px] text-nowrap">My stock</p>
        </DashboardTitleLink>
        <p className="mt-auto md:text-lg text-md leading-none font-bold">12</p>
      </DashboardCardActivity>
      <AddButton />
    </DashboardCardTitle>
  </DashboardCardRoot>
);

const SalesStatus = () => (
  <DashboardCardRoot className="gap-[10px] flex flex-col">
    <DashboardCardTitle>
      <DashboardTitleLink href="/sell">My active sales</DashboardTitleLink>
    </DashboardCardTitle>
    <DashboardCardContent className=" flex items-center justify-between sm:justify-normal sm:gap-[14px]">
      <span className="md:text-lg text-md font-bold">10</span>
      <span className="rounded-full border text-nowrap border-themed-black-primary md:text-sm text-xs h-fit px-[10px] leading-5 py-[4px]">
        10 replies
      </span>
      <Badge>+2</Badge>
    </DashboardCardContent>
  </DashboardCardRoot>
);

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
  <DashboardCardRoot className="flex flex-col">
    <DashboardCardTitle>
      <DashboardCardActivity>
        <DashboardTitleLink href="/buy">Watches on sale</DashboardTitleLink>
        <p className="sm:text-lg text-md font-bold flex gap-[18px] sm:leading-10 leading-5 items-center">
          12 322
          <span className="font-bold text-[14px] rounded-full w-[30px] h-6 bg-green-500 text-white flex items-center justify-center">
            +2
          </span>
        </p>
      </DashboardCardActivity>
    </DashboardCardTitle>
    <Link
      href="/settings/buying"
      className="mt-auto font-normal tracking-wide sm:text-[15px] text-xs items-center sm:leading-none leading-10 flex gap-[6px]"
    >
      Set up your buying preferences <ArrowTopRightIcon className="w-6 h-6" />
    </Link>
  </DashboardCardRoot>
);

const PartnersStatus = () => (
  <DashboardCardRoot className="flex flex-col">
    <DashboardCardTitle>
      <DashboardCardActivity>
        <DashboardTitleLink href="/dealers">My partners</DashboardTitleLink>
        <p className="text-lg font-bold">98</p>
      </DashboardCardActivity>
      <AddButton />
    </DashboardCardTitle>

    <DashboardCardContent>
      <AvatarsRow />
      <Link
        href="/#"
        className="ml-auto font-medium text-nowrap flex h-fit mt-auto items-center gap-[6px]"
      >
        Black list <ArrowTopRightIcon className="w-6 h-6" />
      </Link>
    </DashboardCardContent>
  </DashboardCardRoot>
);

const SendInvitationCard = () => (
  <DashboardCardRoot className="bg-themed-black-primary text-white flex">
    <DashboardCardActivity className="flex flex-col gap-4">
      <p className="font-medium text-[22px] leading-6 tracking-[-0.02rem]">
        Invite your trusted partners
      </p>
      <p className="leading-5 font-light text-themed-grey-300">
        Start making quick, comfortable convenient deals with no fee
      </p>
      <SendInvitationDialog>
        <Button
          size="md"
          className="mt-auto bg-themed-grey-100 text-themed-black-primary w-fit"
        >
          Send invintation
        </Button>
      </SendInvitationDialog>
    </DashboardCardActivity>
  </DashboardCardRoot>
);

const Boarding = () => (
  <div className="justify-between flex flex-col w-full">
    <DashboardCardRoot className="bg-transparent">
      <p className="font-bold text-lg leading-10 tracking-tight">
        Complete the boarding to mywatch
      </p>
    </DashboardCardRoot>

    <NewUserStepper steps={steps} />
  </div>
);

const InvitationCard = () => (
  <DashboardCardRoot className="bg-transparent">
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
  </DashboardCardRoot>
);

const Dealer = () => {
  return (
    <DealerProfile avatar={<DealerProfileAvatar />}>
      <DealerCompanyName />
      <DealerVerification showSince />
    </DealerProfile>
  );
};
export default function Page() {
  const params = useSearchParams();

  const newUser = Boolean(params.get('new'));

  return (
    <DashboardPageLayout title={<Dealer />}>
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
          <DashboardCardRoot className="min-h-[240px] gap-5 h-full w-full flex-col flex">
            <div className="flex w-full h-fit text-nowrap sm:flex-nowrap ">
              <div className="flex flex-col w-full gap-1">
                <div className="flex ">
                  <p className="tracking-wide">Market pulse</p>

                  <div className="ml-auto max-w-[200px] flex w-full">
                    <TabTriggerContainer className="h-fit bg-[#e5e5e5] w-full p-1">
                      <TabTrigger
                        value="day"
                        className="text-xs md:text-sm min-h-[30px]"
                        activeClassname="font-medium"
                      >
                        Day
                      </TabTrigger>
                      <TabTrigger
                        value="month"
                        className="text-xs md:text-sm min-h-[30px]"
                        activeClassname="font-medium"
                      >
                        Month
                      </TabTrigger>
                    </TabTriggerContainer>
                  </div>
                </div>
                <p className="flex sm:gap-6 leading-none md:text-lg text-md font-bold">
                  <span className="tracking-tightest">569 123 $</span>
                  <div className="md:text-sm text-xs font-medium mt-auto tracking-wide text-green-500 flex items-center justify-center gap-1">
                    <ArrowTopRightIcon className="w-6 h-6" />
                    12 545 $
                  </div>
                </p>
              </div>
            </div>
            <TabContent
              value="day"
              className="h-full  w-full flex-1 items-stretch"
            >
              <LineChart data={data} />
            </TabContent>
          </DashboardCardRoot>
          <DashboardCardRoot className="gap-6 w-full h-fit flex flex-col">
            <DashboardCardTitle className="items-center gap-2">
              <DashboardTitleLink
                href="/messages"
                className="text-[22px] font-bold leading-3"
              >
                Chats
              </DashboardTitleLink>

              <Badge className="bg-red-500">+2</Badge>
              <Link
                href="/"
                className="ml-auto tracking-tight flex items-center gap-2"
              >
                All messages <ArrowTopRightIcon className="w-6 h-6" />
              </Link>
            </DashboardCardTitle>
            <DashboardCardContent className="items-center flex-col gap-[14px]">
              {[1, 2, 3].map(i => (
                <Message key={i} />
              ))}
            </DashboardCardContent>
          </DashboardCardRoot>
        </TabRoot>
      </div>
    </DashboardPageLayout>
  );
}
