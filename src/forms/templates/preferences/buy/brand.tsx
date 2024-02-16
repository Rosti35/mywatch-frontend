import {BrandList} from '@/sections/brand/brand-list';
import {PlusIcon} from '@/ui/common/icons/plus';

export const Brand = () => {
  return (
    <div className="h-full max-h-[400px] gap-7 overflow-auto">
      <div className="flex w-full mb-7 items-center">
        <p className="sm:text-md text-sm font-semibold">Brand</p>

        <button className="ml-auto bg-themed-grey-200 hover:bg-themed-grey-300 flex items-center gap-2 rounded-full py-[6px] px-4 sm:text-sm text-xs">
          <PlusIcon className="w-5 h-5" />
          Is the brand not on the list?
        </button>
      </div>

      <BrandList />
    </div>
  );
};
