import {MessagesLink, SaleCountdown, WatchDetails} from '@/sections/demo/watch-card';
import {ChatDialog} from '@/sections/dialogs/chat';
import {
  ProductPageLayout,
  ProductImageLayout,
  ProductImage,
  ProductDescriptionLayout,
  ProductSeries,
  ProductBrand,
  ProductDescription,
} from '@/ui/layouts/product';
import {Cross1Icon} from '@radix-ui/react-icons';
import Link from 'next/link';

const Price = () => (
  <span className="flex text-nowrap gap-6 py-1 items-center">
    <div>
      <p className="text-[14px] text-[#737373] leading-5 tracking-wide">Fixed price</p>

      <p className="sm:text-[30px] text-md font-bold">33 344$</p>
    </div>
    <SaleCountdown />
  </span>
);

const Actions = () => (
  <div className="flex gap-3.5 text-nowrap">
    <Link href="/stock/1/add">
      <button
        className={
          'flex items-center sm:text-sm text-[14px] justify-center sm:h-button-lg h-button-md  px-6 transition rounded-full bg-themed-black-primary text-themed-grey-100 hover:opacity-85 sm:w-fit w-full'
        }
      >
        Edit information
      </button>
    </Link>
    <button className="flex items-center sm:text-sm text-[14px] justify-center sm:h-button-lg h-button-md  px-6 transition rounded-full bg-themed-grey-300  text-themed-black-primary gap-2.5 sm:w-fit w-full hover:opacity-85">
      <Cross1Icon className="w-5 h-5" />
      Cancel
    </button>
  </div>
);

export default function Page() {
  return (
    <ProductPageLayout>
      <ProductImageLayout>
        <ProductImage />
        <ProductImage />
      </ProductImageLayout>
      <ProductDescriptionLayout>
        <ProductSeries>Daytona Stainless Steel Black Dial</ProductSeries>

        <ProductBrand>Rolex</ProductBrand>

        <Link
          href="/messages/1"
          className="lg:hidden block"
        >
          <MessagesLink count={2} />
        </Link>
        <div className="lg:block hidden">
          <ChatDialog>
            <MessagesLink count={2} />
          </ChatDialog>
        </div>

        <ProductDescription>
          Released in 1963, Cosmograph Daytona watches have long gone beyond just a work of
          watchmaking and have become a legend. It is the name of the model, which is strongly
          associated with the famous race track, and the characteristic
        </ProductDescription>

        <div className="mt-1.5">
          <WatchDetails />
        </div>

        <div className="mt-1.5">
          <Price />
        </div>

        <div className="mt-2.5">
          <Actions />
        </div>
      </ProductDescriptionLayout>
    </ProductPageLayout>
  );
}
