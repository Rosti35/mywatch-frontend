import {cn} from '@/lib/cn';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import {HTMLAttributes, ReactNode} from 'react';

type SwitchProps = {
  id: string;
  children: ReactNode | string | null;
} & HTMLAttributes<HTMLDivElement>;
export const Switch = ({id, children, className, ...props}: SwitchProps) => (
  <div
    className={cn('flex flex-row-reverse items-center gap-2 w-fit text-sm', className)}
    {...props}
  >
    <label htmlFor={id}>{children}</label>
    <SwitchPrimitive.Root
      className="w-[52px] h-[28px] bg-blackA6 rounded-full relative focus:shadow-black data-[state=checked]:bg-black outline-none cursor-default data-[state=unchecked]:bg-themed-grey-400"
      id={id}
    >
      <SwitchPrimitive.Thumb className="block w-[24px] h-[24px] bg-white rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[26px]" />
    </SwitchPrimitive.Root>
  </div>
);
