import {SubrouteTitle} from '@/ui/themed/links';
import {ReactNode, PropsWithChildren} from 'react';

export const ProductPageLayout = ({children}: {children: ReactNode}) => {
  return (
    <div className="flex flex-col sm:h-dvh sm:gap-5 md:flex-row overflow-hidden sm:pl-[23px] ">
      <span className="sm:hidden block pt-5 pl-4 sm:p-0">
        <SubrouteTitle
          href="/sell"
          back="Back to list"
        />
      </span>

      {children}
    </div>
  );
};

export const ProductImage = () => (
  <div className=" w-full  rounded-3xl sm:min-h-max min-h-[280px] h-full aspect-square bg-zinc-400" />
);

export const ProductImageLayout = ({children}: PropsWithChildren) => (
  <div className="overflow-auto w-full  h-full px-4 sm:pl-0 sm:pr-[40px] sm:pt-[40px]">
    <div className="w-full gap-4 flex  md:flex-col min-h-[280px] h-full flex-row">
      {children}
      <div className="sm:pb-[10px] sm:pr-0 pr-[0.1px]" />
    </div>
  </div>
);

export const ProductDescriptionLayout = ({children}: PropsWithChildren) => (
  <div className="w-full sm:p-0 p-4 sm:pt-[40px] sm:pr-[40px] ">
    <div className="flex flex-col gap-5 ">{children}</div>
  </div>
);

export const ProductSeries = ({children}: PropsWithChildren) => (
  <span>
    <span className="hidden sm:block">
      <SubrouteTitle
        href="/sell"
        back="Back to list"
      />
    </span>

    <p className="sm:text-lg text-md font-semibold leading-8 tracking-tight">{children}</p>
  </span>
);

export const ProductBrand = ({children}: PropsWithChildren) => (
  <p className="sm:text-md text-sm font-medium sm:leading-6 tracking-tight">{children}</p>
);

export const ProductDescription = ({children}: PropsWithChildren) => (
  <span className="leading-[24px] sm:text-sm text-[14px]  tracking-[0.1px] font-normal">
    {children}
  </span>
);
