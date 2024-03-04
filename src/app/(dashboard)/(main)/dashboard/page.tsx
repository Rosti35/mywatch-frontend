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
import {DashboardPageLayout, Title} from '../../_layout';
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
      <DialogContent className="sm:max-w-[600px] bg-themed-grey-100 gap-[30px] sm:rounded-[32px] rounded-3xl sm:p-[40px]">
        <DialogHeader>
          <DialogTitle>Invite your trusted partners</DialogTitle>
          <DialogDescription>
            Just send an invitation and start making quick, convenient transactions
          </DialogDescription>
        </DialogHeader>

        <TabRoot
          defaultValue={'whatsapp'}
          className="flex flex-col gap-[16px] w-full overflow-hidden"
        >
          <TabTriggerContainer className="bg-themed-grey-200 overflow-auto w-full">
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
        <p className="mt-auto md:text-lg text-md sm:leading-[42.4px] leading-[22px] font-bold">
          12
        </p>
      </DashboardCardActivity>
      <AddButton className="my-auto" />
    </DashboardCardTitle>
  </DashboardCardRoot>
);

const SalesStatus = () => (
  <DashboardCardRoot className="gap-[10px] flex flex-col">
    <DashboardCardTitle>
      <DashboardTitleLink href="/archive">
        <p className="leading-5 md:text-sm text-[14px] text-nowrap">My active sales</p>
      </DashboardTitleLink>
    </DashboardCardTitle>
    <DashboardCardContent className=" flex items-center gap-1 sm:leading-[42.5px] leading-[22px] justify-between sm:justify-normal sm:gap-[14px]">
      <span className="md:text-lg text-md font-bold">12</span>
      <span className="rounded-full sm:ml-0 ml-auto border tracking-tight text-nowrap border-themed-black-primary md:text-sm text-xs h-fit sm:px-4 px-[10px] sm:leading-5 sm:py-[4px]">
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
  <DashboardCardRoot className="flex flex-col gap-2">
    <DashboardCardTitle>
      <DashboardCardActivity>
        <DashboardTitleLink href="/buy">Watches on sale</DashboardTitleLink>
        <p className="sm:text-lg text-md font-bold flex gap-[18px] sm:leading-10 leading-5 items-center">
          12 322
          <span className="font-bold text-[14px] rounded-full w-[30px] h-6 bg-[#3BAD49] text-white flex items-center justify-center">
            +2
          </span>
        </p>
      </DashboardCardActivity>
    </DashboardCardTitle>
    <DashboardCardContent>
      <Link
        href="/settings/buying"
        className="mt-auto font-medium tracking-[-0.4px] sm:leading-none leading-8 sm:text-[16px] text-xs items-center flex gap-[6px]"
      >
        Set up your buying preferences <ArrowTopRightIcon className="w-6 h-6" />
      </Link>
    </DashboardCardContent>
  </DashboardCardRoot>
);

const PartnersStatus = () => (
  <DashboardCardRoot className="flex flex-col">
    <DashboardCardTitle>
      <DashboardCardActivity>
        <DashboardTitleLink href="/dealers">
          <p className="leading-[7px] sm:leading-none md:text-sm text-xs  text-nowrap">
            My partners
          </p>
        </DashboardTitleLink>
        <p className="sm:text-lg text-md font-bold sm:leading-[42.5px] leading-[42px]">98</p>
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

const Chat = () => (
  <DashboardCardRoot className="gap-6 sm:min-h-[300px] w-full h-fit flex flex-col">
    <DashboardCardTitle className="items-center gap-2">
      <DashboardTitleLink
        href="/messages"
        className="text-[22px] font-bold leading-3"
      >
        Chats
      </DashboardTitleLink>

      <Badge className="bg-red-500">+2</Badge>
      <Link
        href="/messages"
        className="ml-auto tracking-tight flex items-center gap-2"
      >
        All messages <ArrowTopRightIcon className="w-6 h-6" />
      </Link>
    </DashboardCardTitle>
    <div className="flex items-center flex-col gap-[14px]">
      {[1, 2, 3].map(i => (
        <Message key={i} />
      ))}
    </div>
  </DashboardCardRoot>
);

const SendInvitationCard = () => (
  <DashboardCardRoot className="bg-themed-black-primary text-white flex">
    <DashboardCardActivity className="flex flex-col sm:gap-4 gap-2">
      <p className="font-medium text-[22px] leading-6 tracking-[-0.02rem]">
        Invite your trusted partners
      </p>
      <p className="sm:leading-5 leading-[16px] sm:text-sm text-xs font-light text-themed-grey-300">
        Start making quick, comfortable convenient deals with no fee
      </p>
      <SendInvitationDialog>
        <Button
          size="md"
          className="sm:mt-auto  mt-[9px] sm:px-6 px-5 tracking-[-0.4px] bg-themed-grey-100 text-themed-black-primary w-fit"
        >
          <span className="sm:text-sm text-[14px]">Send invintation</span>
        </Button>
      </SendInvitationDialog>
    </DashboardCardActivity>
  </DashboardCardRoot>
);

const Boarding = () => (
  <div className="justify-between flex flex-col gap-[20px] w-full ">
    <div className="bg-transparent sm:px-[30px] px-5">
      <p className="font-bold leading-10 sm:text-lg text-md tracking-tight">
        Complete the boarding to mywatch
      </p>
    </div>

    <NewUserStepper steps={steps} />
  </div>
);

const InvitationCard = () => (
  <div className="bg-transparent sm:pr-[30px] pr-5 md:pl-0 pl-5 w-full">
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
  </div>
);

const Dealer = () => {
  return (
    <DealerProfile avatar={<DealerProfileAvatar />}>
      <DealerCompanyName />
      <DealerVerification showSince />
    </DealerProfile>
  );
};

const MarketPulse = () => (
  <TabRoot
    defaultValue="day"
    className="w-full text-[#262626]"
  >
    <DashboardCardRoot className="sm:min-h-[300px] min-h-[240px]  gap-5 h-full w-full flex-col flex">
      <div className="flex w-full h-fit text-nowrap sm:flex-nowrap ">
        <div className="flex flex-col w-full gap-1">
          <div className="flex ">
            <p className="leading-[12px] md:text-sm text-xs  text-nowrap">Market pulse</p>

            <div className="ml-auto max-w-[200px] flex w-full">
              <TabTriggerContainer className="h-fit bg-[#e5e5e5] w-fit ml-auto p-1">
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
          <div className="flex sm:gap-6 leading-none md:text-lg text-md font-bold">
            <span className="tracking-tightest">569 123 $</span>
            <div className="md:text-sm text-xs leading-[50.5px] ml-[2px] font-medium mt-auto text-[#3BAD49] flex items-center justify-center gap-1">
              <ArrowTopRightIcon className="w-6 h-6" />
              12 545 $
            </div>
          </div>
        </div>
      </div>
      <TabContent
        value="day"
        className="h-full  w-full flex-1 items-stretch"
      >
        <LineChart data={data} />
      </TabContent>
    </DashboardCardRoot>
  </TabRoot>
);

export default function Page() {
  const params = useSearchParams();

  const newUser = Boolean(params.get('new'));

  return (
    <div className="w-full h-full sm:pt-[40px] sm:pr-[40px]  px-4 sm:pl-[22px] flex flex-col">
      <Title>
        <Dealer />
      </Title>

      <div className="flex sm:gap-5 gap-2 pb-4 flex-col">
        {newUser ? (
          <div className="flex lg:flex-nowrap gap-[20px] sm:py-[30px] py-5 flex-wrap w-full h-fit text-white bg-[#89A4B7] sm:rounded-[32px] rounded-3xl">
            <Boarding />
            <InvitationCard />
          </div>
        ) : null}
        <div className="flex md:gap-5 w-full md:min-h-[137px] gap-2 max-h-[90px] md:max-h-[137px]">
          <StockStatus />
          <SalesStatus />
        </div>

        <div className="flex lg:flex-nowrap  flex-wrap sm:gap-5 gap-2 w-full  h-full ">
          <SellsStatus />
          <PartnersStatus />
          {newUser ? null : <SendInvitationCard />}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 flex-wrap sm:gap-5 gap-2 w-full  h-full ">
          <MarketPulse />
          <Chat />
        </div>
      </div>
    </div>
  );
}
