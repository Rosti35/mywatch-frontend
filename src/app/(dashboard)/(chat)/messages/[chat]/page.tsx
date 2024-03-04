import {AttachmentIcon} from '@/ui/common/icons/attachment';
import {TelegramIcon} from '@/ui/common/icons/telegram';
import {WhatsappIcon} from '@/ui/common/icons/whapsapp';
import {Button} from '@/ui/themed/button';
import {UserProfile, MessageSent, MessageReceived} from './_components';

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
