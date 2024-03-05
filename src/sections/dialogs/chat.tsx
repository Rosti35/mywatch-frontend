'use client';

import {
  UserProfile,
  MessageSent,
  MessageReceived,
} from '@/app/(dashboard)/(chat)/messages/[chat]/_components';
import {Dialog, DialogOverlay, DialogPortal, DialogTrigger} from '@/ui/common/dialog';
import {AttachmentIcon} from '@/ui/common/icons/attachment';
import {TelegramIcon} from '@/ui/common/icons/telegram';
import {WhatsappIcon} from '@/ui/common/icons/whapsapp';
import * as DialogPrimitive from '@radix-ui/react-dialog';

import {Button} from '@/ui/themed/button';

import {PropsWithChildren} from 'react';
import {Cross2Icon} from '@radix-ui/react-icons';
import {SendIcon} from '@/ui/common/icons/send';
import {AddToBlacklistDialog} from './block';

export function ChatDialog({children}: PropsWithChildren) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogPortal>
        <DialogOverlay />

        <DialogPrimitive.Content
          className={
            'fixed left-[50%] top-[50%] z-50 grid w-full rounded-3xl translate-x-[-50%] translate-y-[-50%] gap-4 border border-neutral-200 bg-[#F5F5F5] max-w-[732px] p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]  dark:border-neutral-800 dark:bg-neutral-950'
          }
        >
          <div className="flex h-full flex-col">
            <div className="flex items-center flex-wrap lg:flex-nowrap gap-4">
              <UserProfile />
              <div className="ml-auto sm:flex hidden gap-[10px]">
                <Button
                  size="sm"
                  className="bg-white px-[18px] ml-auto text-themed-black-primary"
                >
                  <WhatsappIcon
                    variant="colored"
                    className="w-6 h-6"
                  />
                </Button>

                <Button
                  size="sm"
                  className="bg-white px-[18px] text-themed-black-primary"
                >
                  <TelegramIcon
                    variant="colored"
                    className="w-6 h-6"
                  />
                </Button>

                <AddToBlacklistDialog>
                  <Button
                    size="sm"
                    className="bg-white px-[18px] text-red-500 tracking-[0.02rem]"
                  >
                    Complain
                  </Button>
                </AddToBlacklistDialog>

                <DialogPrimitive.Close>
                  <Cross2Icon className="h-6 w-6 text-themed-grey-400" />
                </DialogPrimitive.Close>
              </div>
            </div>

            <div className="flex flex-col px-4 pb-[50px] pt-[30px] gap-[35px] items-center w-full justify-center">
              <p className="text-[#A3A3A3]">30 december 2023</p>
              <div className="h-full w-full gap-[35px] flex flex-col-reverse">
                <MessageSent>Perfect</MessageSent>
                <MessageReceived>Tell me, what is the condition of the watch?</MessageReceived>
              </div>
            </div>

            <div className="mt-auto gap-5 w-full h-fit flex flex-col">
              <div className="flex gap-[11px] whitespace-nowrap overflow-auto sm:px-0 px-4 text-nowrap min-h-[40px]">
                <Button
                  size="sm"
                  className="sm:bg-themed-grey-200 text-nowrap px-[20px] bg-white text-themed-black-primary"
                >
                  Generate invoice
                </Button>
                <Button
                  size="sm"
                  className="sm:bg-themed-grey-200 text-nowrap px-[20px] bg-white text-themed-black-primary"
                >
                  Send delivery address
                </Button>
                <Button
                  size="sm"
                  className="sm:bg-[#3BAD49] text-white text-nowrap px-[20px]"
                >
                  Confirm deal
                </Button>
              </div>
              <div className="sm:px-0 px-4 sm:pb-0 pb-6">
                <div className="flex px-5 items-center gap-4 bg-white  rounded-xl">
                  <AttachmentIcon className="w-6 h-6 text-themed-grey-400" />
                  <input
                    className="h-[60px] text-sm w-full  outline-none placeholder:text-themed-grey-400"
                    placeholder="Write message"
                  />
                  <SendIcon className="w-6 h-6 text-[#141B34]" />
                </div>
              </div>
            </div>
          </div>
          {/* <DialogPrimitive.Close className="absolute right-[30px] top-[30px] rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-neutral-100 data-[state=open]:text-neutral-500 dark:ring-offset-neutral-950 dark:focus:ring-neutral-300 dark:data-[state=open]:bg-neutral-800 dark:data-[state=open]:text-neutral-400">
            <Cross2Icon className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close> */}
        </DialogPrimitive.Content>
      </DialogPortal>
    </Dialog>
  );
}
/**
 * 
         <div className="flex h-full flex-col">
          <div className="flex items-center flex-wrap lg:flex-nowrap gap-4">
            <UserProfile />
            <div className="ml-auto sm:flex hidden gap-[10px]">
              <Button
                size="sm"
                className="bg-white px-[18px] ml-auto text-themed-black-primary"
              >
                <WhatsappIcon
                  variant="colored"
                  className="w-6 h-6"
                />
              </Button>

              <Button
                size="sm"
                className="bg-white px-[18px] text-themed-black-primary"
              >
                <TelegramIcon
                  variant="colored"
                  className="w-6 h-6"
                />
              </Button>

              <Button
                size="sm"
                className="bg-white px-[18px] text-red-500 tracking-[0.02rem]"
              >
                Complain
              </Button>
            </div>
          </div>

          <div className="h-full px-4 pb-[50px] gap-[35px] flex flex-col-reverse">
            <MessageSent>Perfect</MessageSent>
            <MessageReceived>Tell me, what is the condition of the watch?</MessageReceived>
          </div>

          <div className="mt-auto gap-5 w-full h-fit flex flex-col">
            <div className="flex gap-[11px] whitespace-nowrap overflow-auto sm:px-0 px-4 text-nowrap min-h-[40px]">
              <Button
                size="sm"
                className="sm:bg-themed-grey-200 text-nowrap px-[20px] bg-white text-themed-black-primary"
              >
                Generate invoice
              </Button>
              <Button
                size="sm"
                className="sm:bg-themed-grey-200 text-nowrap px-[20px] bg-white text-themed-black-primary"
              >
                Send delivery address
              </Button>
              <Button
                size="sm"
                className="sm:bg-[#3BAD49] text-white text-nowrap px-[20px]"
              >
                Confirm deal
              </Button>
            </div>
            <div className="sm:px-0 px-4 sm:pb-0 pb-6">
              <div className="flex px-5 items-center gap-4 bg-white  rounded-xl">
                <AttachmentIcon className="w-6 h-6 text-themed-grey-400" />
                <input
                  className="h-[60px] text-sm w-full  outline-none placeholder:text-themed-grey-400"
                  placeholder="Write message"
                />
              </div>
            </div>
          </div>
        </div>
 */
