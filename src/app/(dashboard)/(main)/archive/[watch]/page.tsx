import {MessagesLink, WatchDetails} from '@/sections/demo/watch-card';
import {
  ProductBrand,
  ProductDescription,
  ProductDescriptionLayout,
  ProductImage,
  ProductImageLayout,
  ProductPageLayout,
  ProductSeries,
} from '@/ui/layouts/product';

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

        <MessagesLink count={1} />
        <ProductDescription>
          Released in 1963, Cosmograph Daytona watches have long gone beyond just a work of
          watchmaking and have become a legend. It is the name of the model, which is strongly
          associated with the famous race track, and the characteristic
        </ProductDescription>

        <div className="mt-1.5">
          <WatchDetails />
        </div>

        <span className="mt-1 flex text-nowrap gap-5 items-center">
          <div>
            <p className="text-[14px] text-themed-grey-400">Fixed price</p>

            <div className="flex items-center gap-4">
              <p className="sm:text-[30px] text-md font-bold">33 344 $</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <p className="flex flex-col gap-1">
              <span className="sm:text-[14px] text-xs leading-4 text-themed-grey-400">Date</span>
              <span className="leading-5 sm:text-sm text-[14px]">10 dec 2023</span>
            </p>
            <p className="flex flex-col gap-1">
              <span className="sm:text-[14px] text-xs leading-4 text-themed-grey-400">Deal №</span>
              <span className="leading-5 sm:text-sm text-[14px]">463-45</span>
            </p>
          </div>
        </span>

        <div className="flex w-full gap-[14px]">
          <button className="px-10 sm:w-fit w-full sm:h-[60px] h-[50px] bg-themed-black-primary rounded-full text-white">
            Chat with seller
          </button>
        </div>
      </ProductDescriptionLayout>
    </ProductPageLayout>
  );
}
