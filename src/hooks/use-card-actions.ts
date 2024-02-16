import {usePathname, useRouter} from 'next/navigation';

export const useCardActions = () => {
  const navigation = useRouter();

  const pathname = usePathname();

  const onEdit = () => {
    const id = '1';
    navigation.push(`${pathname}/${id}`);
  };

  const onDelete = () => {};

  return {onEdit, onDelete};
};
