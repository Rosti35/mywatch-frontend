'use client';

import {InputHTMLAttributes} from 'react';
import {usePhoneInput, FlagImage} from 'react-international-phone';
import {FieldLayout} from './layout';

export const PhoneField = ({className, ...props}: InputHTMLAttributes<HTMLInputElement>) => {
  const {inputValue, country, handlePhoneValueChange, inputRef} = usePhoneInput({
    onChange: () => {},
  });

  return (
    <FieldLayout>
      <div className="flex gap-2">
        <FlagImage
          width={24}
          height={24}
          iso2={country.iso2}
        />
        <input
          className="placeholder:text-transparent text-sm h-[24px] w-full bg-transparent outline-none"
          {...props}
          ref={inputRef}
          value={inputValue}
          onChange={handlePhoneValueChange}
        />
      </div>
      <label
        htmlFor={props.id}
        className="origin-top-left transition-all text-themed-grey-400 h-[15px] bg-transparent text-xs  font-light"
      >
        {props.placeholder}
      </label>
    </FieldLayout>
  );
};
