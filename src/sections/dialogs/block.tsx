import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from '@/ui/common/dialog';
import {Button} from '@/ui/themed/button';
import {CheckIcon} from '@radix-ui/react-icons';
import * as RadioGroup from '@radix-ui/react-radio-group';
import {PropsWithChildren} from 'react';

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

export function AddToBlacklistDialog({children}: PropsWithChildren) {
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
