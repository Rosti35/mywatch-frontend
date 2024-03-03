import {CardRoot} from '@/ui/common/card';

export const BlacklistStatus = () => {
  return (
    <CardRoot className="w-full h-full p-6 pt-5 gap-4">
      <p className="text-[14px]  sm:leading-8 sm:text-sm">Blacklisted</p>

      <p className="text-lg gap-[10px] sm:leading-7 leading-10 font-semibold flex items-center">0</p>
    </CardRoot>
  );
};
