import {StarIcon} from '@/ui/common/icons/star';

export const RatingBadge = () => {
  return (
    <span className="flex gap-2 items-center">
      <StarIcon className="w-4 h-4 text-yellow-500" />
      4.8
      <span className="text-themed-grey-400">(543 deals)</span>
    </span>
  );
};
