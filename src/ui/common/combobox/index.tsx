'use client';

import * as React from 'react';
import {CheckIcon, ChevronDownIcon} from '@radix-ui/react-icons';
import {Command, CommandEmpty, CommandGroup, CommandInput, CommandItem} from '../command';

import {PopoverContentProps} from '@radix-ui/react-popover';
import {ComponentProps} from 'react';
import {AnimatePresence, HTMLMotionProps, motion} from 'framer-motion';
import {Popover, PopoverContent, PopoverTrigger} from '../popover';
import {defaultTransition} from '@/ui/util';
import {cn} from '@/lib/cn';
import {useOnClickOutside} from '@/hooks/common/use-on-click-outside';

export type Option = {
  value: any;
  label: React.ReactNode | string | undefined | number;
};

type ComboBoxContextProps = {
  open: boolean;
  value: unknown;
  setValue: (value: unknown) => void;
  setOpen: (open: boolean) => void;
  options: Option[];
} | null;

const ComboboxContext = React.createContext<ComboBoxContextProps>(null);
export const useCombobox = () => {
  const context = React.useContext(ComboboxContext);

  if (!context) throw Error('Need ComboboxRoot');

  return context;
};

type ComboboxTriggerProps = {
  placeholder?: string;
  asChild?: boolean;
} & React.HTMLAttributes<HTMLButtonElement>;
export const ComboboxTrigger: React.FC<ComboboxTriggerProps> = ({
  className,
  placeholder,
  asChild,
  children,
  ...props
}) => {
  const {value, options, open} = useCombobox();

  const currentValue = value ? options.find(option => option.value === value)?.label : placeholder;

  if (asChild) return <PopoverTrigger asChild>{children}</PopoverTrigger>;

  return (
    <PopoverTrigger asChild>
      <button
        {...props}
        aria-expanded={open}
        className={cn('justify-between flex items-center', className)}
      >
        <AnimatePresence>
          {currentValue ? <motion.span {...defaultTransition}>{currentValue}</motion.span> : null}
        </AnimatePresence>
        <div className="absolute right-0 top-0 w-14 flex items-center justify-center h-full">
          <ChevronDownIcon className="h-6 w-6 right-0 text-themed-grey-600 top-0 shrink-0 opacity-50" />
        </div>
      </button>
    </PopoverTrigger>
  );
};

const ComboboxCommand = ({
  children,
  ...props
}: HTMLMotionProps<'div'> & React.PropsWithChildren) => {
  const {open, setOpen} = useCombobox();

  const ref = React.useRef<HTMLDivElement>(null);

  const onClickOutside = () => setOpen(false);

  useOnClickOutside(ref, onClickOutside);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          ref={ref}
          className="p-0 w-full"
          {...props}
          style={{zIndex: 999, position: 'absolute', left: 0, top: '100%'}}
          {...defaultTransition}
        >
          <Command className="w-full h-full flex flex-col">{children}</Command>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

type ComboboxContentProps = {
  asPopover?: boolean;
} & HTMLMotionProps<'div'> &
  React.PropsWithChildren;
export const ComboboxContent = ({children, asPopover, ...props}: ComboboxContentProps) => {
  if (asPopover) {
    return (
      <PopoverContent {...(props as PopoverContentProps)}>
        <Command>{children}</Command>
      </PopoverContent>
    );
  }

  return <ComboboxCommand {...props}>{children}</ComboboxCommand>;
};

type ComboboxInput = {} & ComponentProps<typeof CommandInput>;
export const ComboboxInput = (props: ComboboxInput) => {
  return (
    <CommandInput
      {...props}
      autoFocus
    />
  );
};

export const ComboboxEmpty = ({children}: React.PropsWithChildren) => (
  <CommandEmpty>{children}</CommandEmpty>
);

type ComboboxGroupProps = {onSelect?: (option: any) => void} & Omit<
  ComponentProps<typeof CommandGroup>,
  'onSelect'
>;
export const ComboboxGroup = ({onSelect, ...props}: ComboboxGroupProps) => {
  const {options, value, setValue, setOpen} = useCombobox();
  return (
    <CommandGroup {...props}>
      {options.map((option, i) => (
        <CommandItem
          key={`${option.value}-${i}`}
          value={option.value}
          onSelect={() => {
            setValue(option.value);

            setOpen(false);

            if (!onSelect) return;
            onSelect(option.value);
          }}
        >
          {option.label}
          <CheckIcon
            className={cn('ml-auto h-4 w-4', value === option.value ? 'opacity-100' : 'opacity-0')}
          />
        </CommandItem>
      ))}
    </CommandGroup>
  );
};

type ComboboxRootProps = {
  options: Option[];
} & React.PropsWithChildren;
export function ComboboxRoot({options, children}: ComboboxRootProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState<unknown>('');

  return (
    <ComboboxContext.Provider value={{open, value, options, setOpen, setValue}}>
      <Popover
        open={open}
        onOpenChange={setOpen}
      >
        {children}
      </Popover>
    </ComboboxContext.Provider>
  );
}
