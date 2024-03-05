import {Warehouse, WatchDetails} from '@/sections/demo/watch-card';
import {TimeIcon} from '@/ui/common/icons/time';
import {
  ProductBrand,
  ProductDescription,
  ProductDescriptionLayout,
  ProductImage,
  ProductImageLayout,
  ProductPageLayout,
  ProductSeries,
} from '@/ui/layouts/product';
import {DealerBadge} from '@/ui/themed/dealer/badge';

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

        <ProductDescription>
          Released in 1963, Cosmograph Daytona watches have long gone beyond just a work of
          watchmaking and have become a legend. It is the name of the model, which is strongly
          associated with the famous race track, and the characteristic
        </ProductDescription>

        <div className="mt-1.5">
          <WatchDetails />
        </div>

        <span className="mt-[10px]">
          <p className="text-[14px] text-[#737373]">Fixed price</p>

          <div className="flex items-center gap-3">
            <p className="sm:text-[30px] text-md font-bold">33 344 $</p>
            <span className="sm:flex hidden gap-1">
              <TimeIcon className="w-6 h-6 text-themed-grey-400" />
              10:59:59
            </span>
          </div>
        </span>

        <div className="sm:hidden flex justify-between">
          <span className="w-full mr-9 text-nowrap">
            <DealerBadge variant="sm" />
          </span>
          <span className="w-full">
            <Warehouse />
          </span>
        </div>

        <div className="mt-1 flex sm:gap-[14px] gap-2 text-nowrap">
          <button
            className="
          flex items-center text-sm justify-center sm:h-button-lg h-button-md transition rounded-full hover:opacity-85
       bg-themed-black-primary sm:w-fit w-full sm:px-[40px] text-themed-grey-100
          "
          >
            I want to buy
          </button>
          <button
            className="
          flex items-center text-sm justify-center sm:h-button-lg h-button-md transition rounded-full hover:opacity-85
          bg-themed-grey-100 sm:w-fit w-full sm:px-[40px] text-themed-black-primary"
          >
            Counter offer
          </button>
        </div>

        <span className="hidden sm:block">
          <DealerBadge variant="md" />
        </span>
      </ProductDescriptionLayout>
    </ProductPageLayout>
  );
}
