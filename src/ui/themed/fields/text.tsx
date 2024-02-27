'use client';

import {InputHTMLAttributes, useRef} from 'react';
import {FieldLayout} from './layout';
import {cn} from '@/lib/cn';

export const TextField = ({className, ...props}: InputHTMLAttributes<HTMLInputElement>) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      className="cursor-text min-w-40 relative overflow-hidden"
      onClick={() => inputRef.current?.focus()}
    >
      <FieldLayout className="text-field">
        <input
          ref={inputRef}
          className={cn(
            'placeholder:text-transparent text-sm h-[24px]  w-full bg-transparent outline-none',
            className,
          )}
          {...props}
        />

        <label
          htmlFor={props.id}
          className="origin-top-left tracking-wide translate-y-2/3 pointer-events-none scale-125 transition-all text-themed-grey-400 h-[15px] bg-transparent text-xs  font-light flex items-center "
        >
          {props.placeholder}
        </label>
      </FieldLayout>
    </div>
  );
};
