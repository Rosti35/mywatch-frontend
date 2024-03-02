'use client';

import {CardRoot} from '@/ui/common/card';
import {TabContent, TabRoot, TabTrigger} from '@/ui/themed/tabs';

export default function Subscription() {
  return (
    <div className="flex flex-col gap-4 sm:h-full">
      <span className="flex flex-col gap-4">
        <h1 className="text-lg font-semibold leading-8">My subscription</h1>
        <p className="leading-6">
          We connect trusted watch dealers around the world to make quick, convenient and
          confidential deals. Complete your sale in as little as 24 hours.
        </p>
      </span>

      <div className="flex flex-col w-full h-full overflow-hidden gap-7">
        <TabRoot
          defaultValue="tab1"
          className="flex flex-col gap-5"
        >
          <div className="flex rounded-full h-[60px] p-1 overflow-hidden bg-themed-grey-300">
            <TabTrigger
              activeClassname="text-black"
              className="px-5 flex-1 flex text-themed-grey-500 rounded-full items-center justify-center relative text-sm leading-none"
              value="tab1"
            >
              Pay yearly
            </TabTrigger>
            <TabTrigger
              activeClassname="text-black"
              className="px-5 text-themed-grey-500 relative flex-1 flex rounded-full items-center justify-center text-sm leading-none"
              value="tab2"
            >
              Pay monthly
            </TabTrigger>
          </div>

          <section className="mb-7">
            <TabContent
              value="tab1"
              className="flex gap-4"
            >
              <CardRoot className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <p className="text-md">Free</p>

                  <p>Participate in compensated research and test new, unpublished features</p>
                </div>

                <div>
                  <p className="font-bold text-[42px]">$ 0</p>
                  <p>Per month</p>
                </div>

                <button className="bg-themed-black-primary text-white rounded-full h-[60px]">
                  Subscribe
                </button>
              </CardRoot>
              <CardRoot className="flex flex-col gap-6 relative">
                <div className="absolute top-0 right-0 bg-red-600 text-white rounded-full px-2 font-semibold h-6">
                  Popular
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-md">Basic</p>

                  <p>Participate in compensated research and test new, unpublished features</p>
                </div>

                <div>
                  <p className="font-bold text-[42px]">$ 200</p>
                  <p>Per month</p>
                </div>

                <button className="bg-themed-black-primary text-white rounded-full h-[60px]">
                  Subscribe
                </button>
              </CardRoot>
              <CardRoot className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <p className="text-md">Pro</p>

                  <p>Participate in compensated research and test new, unpublished features</p>
                </div>

                <div>
                  <p className="font-bold text-[42px]">$ 500</p>
                  <p>Per month</p>
                </div>

                <button className="bg-themed-black-primary text-white rounded-full h-[60px]">
                  Subscribe
                </button>
              </CardRoot>
            </TabContent>

            <TabContent value="tab2"></TabContent>
          </section>
        </TabRoot>
      </div>
    </div>
  );
}
