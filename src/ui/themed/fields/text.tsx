'use client';

import {InputHTMLAttributes, useRef} from 'react';
import {FieldLayout} from './layout';

export const TextField = (props: InputHTMLAttributes<HTMLInputElement>) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      className="cursor-text min-w-40"
      onClick={() => inputRef.current?.focus()}
    >
      <FieldLayout className="text-field">
        <input
          ref={inputRef}
          className="placeholder:text-transparent text-sm h-[24px]  w-full bg-transparent outline-none"
          {...props}
        />

        <label
          htmlFor={props.id}
          className="origin-top-left translate-y-2/3 pointer-events-none scale-125 transition-all text-themed-grey-400 h-[15px] bg-transparent text-xs  font-light flex items-center "
        >
          {props.placeholder}
        </label>
      </FieldLayout>
    </div>
  );
};
