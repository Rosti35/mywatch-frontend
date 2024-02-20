import Image from 'next/image';

import IneichenSVG from '@/ui/common/svg/ineichen.svg';
import AppStoreSVG from '@/ui/common/svg/app-store.svg';
import GAppsSVG from '@/ui/common/svg/g-app.svg';
import {Logo} from '@/ui/common/branding/logo';

export const Footer = () => (
  <div className=" md:px-28 px-10 items-center py-20 flex min-h-80 text-sm text-white bg-themed-black-primary ">
    <div className="flex gap-24 justify-between w-full">
      <div className="flex flex-col gap-10 md:max-w-52 mb-auto w-full">
        <Logo className="text-white" />
        <p>
          <span className="font-bold">B2B</span> innovative worldwide platform for watch traders
        </p>
      </div>

      <div className="flex gap-16 flex-wrap justify-center ml-auto bg-zinc-800">
        <div className="flex gap-2 flex-col w-fit">
          <p className="font-bold">About</p>

          <a href="#out-story">Our story</a>
          <a href="#mission">Mission</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="flex gap-2 flex-col w-fit">
          <p className="font-bold">Company</p>

          <a href="#press">Press</a>
          <a href="#brand-assets">Brand assets</a>
          <a href="#terms-of-service">Terms of service</a>
          <a href="#privacy-policy">Privacy policy</a>
        </div>

        <div className="border border-white/20 rounded-3xl flex justify-center flex-col items-center gap-4 py-6 text-xs max-w-64 px-9 text-center">
          The project is supported by one of the largest auction houses
          <Image
            src={IneichenSVG}
            alt=""
          />
        </div>

        <div className="flex gap-2 flex-col w-fit">
          <p className="font-bold">Our apps</p>

          <button className="rounded h-12 hover:bg-themed-grey-500  transition-all border border-white/10">
            <Image
              src={GAppsSVG}
              alt=""
            />
          </button>

          <button className="rounded h-12 hover:bg-themed-grey-500 transition-all border border-white/10">
            <Image
              src={AppStoreSVG}
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  </div>
);
