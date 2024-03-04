import {MessageIcon} from '@/ui/common/icons/message';
import {Sidebar} from './_components';

export default function Page() {
  return (
    <div className="w-full h-full flex relative">
      <div className="sm:hidden w-full block">
        <Sidebar />
      </div>
      <div className="absolute w-full h-full text-[#A3A3A3] sm:flex hidden flex-col gap-4 items-center justify-center">
        <MessageIcon className="w-[40px] h-[40px]" />
        <span className="max-w-28 text-center">Select or start new chat</span>
      </div>
    </div>
  );
}
