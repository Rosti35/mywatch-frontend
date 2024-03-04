import Image from 'next/image';

import IneichenSVG from '@/ui/common/svg/ineichen.svg';
import AppStoreSVG from '@/ui/common/svg/app-store.svg';
import GAppsSVG from '@/ui/common/svg/g-app.svg';
import {Logo} from '@/ui/common/branding/logo';

const MobileLayout = () => (
  <div className="flex sm:hidden gap-[60px] flex-wrap justify-center">
    <div className="flex font-normal gap-5 flex-col w-fit">
      <div className="border border-white/20 rounded-xl flex justify-center items-center gap-5 py-[25px] px-5 text-[12px] tracking-wide leading-4">
        <Image
          width={90}
          src={IneichenSVG}
          alt=""
        />
        The project is supported by one of the largest auction houses
      </div>

      <div className="flex gap-[14px]">
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

      <div className="flex gap-[70px]">
        <div className="flex font-normal gap-2 flex-col w-fit">
          <p className="font-bold leading-9 tracking-wide text-[18px]">About</p>

          <a
            href="#out-story"
            className="leading-5 tracking-wide"
          >
            Our story
          </a>
          <a
            href="#mission"
            className="leading-5 tracking-wide"
          >
            Mission
          </a>
          <a
            href="#blog"
            className="leading-6 tracking-wide"
          >
            Blog
          </a>
          <a
            href="#contact"
            className="leading-5 tracking-wide"
          >
            Contact
          </a>
        </div>
        <div className="flex gap-2 flex-col w-fit">
          <p className="font-bold leading-9 tracking-wide text-[18px]">Company</p>

          <a
            href="#press"
            className="leading-5 tracking-wide"
          >
            Press
          </a>
          <a
            href="#brand-assets"
            className="leading-5 tracking-wide"
          >
            Brand assets
          </a>
          <a
            href="#terms-of-service"
            className="leading-6 tracking-wide"
          >
            Terms of service
          </a>
          <a
            href="#privacy-policy"
            className="leading-5 tracking-wide"
          >
            Privacy policy
          </a>
        </div>
      </div>
    </div>
  </div>
);

const PCLayout = () => (
  <div className="sm:flex hidden gap-[60px]  flex-wrap justify-center">
    <div className="flex font-normal gap-2 flex-col w-fit">
      <p className="font-bold leading-9 tracking-wide text-[18px]">About</p>

      <a
        href="#out-story"
        className="leading-5 tracking-wide"
      >
        Our story
      </a>
      <a
        href="#mission"
        className="leading-5 tracking-wide"
      >
        Mission
      </a>
      <a
        href="#blog"
        className="leading-6 tracking-wide"
      >
        Blog
      </a>
      <a
        href="#contact"
        className="leading-5 tracking-wide"
      >
        Contact
      </a>
    </div>

    <div className="flex gap-2 flex-col w-fit">
      <p className="font-bold leading-9 tracking-wide text-[18px]">Company</p>

      <a
        href="#press"
        className="leading-5 tracking-wide"
      >
        Press
      </a>
      <a
        href="#brand-assets"
        className="leading-5 tracking-wide"
      >
        Brand assets
      </a>
      <a
        href="#terms-of-service"
        className="leading-6 tracking-wide"
      >
        Terms of service
      </a>
      <a
        href="#privacy-policy"
        className="leading-5 tracking-wide"
      >
        Privacy policy
      </a>
    </div>

    <div className="border border-white/20 rounded-3xl flex justify-center flex-col items-center gap-5 py-[25px] mt-1 max-w-[262px] px-[37px] text-[12px] tracking-wide leading-4 text-center">
      The project is supported by one of the largest auction houses
      <Image
        src={IneichenSVG}
        alt=""
      />
    </div>

    <div className="flex gap-2 flex-col w-fit">
      <p className="font-bold leading-9 tracking-wide text-[18px]">Our apps</p>

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
);

export const Footer = () => (
  <div className="md:px-28 px-4 md:py-[71px] py-[32px]  flex text-sm text-white bg-themed-black-primary ">
    <div className="flex md:gap-[100px] gap-5 flex-wrap md:flex-nowrap w-full h-fit">
      <div className="flex md:flex-col flex-row gap-10 md:max-w-52 mr-3 mb-auto w-full">
        <Logo className="text-white mt-[1px] md:max-w-[221px] max-w-[174px] min-w-[174px] md:min-w-[221px] w-full" />
        <p className="leading-[22px] tracking-wide">
          <span className="font-bold">B2B</span> innovative worldwide platform for watch traders
        </p>
      </div>

      <MobileLayout />
      <PCLayout />
    </div>
  </div>
);
