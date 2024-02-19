import {CardRoot} from '@/ui/common/card';

export const BlacklistStatus = () => {
  return (
    <CardRoot className="w-full p-6 gap-4">
      <p>Blacklisted</p>

      <p className="text-lg gap-[10px] font-semibold flex items-center">0</p>
    </CardRoot>
  );
};
