import {TabTrigger} from '@/ui/themed/tabs';
import {ComponentProps} from 'react';

type BadgeProps = {count: string | number};
const Badge = ({count}: BadgeProps) =>
  count === 0 ? null : (
    <div className="min-w-6 h-6 rounded-full flex items-center justify-center leading-5">
      {count}
    </div>
  );

export const TabTriggerWithBadge = ({
  children,
  count,
  ...props
}: ComponentProps<typeof TabTrigger> & BadgeProps) => {
  return (
    <TabTrigger
      {...props}
      disableTransition
      className="md:px-6 md:py-3 h-full [&>div]:bg-themed-black-primary [&>div]:text-white py-2 px-4 w-full flex transition-all gap-2 justify-center rounded-full bg-white"
      activeClassname="text-white bg-themed-black-primary [&>div]:!bg-white [&>div]:text-black"
    >
      {children}
      <Badge count={count} />
    </TabTrigger>
  );
};
