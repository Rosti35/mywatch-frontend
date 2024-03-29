import {EditIcon} from '@/ui/common/icons/edit';
import {TrashIcon} from '@/ui/common/icons/trash';
import {Popover, PopoverContent, PopoverTrigger} from '@/ui/common/popover';
import {DotsVerticalIcon} from '@radix-ui/react-icons';
import {CardActions} from './types';
import {HTMLAttributes} from 'react';

const ContextMenuItem = ({children, ...props}: HTMLAttributes<HTMLButtonElement>) => (
  <button
    className="hover:bg-themed-grey-200 grid w-full gap-[10px] px-6 py-4 transition-all"
    style={{gridTemplateColumns: '1fr 2fr'}}
    {...props}
  >
    {children}
  </button>
);

export const ContextMenu = ({onEdit, onDelete}: CardActions) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button>
          <DotsVerticalIcon />
        </button>
      </PopoverTrigger>
      <PopoverContent className="flex h-fit w-32 flex-col items-center justify-center overflow-hidden rounded-3xl bg-white p-0">
        <ContextMenuItem onClick={onEdit}>
          <EditIcon className="mr-auto h-5 w-5" />
          <span className="w-full flex-1 text-[14px] text-left font-light">Edit</span>
        </ContextMenuItem>
        <ContextMenuItem onClick={onDelete}>
          <TrashIcon className="mr-auto h-5 w-5 text-red-600" />
          <span className="w-full flex-1 text-[14px] text-left text-red-600 font-light">
            Delete
          </span>
        </ContextMenuItem>
      </PopoverContent>
    </Popover>
  );
};
