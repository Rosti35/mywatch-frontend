import {AttachmentIcon} from '@/ui/common/icons/attachment';
import {BubbleLeft} from '@/ui/common/icons/bubble-left';
import {BubbleRight} from '@/ui/common/icons/bubble-right';
import {TelegramIcon} from '@/ui/common/icons/telegram';
import {WhatsappIcon} from '@/ui/common/icons/whapsapp';
import {Button} from '@/ui/themed/button';
import {PropsWithChildren} from 'react';

const UserProfile = () => {
  return (
    <div className="flex items-center gap-[14px]">
      <div className="w-[60px] h-[60px] relative bg-zinc-500 rounded-full">
        <div className="w-[25px] h-[25px] bg-blue-500 absolute top-[2px] border -translate-y-1/2 border-themed-grey-100 rounded-full -right-[2px]" />
      </div>
      <div>
        <p className="tracking-[0.01rem]">Daytona Stainless Steel Black Dial</p>
        <p>Ineichen Zuriсh</p>
      </div>
    </div>
  );
};

const MessageSent = ({children}: PropsWithChildren) => (
  <div className="rounded-2xl leading-5 ml-auto relative bg-themed-black-primary text-white z-30 py-[14.5px] pl-[17px] pr-[13px] w-fit">
    <div className="flex gap-[11px] items-center tracking-wide">
      <span>{children}</span>
      <span className="text-[14px] text-[#9CA3AF] tracking-wide">10:30</span>
    </div>
    <BubbleRight className="absolute bottom-[1px] right-0 text-themed-black-primary w-[22px] translate-x-[29%] h-[22px]" />
  </div>
);

const MessageReceived = ({children}: PropsWithChildren) => {
  return (
    <div className="rounded-2xl leading-5 mr-auto relative bg-white text-white z-30 py-[14.5px] pr-[17px] pl-[16px] w-fit">
      <div className="flex items-center gap-[11px] tracking-wide">
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
      <div className="flex items-center">
        <UserProfile />
        <div className="ml-auto flex gap-[10px]">
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

      <div className="h-full px-2 pb-[50px] gap-[35px] flex flex-col-reverse">
        <MessageSent>Perfect</MessageSent>
        <MessageReceived>Tell me, what is the condition of the watch?</MessageReceived>
      </div>

      <div className="mt-auto gap-5 w-full flex flex-col">
        <div className="flex gap-[11px]">
          <Button
            size="sm"
            className="bg-themed-grey-200 text-themed-black-primary"
          >
            Generate invoice
          </Button>
          <Button
            size="sm"
            className="bg-themed-grey-200 text-themed-black-primary"
          >
            Send delivery address
          </Button>
          <Button
            size="sm"
            className="bg-themed-grey-200 text-themed-black-primary"
          >
            Confirm deal
          </Button>
        </div>
        <div className="flex px-5 items-center gap-4 bg-white  rounded-xl">
          <AttachmentIcon className="w-6 h-6 text-themed-grey-400" />
          <input className="h-[60px] w-full  outline-none" />
        </div>
      </div>
    </div>
  );
}
