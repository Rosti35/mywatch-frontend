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
        'px-4 pb-[11.5px] pt-[13px] justify-center gap-[2px] flex flex-col-reverse relative max-h-[61px] min-h-[61px] w-full bg-white rounded-xl',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
