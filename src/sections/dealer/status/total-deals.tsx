import {CardRoot} from '@/ui/common/card';

export const TotalDealsStatus = () => {
  return (
    <CardRoot className="w-full p-6 gap-4">
      <p>Total deals</p>

      <p className="text-lg gap-[10px] font-semibold flex items-center">
        1 200
        <span className="text-sm font-normal text-green-600">+ 123 this month</span>
      </p>
    </CardRoot>
  );
};
