import {TextField} from '../fields/text';
import {InputHTMLAttributes, PropsWithChildren, createContext, useContext, useState} from 'react';
import {Option} from '@/ui/common/combobox';
import {AnimatePresence, motion} from 'framer-motion';
import {defaultTransition} from '@/ui/util';

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

export const SearchField = (props: InputHTMLAttributes<HTMLInputElement>) => {
  const {setOpen} = useSearch();

  return (
    <TextField
      {...props}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    />
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
