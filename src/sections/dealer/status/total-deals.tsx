import {CardRoot} from '@/ui/common/card';

export const TotalDealsStatus = () => {
  return (
    <CardRoot className="w-full h-full sm:p-5 p-5 gap-[14px]">
      <p className="text-[14px] sm:leading-8 sm:text-sm">Total deals</p>

      <p className="text-lg gap-[10px] font-semibold sm:leading-7 flex flex-wrap sm:flex-nowrap items-center">
        <span className="leading-8 sm:text-lg text-md">1 200</span>
        <span className="sm:text-sm text-[14px] leading-2 font-normal text-green-600">
          + 123 this month
        </span>
      </p>
    </CardRoot>
  );
};
