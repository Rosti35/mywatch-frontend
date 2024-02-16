'use client';

import {cn} from '@/lib/cn';
import {AnimatePresence, HTMLMotionProps, motion} from 'framer-motion';

import {
  ComponentProps,
  FC,
  HTMLAttributes,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from 'react';

const errorMessage = 'Place TabsRoot first';
const layoutID = '__indicator';

type TabsContextType = {
  active: string | undefined;
  setActive: (tab: string) => void;
} | null;

const TabsContext = createContext<TabsContextType>(null);
const useTabs = () => {
  const context = useContext(TabsContext);

  if (!context) throw Error(errorMessage);

  return context;
};

type TabRootProps = {
  defaultValue: string;
};
export const TabRoot: FC<TabRootProps & PropsWithChildren & HTMLAttributes<HTMLDivElement>> = ({
  children,
  defaultValue,
  ...props
}) => {
  const [active, setActive] = useState<string | undefined>(defaultValue);

  return (
    <TabsContext.Provider value={{active, setActive}}>
      <div {...props}>{children}</div>
    </TabsContext.Provider>
  );
};
type CommonTabProps = {
  value: string;
  disableTransition?: boolean;
  indicatorClassname?: ComponentProps<'div'>['className'];
  activeClassname?: ComponentProps<'div'>['className'];
};
export const TabTrigger: FC<
  CommonTabProps & PropsWithChildren & HTMLAttributes<HTMLButtonElement>
> = ({
  children,
  value,
  onClick,
  indicatorClassname,
  activeClassname,
  className,
  disableTransition = false,
  ...props
}) => {
  const {setActive, active} = useTabs();

  const isActive = active === value;

  if (disableTransition) {
    return (
      <button
        {...props}
        className={cn(className, isActive ? activeClassname : null, 'relative')}
        onClick={e => {
          setActive(value);
          if (!onClick) return;

          onClick(e);
        }}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      {...props}
      className={cn(className, isActive ? activeClassname : null, 'relative')}
      onClick={e => {
        setActive(value);
        if (!onClick) return;

        onClick(e);
      }}
    >
      {isActive ? (
        <motion.div
          layoutId={layoutID}
          transition={{duration: 0.4, type: 'just'}}
          className={cn(
            'absolute bg-white rounded-full w-full z-20 h-full left-0 top-0',
            indicatorClassname,
          )}
        />
      ) : null}
      <span className={cn('z-20 relative')}>{children}</span>
    </button>
  );
};

export const TabContent: FC<CommonTabProps & PropsWithChildren & HTMLMotionProps<'div'>> = ({
  children,
  value,
  disableTransition = false,
  ...props
}) => {
  const {active} = useTabs();
  if (disableTransition) {
    return active !== value ? null : children;
  }

  return (
    <AnimatePresence
      mode="wait"
      initial={false}
    >
      {active !== value ? null : (
        <motion.div
          layout
          initial={{opacity: 0, height: 0, scale: 0.9}}
          animate={{opacity: 1, height: 'auto', scale: 1}}
          exit={{opacity: 0, height: 0, scale: 0.9}}
          {...props}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
