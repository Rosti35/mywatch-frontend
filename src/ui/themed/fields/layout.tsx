import {cn} from '@/lib/cn';
import {InputHTMLAttributes, PropsWithChildren} from 'react';

export const FieldLayout = ({
  className,
  children,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & PropsWithChildren) => {
  return (
    <div
      className={cn(
        'px-4 py-[11.5px] justify-center gap-[2px] flex flex-col-reverse relative max-h-[60px] min-h-[60px] w-full bg-white rounded-xl',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
