import Image from 'next/image';

import IneichenSVG from '@/ui/common/svg/ineichen.svg';
import AppStoreSVG from '@/ui/common/svg/app-store.svg';
import GAppsSVG from '@/ui/common/svg/g-app.svg';
import {Logo} from '@/ui/common/branding/logo';

export const Footer = () => (
  <div className="px-28 py-[71px] max-h-[317px] h-[317px] flex text-sm text-white bg-themed-black-primary ">
    <div className="flex gap-[100px] w-full h-fit">
      <div className="flex flex-col gap-10 md:max-w-52 mr-3 mb-auto w-full">
        <Logo className="text-white max-w-[221px] min-w-[221px] w-full" />
        <p className="leading-[20px]">
          <span className="font-bold">B2B</span> innovative worldwide platform for watch traders
        </p>
      </div>

      <div className="flex gap-[60px] flex-wrap justify-center">
        <div className="flex font-normal gap-2 flex-col w-fit">
          <p className="font-bold leading-7 tracking-wide text-[18px]">About</p>

          <a
            href="#out-story"
            className="leading-6"
          >
            Our story
          </a>
          <a
            href="#mission"
            className="leading-5"
          >
            Mission
          </a>
          <a
            href="#blog"
            className="leading-6"
          >
            Blog
          </a>
          <a
            href="#contact"
            className="leading-5"
          >
            Contact
          </a>
        </div>

        <div className="flex gap-2 flex-col w-fit">
          <p className="font-bold leading-7 tracking-wide text-[18px]">Company</p>

          <a
            href="#press"
            className="leading-6"
          >
            Press
          </a>
          <a
            href="#brand-assets"
            className="leading-5"
          >
            Brand assets
          </a>
          <a
            href="#terms-of-service"
            className="leading-6"
          >
            Terms of service
          </a>
          <a
            href="#privacy-policy"
            className="leading-5"
          >
            Privacy policy
          </a>
        </div>

        <div className="border border-white/20 rounded-3xl flex justify-center flex-col items-center gap-5 py-[25px] max-w-64 px-[37px] text-[12px] tracking-tight leading-4 text-center">
          The project is supported by one of the largest auction houses
          <Image
            src={IneichenSVG}
            alt=""
          />
        </div>

        <div className="flex gap-2 flex-col w-fit px-2">
          <p className="font-bold leading-7 tracking-wide text-[18px]">Our apps</p>

          <button className="rounded h-12 hover:bg-themed-grey-500 transition-all border border-white/10">
            <Image
              src={AppStoreSVG}
              alt=""
            />
          </button>

          <button className="rounded h-12 hover:bg-themed-grey-500  transition-all border border-white/10">
            <Image
              src={GAppsSVG}
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  </div>
);
