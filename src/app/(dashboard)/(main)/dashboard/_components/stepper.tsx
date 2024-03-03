import {cn} from '@/lib/cn';
import {CheckIcon} from '@/ui/common/icons/check';

type UserStep = {
  completed: boolean;
  description: string;
};
type NewUserStepperProps = {
  steps: UserStep[];
};
export const NewUserStepper = ({steps}: NewUserStepperProps) => {
  return (
    <div className="flex z-50 overflow-x-scroll pl-[30px] md:pr-[0px] pr-[30px] gap-4 mt-auto">
      {steps.map(({completed, description}, i) => {
        return (
          <div
            key={i}
            className="sm:gap-[20px] gap-[10px] min-w-[128px] text-wrap w-full rounded-3xl bg-white/10 p-[20px] flex flex-col"
          >
            {completed ? (
              <CheckIcon className="w-6 h-6 bg-green-600 rounded-full" />
            ) : (
              <div className="w-6 h-6 border border-white rounded-full mb-auto flex items-center justify-center">
                {i + 1}
              </div>
            )}
            <p
              className={cn(
                `text-wrap mt-auto sm:text-[14px] text-xs leading-[18px] text-left  `,
                completed && 'line-through',
              )}
            >
              {description}
            </p>
          </div>
        );
      })}
    </div>
  );
};
