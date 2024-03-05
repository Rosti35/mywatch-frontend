import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/ui/common/dialog';
import {MailAtIcon} from '@/ui/common/icons/mail-at';

import {PropsWithChildren} from 'react';

export function ConfirmMailDialog({children}: PropsWithChildren) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-themed-grey-100 gap-[30px] rounded-[32px] p-[40px]">
        <div className="w-full items-center justify-center flex flex-col gap-[30px]">
          <DialogTitle className="items-center justify-center">
            <MailAtIcon className="w-[100px] h-[100px]" />
          </DialogTitle>

          <p className="text-[42px] font-bold text-center tracking-tight leading-[42px]">
            Confirm your email address
          </p>

          <p className="text-center leading-[35px]">
            We sent a confirmation email to: <span className="font-bold">email@gmail.com</span>
            <br /> Check your email and click on the confirmation link to continue.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
