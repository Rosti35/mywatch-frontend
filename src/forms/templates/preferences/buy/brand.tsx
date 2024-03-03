import {BrandList} from '@/sections/brand/brand-list';
import {PlusIcon} from '@/ui/common/icons/plus';

export const Brand = () => {
  return (
    <div className="h-full flex flex-col overflow-hidden">
      <div className="flex w-full mb-[24px] items-center">
        <p className="sm:text-md text-sm font-semibold">Brand</p>

        <button className="ml-auto sm:bg-themed-grey-200 bg-white hover:bg-themed-grey-300 flex items-center gap-2 rounded-full py-[6px] px-4 sm:text-sm text-xs">
          <PlusIcon className="w-[18px] h-[18px]" />
          Is the brand not on the list?
        </button>
      </div>

      <div className="w-full h-full overflow-auto">
      <BrandList />
      </div>
    </div>
  );
};
