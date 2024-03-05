'use client';

import {BrandItemProps, BrandList} from '@/sections/brand/brand-list';
import {SearchContent, SearchField, SearchRoot} from '@/ui/themed/search';
import Link from 'next/link';
import {PlusIcon} from '@/ui/common/icons/plus';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/ui/common/dialog';
import {Button} from '@/ui/themed/button';
import {TextField} from '@/ui/themed/fields/text';
import {PropsWithChildren} from 'react';
import {ImportDialog} from '@/sections/dialogs/import';

function AddBrandDialog({children}: PropsWithChildren) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[430px] bg-themed-grey-100 gap-[30px] rounded-[32px] p-[40px]">
        <DialogHeader>
          <DialogTitle>Add brand</DialogTitle>
          <DialogDescription className="leading-6">
            Just send an invitation and start making quick, convenient transactions
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-[16px]">
          <TextField placeholder="Brand name" />

          <TextField placeholder="Website" />

          <Button>Add</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

const BrandItem = ({brand}: BrandItemProps) => {
  return (
    <Link
      href="/stock/brand"
      aria-label="Brand"
      className="data-[state=on]:bg-themed-black-primary leading-[24px] tracking-wide text-left data-[state=on]:text-white hover:underline transition-all rounded-md "
    >
      {brand}
    </Link>
  );
};

const Title = () => {
  return (
    <div className="flex text-nowrap flex-wrap sm:flex-nowrap w-full items-center">
      <p className="sm:tracking-[-1px]">Add watch to stock</p>
      <ImportDialog>
        <button className="sm:ml-auto sm:block hidden tracking-[-0.02rem] sm:mt-[2px] h-[40px] text-sm font-medium px-5 rounded-full bg-themed-grey-300">
          Import from other platforms
        </button>
      </ImportDialog>
    </div>
  );
};
export default function Stock() {
  return (
    <div className="sm:pt-[36px] sm:pr-[40px] sm:pl-[22px] p-4">
      <div className="flex flex-col w-full h-full">
        <div className="sm:text-lg text-md sm:px-0 sm:mt-0 mt-[25px] font-bold sm:leading-[32px] leading-none sm:tracking-tight tracking-[-0.5px] sm:mb-[24px] mb-[18px]">
          <Title />
        </div>

        <div className="h-fit overflow-hidden w-full flex flex-col">
          <div className="space-y-[30px]">
            <div className="w-full h-fit relative">
              <SearchRoot options={[]}>
                <SearchField placeholder="Find the model you want to  add to your stock" />

                <SearchContent>
                  <div className="h-[76px] flex flex-col border-b border-b-themed-grey-200 justify-center px-[30px]">
                    <p>Rolex Daytona</p>
                    <p className="text-themed-grey-400">Series</p>
                  </div>
                  <div className="h-[76px] flex flex-col justify-center px-[30px]">
                    <p>Rolex Daytona</p>
                    <p className="text-themed-grey-400">Series</p>
                  </div>

                  <div className="h-[112px] flex border-t border-t-themed-grey-200 items-center gap-[10px] px-[30px]">
                    <div className="h-20 w-20 bg-zinc-400" />

                    <div>
                      <p>Rolex Daytona Stainless Steel Black Dial</p>
                      <p className="text-caption text-themed-grey-400">12312</p>
                    </div>
                  </div>
                  <div className="h-[112px] flex border-t border-t-themed-grey-200 items-center gap-[10px] px-[30px]">
                    <div className="h-20 w-20 bg-zinc-400" />

                    <div>
                      <p>Rolex Daytona Stainless Steel Black Dial</p>
                      <p className="text-caption text-themed-grey-400">12312</p>
                    </div>
                  </div>
                </SearchContent>
              </SearchRoot>
            </div>
            <div className="flex items-center">
              <p className="sm:text-md tracking-tight text-[18px] font-bold">Choose brand</p>
              <AddBrandDialog>
                <button className="ml-auto flex py-2 gap-2 items-center rounded-full bg-themed-grey-100 px-5">
                  <PlusIcon className="w-6 h-6" /> My brand is not listed
                </button>
              </AddBrandDialog>
            </div>
          </div>

          <div className="overflow-auto h-full space-y-[30px] py-[26px]">
            <BrandList
              template={BrandItem}
              className="sm:grid-cols-2 xl:grid-cols-4 grid-cols-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
