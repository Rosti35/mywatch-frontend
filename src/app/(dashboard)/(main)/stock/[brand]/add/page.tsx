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
    <div className="sm:pt-[39px] sm:pr-[40px] sm:pl-[22px] p-4 overflow-x-auto py-5">
      <div className="flex gap-[50px]  w-full h-full">
        <div className="flex flex-1 flex-col sm:gap-[54px] gap-6 w-full h-full">
          <div className="flex flex-col sm:gap-4 gap-2 ">
            <Link
              href="/stock"
              className="w-fit flex items-center sm:gap-2 gap-1 font-medium"
            >
              <ArrowLeftIcon className="w-6 h-6" />
              Back to search
            </Link>
            <div className="flex w-full">
              <div className="flex flex-col sm:mt-[3px] sm:gap-[15px] gap-2">
                <p className="sm:text-lg text-md font-semibold sm:leading-7 leading-6 tracking-tight">
                  Daytona Stainless Steel Black Dial
                </p>

                <p className="sm:text-md text-sm text-nowrap sm:gap-[14px] gap-1  flex flex-col sm:flex-row">
                  Rolex
                  <span className="sm:text-[18px] text-xs sm:leading-9 text-themed-grey-500">
                    Reference number: 116520-0015
                  </span>
                </p>
              </div>

              <div className="max-w-[100px] sm:hidden block max-h-[100px] h-fit  aspect-square w-full ml-auto bg-black"></div>
            </div>
          </div>

          <div className="flex flex-col sm:gap-[30px] gap-[15px] w-full">
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-3">
                <p className="sm:text-[20px] text-[18px] font-semibold">Upload photos</p>

                <button className="w-[186px] sm:h-[184px] h-[120px] sm:leading-5 flex-col gap-2 p-8 text-themed-grey-500 bg-themed-grey-100  rounded-3xl items-center justify-center flex">
                  <UploadIcon className="min-w-6 max-w-6 max-h-6 min-h-6" />
                  Select files or drag and drop
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:gap-[14px] gap-[10px] text-nowrap ">
              <p className="sm:text-[20px] text-[18px] font-semibold">Condition</p>
              <div className="flex gap-[10px] overflow-auto p-1 rounded-full">
                <Button size='md' className="rounded-full gap-1 bg-themed-grey-100 justify-center text-themed-black-primary h-[50px] border border-themed-black-primary sm:pl-4  sm:pr-6 flex items-center">
                  <CheckIcon className="w-9 h-9 stroke-current ml-auto text-black" />
                  <span className="tracking-wide">Brand new</span>
                </Button>
                <Button size='md' className="bg-themed-grey-100 text-themed-black-primary px-6">
                  Like new
                </Button>
                <Button size='md' className="bg-themed-grey-100 text-themed-black-primary px-6">Good</Button>
                <Button size='md' className="bg-themed-grey-100 text-themed-black-primary px-6">Fair</Button>
              </div>
              <div className="flex sm:gap-10 gap-8 leading-6">
                <Checkbox>Original Box</Checkbox>
                <Checkbox>Original Papers</Checkbox>
              </div>
            </div>

            <div className="flex flex-col gap-4 w-full">
              <p className="sm:text-[20px] text-[18px] sm:leading-7 font-semibold">Year</p>
              <div className="flex gap-[10px] max-w-48 w-full">
                <Select
                  options={[]}
                  placeholder="Select"
                />
              </div>
            </div>
            <div className="flex flex-col gap-[14px]">
              <p className="sm:text-[20px] text-[18px] sm:leading-6 font-semibold">Suggested price</p>
              <div className="flex gap-[30px] flex-wrap sm:flex-nowrap">
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
              <p className="sm:text-[20px] text-[18px] font-semibold">
                Warehouse
                <Link
                  href="/settings/warehouses"
                  className="float-right font-medium sm:text-sm text-[14px] flex items-center gap-2"
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
              <p className="sm:text-[20px] text-[18px] font-semibold">
                Selling Options
                <Link
                  href="/settings/warehouses"
                  className="float-right font-medium flex sm:text-sm text-[14px] items-center gap-2"
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
              <p className="sm:text-[20px] text-[18px] font-semibold">Additional Info</p>
              <div className="flex gap-[30px] max-w-[600px]">
                <textarea className="rounded-xl bg-themed-grey-100 p-4 w-full resize-none min-h-[200px] outline-none h-full" />
              </div>
            </div>

            <Button className="w-fit mt-[24px] px-[40px]">Add to stock</Button>
          </div>
        </div>

        <div className="max-w-[450px] hidden sm:block max-h-[450px] h-fit min-w-[100px] min-h-[100px] aspect-square w-full ml-auto bg-black"></div>
      </div>
    </div>
  );
}
