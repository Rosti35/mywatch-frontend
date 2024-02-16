import {CardRoot} from '@/ui/common/card';
import {CheckIcon} from '@/ui/common/icons/check';
import {Cross2Icon} from '@radix-ui/react-icons';
import {PropsWithChildren} from 'react';

const Connected = () => (
  <div className="flex gap-2">
    <div className="border w-6 h-6 border-green-600 rounded-full flex items-center justify-center">
      <CheckIcon className="w-6 h-6 stroke-green-600" />
    </div>
    Connected <span className="font-semibold">+7 963 255-55-44</span>
  </div>
);

const NotConnected = () => (
  <div className="flex gap-2">
    <div className="border w-6 h-6 border-red-600 rounded-full flex items-center justify-center text-red-600">
      <Cross2Icon />
    </div>
    Not connected
  </div>
);

type IntegrationCardProps = {
  connected: boolean;
  integration: string;
} & PropsWithChildren;
export const IntegrationCard = ({children, connected, integration}: IntegrationCardProps) => (
  <CardRoot className="gap-4 flex">
    <div className="w-full flex">
      <p className="text-[20px] font-bold">{integration}</p>
      <span className="ml-auto flex items-center justify-center">{children}</span>
    </div>
    {connected ? <Connected /> : <NotConnected />}

    <button className="py-4 px-5 w-fit text-white bg-themed-black-primary rounded-full">
      {connected ? 'Sent invintation' : 'Reconnect'}
    </button>
  </CardRoot>
);
