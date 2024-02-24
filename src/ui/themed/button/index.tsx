import {cn} from '@/lib/cn';
import {FC, HTMLAttributes} from 'react';

type Size = 'lg' | 'md' | 'sm';

type ButtonProps = {
  size?: Size;
} & HTMLAttributes<HTMLButtonElement>;

const ButtonSmall = ({className, ...props}: HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={cn(
        `flex items-center justify-center px-5 h-button-sm transition rounded-full bg-themed-black-primary text-themed-grey-100 hover:opacity-85`,
        className,
      )}
      {...props}
    />
  );
};
const ButtonMedium = ({className, ...props}: HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={cn(
        `flex items-center justify-center h-button-md px-6 transition rounded-full bg-themed-black-primary text-themed-grey-100 hover:opacity-85`,
        className,
      )}
      {...props}
    />
  );
};
const ButtonLarge = ({className, ...props}: HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={cn(
        `flex items-center justify-center h-button-lg px-[30px] transition rounded-full bg-themed-black-primary text-themed-grey-100 hover:opacity-85`,
        className,
      )}
      {...props}
    />
  );
};

const buttons: Record<Size, FC<HTMLAttributes<HTMLButtonElement>>> = {
  sm: ButtonSmall,
  md: ButtonMedium,
  lg: ButtonLarge,
};

export const Button = ({size = 'lg', ...props}: ButtonProps) => {
  const ButtonComponent = buttons[size];

  return <ButtonComponent {...props} />;
};
