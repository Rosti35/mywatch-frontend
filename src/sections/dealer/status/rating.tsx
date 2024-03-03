import {CardRoot} from '@/ui/common/card';
import {StarIcon} from '@/ui/common/icons/star';

export const RatingStatus = () => {
  return (
    <CardRoot className="w-full h-full sm:p-6 p-5 gap-4">
      <p className="text-xs sm:leading-7 sm:text-sm">Rating</p>

      <p className="sm:text-lg text-md sm:leading-8 leading-8 sm:gap-[16px] gap-[10px] font-semibold flex flex-wrap sm:flex-nowrap items-center">
        5.0
        <span className="text-sm [&>*]:w-5 [&>*]:h-5 font-normal sm:[&>*]:w-6  sm:[&>*]:h-6 text-yellow-400 flex gap-[5px]">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </span>
      </p>
    </CardRoot>
  );
};
