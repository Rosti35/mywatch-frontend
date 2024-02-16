import {cn} from '@/lib/cn';
import {Switch} from '@/ui/common/switch';
import {HTMLAttributes, PropsWithChildren} from 'react';

type NotificationSwitchProps = {
  label: string;
} & PropsWithChildren &
  HTMLAttributes<HTMLDivElement>;
export const NotificationSwitch = ({
  label,
  children,
  className,
  ...props
}: NotificationSwitchProps) => {
  return (
    <div
      className={cn('flex', className)}
      {...props}
    >
      <div className="flex w-full flex-col gap-2">
        <p className="text-md font-semibold">{label}</p>
        <p className="max-w-96 leading-5">{children}</p>
      </div>

      <div className="flex flex-col gap-4 items-center justify-center">
        <Switch id="email">Email</Switch>
        <Switch id="sms">SMS</Switch>
      </div>
    </div>
  );
};
