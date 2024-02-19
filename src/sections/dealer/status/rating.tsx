import {CardRoot} from '@/ui/common/card';
import {StarIcon} from '@/ui/common/icons/star';

export const RatingStatus = () => {
  return (
    <CardRoot className="w-full p-6 gap-4">
      <p>Rating</p>

      <p className="text-lg gap-[16px] font-semibold flex items-center">
        5.0
        <span className="text-sm font-normal text-yellow-400 flex gap-[5px]">
          <StarIcon className="w-6 h-6" />
          <StarIcon className="w-6 h-6" />
          <StarIcon className="w-6 h-6" />
          <StarIcon className="w-6 h-6" />
          <StarIcon className="w-6 h-6" />
        </span>
      </p>
    </CardRoot>
  );
};
