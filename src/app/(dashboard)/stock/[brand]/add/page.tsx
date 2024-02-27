'use client';

import Link from 'next/link';
import {ArrowLeftIcon, ArrowTopRightIcon} from '@radix-ui/react-icons';
import {Checkbox} from '@/ui/common/checkbox';
import {Select} from '@/ui/themed/fields/select';
import {NumericFormat} from 'react-number-format';
import {Switch} from '@/ui/common/switch';
import {CheckIcon} from '@/ui/common/icons/check';
import {UploadIcon} from '@/ui/common/icons/upload';
import {Button} from '@/ui/themed/button';

export default function Page() {
  return (
    <div className="flex gap-[50px] pr-[40px] pb-[40px] w-full pt-[40px]">
      <div className="flex flex-col gap-[54px] w-full">
        <div className="flex flex-col gap-4 ">
          <Link
            href="/stock"
            className="w-fit flex items-center gap-2 font-medium"
          >
            <ArrowLeftIcon className="w-6 h-6" />
            Back to search
          </Link>

          <p className="text-lg font-semibold leading-8">Daytona Stainless Steel Black Dial</p>

          <p className="text-md leading-8">
            Rolex
            <span className="text-[18px] ml-4 text-themed-grey-500">
              Reference number: 116520-0015
            </span>
          </p>
        </div>
        <div className="flex flex-col gap-[24px] w-full">
          <div className="flex flex-col gap-[30px]">
            <div className="flex flex-col gap-4">
              <p className="text-[20px] font-semibold">Upload photos</p>

              <button className="w-[186px] h-[184px] flex-col gap-2 p-8 text-themed-grey-500 bg-themed-grey-100  rounded-3xl items-center justify-center flex">
                <UploadIcon className="w-6 h-6" />
                Select files or drag and drop
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-[14px]">
            <p className="text-[20px] font-semibold">Condition</p>
            <div className="flex gap-[10px]">
              <button className="rounded-full gap-1 bg-themed-grey-100 justify-center h-[50px] border border-themed-black-primary pl-4 pr-6 flex items-center">
                <CheckIcon className="w-9 h-9 stroke-current ml-auto text-black" />
                <span className="tracking-wide">Brand new</span>
              </button>
              <button className="rounded-full bg-themed-grey-100 h-[50px] px-6">Like new</button>
              <button className="rounded-full bg-themed-grey-100 h-[50px] px-6">Good</button>
              <button className="rounded-full bg-themed-grey-100 h-[50px] px-6">Fair</button>
            </div>
            <div className="flex gap-10 leading-6">
              <Checkbox>Original Box</Checkbox>
              <Checkbox>Original Papers</Checkbox>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full">
            <p className="text-[20px] leading-10 font-semibold">Year</p>
            <div className="flex gap-[10px] max-w-48 w-full">
              <Select
                options={[]}
                placeholder="Select"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[14px]">
            <p className="text-[20px] font-semibold">Sugested price</p>
            <div className="flex gap-[30px]">
              <NumericFormat
                value="0"
                allowLeadingZeros={false}
                suffix=" $"
                thousandSeparator=" "
                id="lowest"
                className="h-[60px] px-4 rounded-xl max-w-[190px] outline-none"
              />

              <Switch id="acceptance">I will consider any price offers</Switch>
            </div>
          </div>

          <div className="flex flex-col gap-4 max-w-[600px]">
            <p className="text-[20px] font-semibold">
              Warehouse
              <Link
                href="/settings/warehouses"
                className="float-right font-medium flex items-center gap-2"
              >
                My warehouses <ArrowTopRightIcon className="w-6 h-6" />
              </Link>
            </p>
            <div className="flex gap-[30px] ">
              <Select
                options={[]}
                placeholder="Warehouse"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 max-w-[600px] w-full">
            <p className="text-[20px] font-semibold">
              Selling Options
              <Link
                href="/settings/warehouses"
                className="float-right font-medium flex items-center gap-2"
              >
                My presets <ArrowTopRightIcon className="w-6 h-6" />
              </Link>
            </p>
            <div className="flex gap-[30px] ">
              <Select
                options={[]}
                placeholder="Warehouse"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[20px] font-semibold">Additional Info</p>
            <div className="flex gap-[30px] max-w-[600px]">
              <textarea className="rounded-xl bg-themed-grey-100 p-4 w-full resize-none min-h-[200px] outline-none h-full" />
            </div>
          </div>

          <Button className="w-fit mt-[24px] px-[40px]">Add to stock</Button>
        </div>
      </div>
      <div className="max-w-[450px] max-h-[450px] h-full w-full ml-auto bg-themed-grey-300"></div>
    </div>
  );
}
