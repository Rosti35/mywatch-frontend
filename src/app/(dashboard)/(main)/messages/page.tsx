'use client';

import {MessageIcon} from '@/ui/common/icons/message';
import {Sidebar} from './_components';

export default function Page() {
  return (
    <div>
      <div className="sm:hidden flex">
        <Sidebar />
      </div>
      <div className="w-full sm:flex h-full hidden items-center justify-center">
        <div className="flex flex-col gap-4 items-center leading-5 tracking-wide justify-center max-w-28 text-center">
          <MessageIcon className="w-9 h-9 mt-1" />
          Select or start new chat
        </div>
      </div>
    </div>
  );
}
