'use client';
import { ComboboxContent, ComboboxInput, ComboboxRoot, ComboboxTrigger } from '@/ui/common/combobox';
import { ComboboxPlaceholder } from '@/ui/themed/combobox';

const SearchLot = () => <ComboboxRoot options={options}>
    <ComboboxPlaceholder placeholder={placeholder}>
        <ComboboxTrigger className="h-6 w-full" />
        <ComboboxContent className="p-0 rounded-2xl w-full overflow-hidden border border-themed-grey-200">
            <ComboboxInput />
            <ComboboxGroup className="flex flex-col max-h-60 w-auto overflow-auto" />
        </ComboboxContent>
    </ComboboxPlaceholder>
</ComboboxRoot>;

