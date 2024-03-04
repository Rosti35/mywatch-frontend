import {AttachmentIcon} from '@/ui/common/icons/attachment';
import {BubbleLeft} from '@/ui/common/icons/bubble-left';
import {BubbleRight} from '@/ui/common/icons/bubble-right';
import {TelegramIcon} from '@/ui/common/icons/telegram';
import {WhatsappIcon} from '@/ui/common/icons/whapsapp';
import {Button} from '@/ui/themed/button';
import {PropsWithChildren} from 'react';

const UserProfile = () => {
  return (
    <div className="flex items-center gap-[14px] sm:p-0 p-4 w-full">
      <div className="min-w-[60px] min-h-[60px] relative bg-zinc-500 rounded-full">
        <div className="w-[25px] h-[25px] bg-blue-500 absolute top-[2px] border -translate-y-1/2 border-themed-grey-100 rounded-full -right-[2px]" />
      </div>
      <div className="flex flex-col gap-1  text-ellipsis text-nowrap whitespace-nowrap overflow-hidden w-full">
        <p className="tracking-[0.01rem] w-full  text-ellipsis text-nowrap whitespace-nowrap overflow-hidden font-semibold sm:text-sm text-[14px]">
          Daytona Stainless Steel Black Dial
        </p>
        <p className="sm:text-sm flex items-center text-[14px] gap-[6px]">
          Ineichen Zuriсh
          <span className="w-2 h-2 rounded-full bg-[#3BAD49]" />
        </p>
      </div>
    </div>
  );
};

const MessageSent = ({children}: PropsWithChildren) => (
  <div className="rounded-2xl leading-5 ml-auto relative bg-themed-black-primary text-white z-30 py-[14.5px] pl-[17px] pr-[13px] w-fit">
    <div className="flex gap-[11px] font-normal items-center tracking-wide">
      <span>{children}</span>
      <span className="text-[14px] text-[#9CA3AF] tracking-wide">10:30</span>
    </div>
    <BubbleRight className="absolute bottom-[1px] right-0 text-themed-black-primary w-[22px] translate-x-[29%] h-[22px]" />
  </div>
);

const MessageReceived = ({children}: PropsWithChildren) => {
  return (
    <div className="rounded-2xl leading-5 mr-auto relative bg-white text-white z-30 py-[14.5px] pr-[17px] pl-[16px] w-fit">
      <div className="flex font-normal items-center gap-[11px] tracking-wide">
        <span className="text-black">{children}</span>
        <span className="text-[14px] text-[#9CA3AF] leading-5 tracking-wide">10:30</span>
      </div>
      <BubbleLeft className="absolute bottom-[1px] left-0 text-white w-[22px] -translate-x-[29%] h-[22px]" />
    </div>
  );
};

export default function Page() {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center flex-wrap lg:flex-nowrap gap-4">
        <UserProfile />
        <div className="ml-auto sm:flex hidden gap-[10px]">
          <Button
            size="sm"
            className="bg-white px-[18px] ml-auto text-themed-black-primary"
          >
            <WhatsappIcon
              variant="colored"
              className="w-6 h-6"
            />
          </Button>

          <Button
            size="sm"
            className="bg-white px-[18px] text-themed-black-primary"
          >
            <TelegramIcon
              variant="colored"
              className="w-6 h-6"
            />
          </Button>

          <Button
            size="sm"
            className="bg-white px-[18px] text-red-500 tracking-[0.02rem]"
          >
            Complain
          </Button>
        </div>
      </div>

      <div className="h-full px-4 pb-[50px] gap-[35px] flex flex-col-reverse">
        <MessageSent>Perfect</MessageSent>
        <MessageReceived>Tell me, what is the condition of the watch?</MessageReceived>
      </div>

      <div className="mt-auto gap-5 w-full h-fit flex flex-col">
        <div className="flex gap-[11px] whitespace-nowrap overflow-auto sm:px-0 px-4 text-nowrap min-h-[40px]">
          <Button
            size="sm"
            className="sm:bg-themed-grey-200 text-nowrap px-[20px] bg-white text-themed-black-primary"
          >
            Generate invoice
          </Button>
          <Button
            size="sm"
            className="sm:bg-themed-grey-200 text-nowrap px-[20px] bg-white text-themed-black-primary"
          >
            Send delivery address
          </Button>
          <Button
            size="sm"
            className="sm:bg-[#3BAD49] text-white text-nowrap px-[20px]"
          >
            Confirm deal
          </Button>
        </div>
        <div className="sm:px-0 px-4 sm:pb-0 pb-6">
          <div className="flex px-5 items-center gap-4 bg-white  rounded-xl">
            <AttachmentIcon className="w-6 h-6 text-themed-grey-400" />
            <input
              className="h-[60px] text-sm w-full  outline-none placeholder:text-themed-grey-400"
              placeholder="Write message"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
