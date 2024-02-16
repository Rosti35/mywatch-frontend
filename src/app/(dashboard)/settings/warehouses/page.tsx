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
      <div className="h-full overflow-auto">
        <div className="overflow-auto grid grid-cols-2 gap-5">
          <WarehousePreview {...passingProps} />
          <WarehousePreview {...passingProps} />
          <WarehousePreview {...passingProps} />
        </div>
      </div>
    </SettingsLayout>
  );
}
