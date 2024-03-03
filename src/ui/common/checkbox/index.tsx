import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import {CheckIcon} from '@radix-ui/react-icons';
import {FC, PropsWithChildren, useId} from 'react';

export const Checkbox: FC<PropsWithChildren> = ({children}) => {
  const id = useId();
  return (
    <span className="flex items-center whitespace-nowrap gap-[10px]">
      <CheckboxPrimitive.Root
        id={id}
        className="flex transition-all h-[24px] min-w-[24px] rounded-lg data-[state=checked]:bg-themed-black-primary data-[state=checked]:text-white appearance-none items-center justify-center bg-white outline-none"
      >
        <CheckboxPrimitive.Indicator>
          <CheckIcon className="w-5 h-5" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      <label htmlFor={id} className="flex items-center whitespace-nowrap gap-2 select-none">{children}</label>
    </span>
  );
};
