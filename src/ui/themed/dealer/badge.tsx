import {StarIcon} from '@/ui/common/icons/star';

export const DealerRating = () => {
  return (
    <span className="flex gap-2 items-center">
      <StarIcon className="w-4 h-4 text-yellow-500" />
      4.8
      <span className="text-themed-grey-400">(543 deals)</span>
    </span>
  );
};

type DealerBadgeProps = {
  rating?: number;
  deals?: number;
  variant: 'lg' | 'md' | 'sm';
};
export const DealerBadge = ({variant}: DealerBadgeProps) => {
  switch (variant) {
    case 'md':
      return (
        <div className="mt-4 flex items-center gap-3">
          <div className="w-[60px] h-[60px] rounded-full bg-blue-800" />
          <div className="leading-7">
            <p className="font-bold">Ineichen Zuriсh</p>
            <DealerRating />
          </div>
        </div>
      );

    case 'sm':
      return (
        <div className="mt-auto flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-800" />
          <div>
            Ineichen Zuriсh
            <DealerRating />
          </div>
        </div>
      );
  }
};
