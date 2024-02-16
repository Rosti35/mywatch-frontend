'use client';

import {FieldLayout} from '@/ui/themed/fields/layout';
import {cn} from '@/lib/cn';
import {useCombobox} from '@/ui/common/combobox';

import {AnimationControls, HTMLMotionProps, motion, useAnimationControls} from 'framer-motion';

import {ReactNode, useEffect} from 'react';

const usePlaceholderTransition = (controls: AnimationControls, willAnimate: boolean) =>
  useEffect(() => {
    if (willAnimate) {
      controls.start({
        scale: 1,
        top: 0,
        transition: {
          duration: 0.15,
          type: 'just',
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [willAnimate]);

type ComboboxPlaceholderProps = {
  placeholder: ReactNode | string | null | number;
} & HTMLMotionProps<'p'> &
  React.PropsWithChildren;
export const ComboboxPlaceholder = ({
  children,
  placeholder,
  className,
  ...props
}: ComboboxPlaceholderProps) => {
  const {value, setOpen, open} = useCombobox();
  const hasValue = value !== undefined && value !== null && value !== '';

  const controls = useAnimationControls();

  usePlaceholderTransition(controls, hasValue);

  return (
    <div
      onClick={() => setOpen(!open)}
      className="cursor-pointer"
    >
      <FieldLayout>
        {children}
        <span className="min-h-[15px] relative">
          <motion.p
            style={{
              position: 'absolute',
              top: '55%',
              scale: 1.25,
            }}
            animate={controls}
            className={cn(
              'origin-top-left pointer-events-none h-[15px] flex items-center  bg-transparent text-xs  font-light text-themed-grey-400',
              className,
            )}
            {...props}
          >
            {placeholder}
          </motion.p>
        </span>
      </FieldLayout>
    </div>
  );
};
