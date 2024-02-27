import {
  ComboboxContent,
  ComboboxGroup,
  ComboboxInput,
  ComboboxRoot,
  ComboboxTrigger,
} from '@/ui/common/combobox';

export const FilterSelect = ({children}: {children: string}) => {
  return (
    <ComboboxRoot options={[]}>
      <div className="relative bg-white rounded-xl w-full flex items-center justify-center pl-5 h-[50px]">
        <ComboboxTrigger
          className="h-6 w-full"
          placeholder={children}
        />
        <ComboboxContent className="p-0 rounded-2xl w-full overflow-hidden border border-themed-grey-200">
          <ComboboxInput />
          <ComboboxGroup className="flex flex-col max-h-60 w-auto overflow-auto" />
        </ComboboxContent>
      </div>
    </ComboboxRoot>
  );
};
