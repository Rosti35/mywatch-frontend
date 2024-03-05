import {TextField} from '../fields/text';
import {InputHTMLAttributes, PropsWithChildren, createContext, useContext, useState} from 'react';
import {Option} from '@/ui/common/combobox';
import {AnimatePresence, motion} from 'framer-motion';
import {defaultTransition} from '@/ui/util';
import {cn} from '@/lib/cn';
import {CameraIcon} from '@/ui/common/icons/camera';
import {MicIcon} from '@/ui/common/icons/mic';

type SearchContextProps = {
  query: string;
  setQuery: (query: string) => void;
  options: Option[];
  open: boolean;
  setOpen: (open: boolean) => void;
};
const SearchContext = createContext<SearchContextProps | null>(null);

type SearchProps = {
  placeholder: string;
};
export const Search = ({placeholder}: SearchProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-fit relative">
      {open ? <div className="absolute left-0 top-full w-full h-full bg-zinc-300"></div> : null}
      <TextField
        placeholder={placeholder}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
      />
    </div>
  );
};

type SearchRootProps = {
  options: Option[];
} & PropsWithChildren;
export const SearchRoot = ({options, children}: SearchRootProps) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');

  return (
    <SearchContext.Provider value={{open, setOpen, query, setQuery, options}}>
      {children}
    </SearchContext.Provider>
  );
};

const useSearch = () => {
  const context = useContext(SearchContext);

  if (!context) throw Error('SearchRoot not found');

  return context;
};

export const SearchField = ({className, ...props}: InputHTMLAttributes<HTMLInputElement>) => {
  const {setOpen} = useSearch();

  return (
    <div className="flex w-full bg-white h-[60px] items-center rounded-xl overflow-hidden">
      <input
        className={cn('w-full outline-none p-5 text-sm placeholder:text-ellipsis placeholder:overflow-hidden placeholder:text-[#262626]', className)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        {...props}
      />

      <div className="ml-auto flex py-5 pr-5 gap-5 text-themed-black-primary">
        <MicIcon className="w-6 h-6" />
        <CameraIcon className="w-6 h-6" />
      </div>
    </div>
  );
};

export const SearchContent = ({children}: PropsWithChildren<{}>) => {
  const {open} = useSearch();

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          {...defaultTransition}
          className="absolute left-0 flex mt-2 py-[10px] flex-col rounded-3xl shadow-md  top-full w-full h-fit z-50 bg-white"
        >
          {children}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};
