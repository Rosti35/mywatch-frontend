import {cn} from '@/lib/cn';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import {CheckIcon} from '@radix-ui/react-icons';
import {FC, HTMLAttributes, PropsWithChildren, useId} from 'react';

export const Checkbox: FC<PropsWithChildren & HTMLAttributes<HTMLSpanElement>> = ({
  children,
  className,
  ...props
}) => {
  const id = useId();
  return (
    <span
      className={cn('flex items-center whitespace-nowrap gap-[10px]', className)}
      {...props}
    >
      <CheckboxPrimitive.Root
        id={id}
        className="flex transition-all h-[24px] min-w-[24px] rounded-lg data-[state=checked]:bg-themed-black-primary data-[state=checked]:text-white appearance-none items-center justify-center bg-white outline-none"
      >
        <CheckboxPrimitive.Indicator>
          <CheckIcon className="w-5 h-5" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      <label
        htmlFor={id}
        className="flex text-nowrap text-ellipsis overflow-hidden items-center whitespace-nowrap gap-2 select-none"
      >
        {children}
      </label>
    </span>
  );
};
