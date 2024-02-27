import {CardRoot} from '@/ui/common/card';

export const TotalDealsStatus = () => {
  return (
    <CardRoot className="w-full h-full p-6 pt-5 gap-[14px]">
      <p>Total deals</p>

      <p className="text-lg gap-[10px] font-semibold flex items-center">
        <span className="leading-10">1 200</span>
        <span className="text-sm font-normal text-green-600">+ 123 this month</span>
      </p>
    </CardRoot>
  );
};
