'use client';

import {PropsWithChildren, useRef, useState} from 'react';
import {useEventListener} from '@/hooks/common/use-event-listener';
import {UploadIcon} from '@/ui/common/icons/upload';
import {AnimatePresence, motion} from 'framer-motion';
import {Cross1Icon} from '@radix-ui/react-icons';
import {TrashIcon} from '@/ui/common/icons/trash';
import {Timer} from '@/ui/common/timer';
import {Button} from '@/ui/themed/button';
import {DashboardPageLayout} from '../../_layout';
import {DocumentAttachmentIcon} from '@/ui/common/icons/document-attachment';

const Title = () => {
  return (
    <div className="w-full flex flex-col gap-[14px]">
      <p className="leading-8 tracking-tight">Upload verification documents</p>
      <p className="leading-5 font-normal text-sm">
        Please have the following info and documents ready for company verification.
      </p>
    </div>
  );
};

enum UploadStatus {
  IDLE,
  UPLOADING,
  UPLOADED,
}

type LoadingIndicatorProps = {
  progress: number;
};
const LoadingIndicator = ({progress}: LoadingIndicatorProps) => {
  return (
    <div className="w-full bg-themed-grey-400">
      <motion.div
        layout
        className="flex gap-2 items-center rounded-full h-1 bg-black"
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  );
};

type SwitchStatusProps = {
  status: UploadStatus;
  onUpload: () => void;
  onAbort?: () => void;
  onDelete?: () => void;
};
const SwitchStatus = ({status, onUpload}: SwitchStatusProps) => {
  switch (status) {
    case UploadStatus.IDLE:
      return (
        <button
          className="ml-auto flex gap-2 text-themed-grey-400"
          onClick={onUpload}
        >
          <UploadIcon className="w-6 h-6" /> Browse
        </button>
      );
    case UploadStatus.UPLOADING:
      return (
        <button className="ml-auto text-themed-grey-400">
          <Cross1Icon className="w-6 h-6" />
        </button>
      );
    case UploadStatus.UPLOADED:
      return (
        <div className="ml-auto flex items-center gap-4">
          <p className="text-[14px] font-medium leading-4">Uploaded</p>
          <button>
            <TrashIcon className="w-6 h-6 text-themed-grey-400" />
          </button>
        </div>
      );
  }
};

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));
const UploadButton = ({children}: PropsWithChildren) => {
  const ref = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState(UploadStatus.IDLE);

  const [progress, setProgress] = useState(0);

  useEventListener<'change', HTMLInputElement>(
    'change',
    e => {
      const target = e.target as HTMLInputElement;

      if (!target.files) return;

      setStatus(UploadStatus.UPLOADING);

      const interval = setInterval(() => {
        setProgress(prev => prev + 10);
      }, 100);

      delay(3500).then(() => {
        setProgress(0);
        clearInterval(interval);
        setStatus(UploadStatus.UPLOADED);
      });
    },
    ref,
  );

  return (
    <motion.div className="p-5 max-w-[450px] bg-themed-grey-100 rounded-[20px] flex flex-col">
      <div className="flex w-full items-center  gap-2.5">
        <DocumentAttachmentIcon className="min-w-[24px] min-h-[24px] max-w-[24px] max-h-[24px]" />
        <span className="w-fit">{children}</span>
        <SwitchStatus
          status={status}
          onUpload={() => ref.current?.click()}
        />
      </div>
      <AnimatePresence>
        {status === UploadStatus.UPLOADING ? (
          <motion.div
            initial={{height: 0, opacity: 0}}
            exit={{height: 0, opacity: 0}}
            animate={{height: '16px', opacity: 1}}
            className="w-full h-[16px] items-end flex overflow-hidden"
          >
            <LoadingIndicator progress={progress} />
          </motion.div>
        ) : null}
      </AnimatePresence>
      <input
        ref={ref}
        type="file"
        hidden
      />
    </motion.div>
  );
};

export default function Page() {
  return (
    <div className="px-4 pb-4 lg:pb-4 lg:pl-[22px] lg:pr-[40px] lg:pt-[40px]">
      <DashboardPageLayout title={<Title />}>
        <div className="flex flex-col h-full gap-10">
          <div className="flex flex-wrap-reverse gap-[30px] w-full">
            <div className="gap-[10px] flex-1 flex flex-col">
              <UploadButton>Commercial registration number</UploadButton>
              <UploadButton>Commercial register excerpt</UploadButton>
              <UploadButton>Taxpayer ID number</UploadButton>
              <UploadButton>VAT identification number</UploadButton>
              <UploadButton>Payment account information</UploadButton>
              <UploadButton>Proof of address</UploadButton>
              <UploadButton>Proof of ID</UploadButton>
              <UploadButton>Articles of incorporation</UploadButton>
            </div>

            <div className="ml-auto md:flex hidden mb-auto w-fit h-fit gap-[30px] max-w-[544px] rounded-3xl md:p-[30px] p-5 bg-themed-black-primary text-white md:flex-row flex-nowrap flex-row-reverse">
              <div className="w-fit text-wrap">
                <p className="font-bold leading-6 md:text-md text-[18px] tracking-tight text-nowrap">
                  We have started checking
                </p>
                <p className="leading-[1.3rem] md:text-sm text-xs tracking-wide mt-[10px]">
                  It will take us 48 hours to confirm your documents and open access to the platform
                </p>
                <button className="mt-[20px] rounded-full bg-white text-themed-black-primary px-[30px] py-[15px]">
                  Cancel
                </button>
              </div>

              <div className="w-fit relative">
                <Timer />
                <div className="absolute w-full h-full left-0 top-0 flex flex-col items-center justify-center">
                  <p className="font-medium leading-10 tracking-tight text-lg">45:40</p>
                  <p className="text-[14px]">time left</p>
                </div>
              </div>
            </div>

            <div className="ml-auto md:hidden gap-5 flex mb-auto w-fit h-fit flex-col  rounded-3xl md:p-[30px] p-5 bg-themed-black-primary text-white">
              <div className="flex gap-5 ">
                <div className="relative h-fit text-nowrap">
                  <Timer />
                  <div className="absolute z-50 w-full h-full left-0 top-0 flex flex-col items-center justify-center">
                    <p className="font-medium md:leading-10 tracking-tight md:text-lg text-[18px]">45:40</p>
                    <p className="md:text-[14px] text-xs">time left</p>
                  </div>
                </div>
                <div className="w-fit text-wrap">
                  <p className="font-bold leading-6 md:text-md text-[18px] tracking-wide">
                    We have started checking
                  </p>
                  <p className="leading-[1.3rem] md:text-sm text-xs tracking-wide mt-[10px]">
                    It will take us 48 hours to confirm your documents and open access to the
                    platform
                  </p>
                </div>
              </div>

              <button className=" rounded-full bg-white text-themed-black-primary px-[30px] py-[15px]">
                Cancel
              </button>
            </div>
          </div>

          <div className="flex sm:flex-row flex-col mt-auto sm:gap-4 gap-2">
            <button
              className="
            flex items-center sm:text-sm text-[14px] justify-center sm:h-button-lg h-button-md   px-6 transition rounded-full bg-themed-black-primary text-themed-grey-100 hover:opacity-85
            py-5"
            >
              Upload
            </button>
            <button
              className="
            flex items-center sm:text-sm text-[14px] justify-center sm:h-button-lg h-button-md  transition rounded-full hover:opacity-85
            px-[30px] text-black bg-white"
            >
              Save for later
            </button>
          </div>
        </div>
      </DashboardPageLayout>
    </div>
  );
}
