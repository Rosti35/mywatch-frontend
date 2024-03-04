'use client';

import {sampleWarehouse} from '@/fake';
import {SettingsLayout} from '../_layouts/settings';
import {useCardActions} from '@/hooks/use-card-actions';
import {WarehousePreview} from '@/sections/preview/warehouse';

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
        </div>
      </div>
    </SettingsLayout>
  );
}
