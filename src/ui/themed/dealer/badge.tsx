import {StarIcon} from '@/ui/common/icons/star';

export const DealerRating = () => {
  return (
    <span className="flex gap-2 items-center">
      <div className="flex gap-2 items-center">
        <StarIcon className="w-4 h-4 text-yellow-500" />
        <span className="text-[14px]">4.8</span>
      </div>
      <span className="text-[#737373] text-xs sm:text-[14px]">543 deals</span>
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
        <div className="flex items-center sm:gap-[14px] gap-[10px]">
          <div className="w-[60px] h-[60px] rounded-full bg-blue-800" />
          <div className="flex flex-col">
            <p className="font-bold mb-[3px] leading-5  tracking-wide text-[18px]">
              Ineichen Zuriсh
            </p>
            <DealerRating />
          </div>
        </div>
      );

    case 'sm':
      return (
        <div className="mt-auto flex items-center sm:gap-3 gap-[10px]">
          <div className="w-10 h-10 rounded-full bg-blue-800" />
          <div>
            <p className="tracking-wide">Ineichen Zuriсh</p>
            <DealerRating />
          </div>
        </div>
      );
  }
};
