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
      className={cn('flex gap-5', className)}
      {...props}
    >
      <div className="flex w-full flex-col gap-[10px]">
        <p className="sm:text-[22px] text-[18px] leading-7 font-semibold">{label}</p>
        <p className="max-w-96 sm:text-sm text-xs sm:leading-5 leading-4 tracking-wide">{children}</p>
      </div>

      <div className="flex flex-col gap-4 items-center justify-center">
        <Switch id="email">Email</Switch>
        <Switch id="sms">SMS</Switch>
      </div>
    </div>
  );
};
