import {RatingBadge} from '@/sections/demo/watch-card';
import {CheckIcon} from '@/ui/common/icons/check';
import {StarIcon} from '@/ui/common/icons/star';
import {ReactNode, PropsWithChildren} from 'react';

export const DealerProfileAvatar = () => (
  <div className="sm:max-h-20 sm:max-w-20 max-w-[50px] my-auto w-full h-auto aspect-square rounded-full bg-blue-500" />
);
export const DealerCompanyName = () => (
  <p className="sm:text-lg text-[18px] lg:leading-[42px] font-bold sm:tracking-tight tracking-wide">Ineichen Zuriсh</p>
);

type DealerVerificationProps = {
  showSince?: boolean;
};

export const DealerRatingLabel = () => (
  <div className="flex items-center gap-[6px]">
    <StarIcon className="w-4 h-4 text-yellow-500" />
    4.8
  </div>
);

export const DealerVerificationLabel = () => (
  <span className="tracking-wide flex items-center gap-[6px]">
    <CheckIcon className="sm:w-5 sm:h-5 h-4 w-4 aspect-square text-white bg-blue-400 rounded-full" />
    Verified dealer
  </span>
);

export const DealerVerification = ({showSince}: DealerVerificationProps) => (
  <div className="flex sm:gap-[16px] sm:leading-5 gap-1 font-normal sm:text-sm text-xs text-nowrap">
    <DealerVerificationLabel />

    <span className="flex sm:text-sm text-[14px] text-nowrap gap-[10px] items-center">
      <DealerRatingLabel />
      <span className="text-themed-grey-400 sm:text-sm text-xs">(543 deals)</span>
    </span>

    {showSince ? <span className="text-themed-grey-400 sm:block hidden">Since 2023</span> : null}
  </div>
);

export const DealerProfile = ({avatar, children}: {avatar: ReactNode} & PropsWithChildren) => {
  return (
    <div className="flex sm:gap-5 gap-[14px] items-center">
      {avatar}

      <div className="flex flex-col sm:max-h-auto justify-center max-h-[50px] sm:leading-9 leading-6">
        {children}
      </div>
    </div>
  );
};
