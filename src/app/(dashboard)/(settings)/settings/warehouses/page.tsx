'use client';

import {sampleWarehouse} from '@/fake';
import {SettingsLayout} from '../_layouts/settings';
import {useCardActions} from '@/hooks/use-card-actions';
import {WarehousePreview} from '@/sections/preview/warehouse';
import {CardRoot, EmptyCard} from '@/ui/common/card';
import {PlusIcon} from '@/ui/common/icons/plus';

export default function Page() {
  const actions = useCardActions();

  const passingProps = {...sampleWarehouse, ...actions};

  return (
    <SettingsLayout
      title="Warehouses"
      showSaveButton={false}
    >
      <div className="h-full px-4 pb-4 sm:p-0">
        <div className="grid md:grid-cols-2 grid-cols-1 sm:gap-5 gap-[10px]">
          <WarehousePreview {...passingProps} />
          <WarehousePreview {...passingProps} />
          <WarehousePreview {...passingProps} />
          <EmptyCard />
        </div>
      </div>
    </SettingsLayout>
  );
}
