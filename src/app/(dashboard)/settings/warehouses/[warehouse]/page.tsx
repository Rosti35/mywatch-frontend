import {Warehouse} from '@/forms/templates/edit/warehouse';
import {Params} from 'next/dist/shared/lib/router/utils/route-matcher';
import {SettingsLayout} from '../../_layouts/settings';

export default function Page(_params: Params) {
  return (
    <SettingsLayout
      title="Warehouse"
      showBack
      back="Back to list"
    >
      <Warehouse />
    </SettingsLayout>
  );
}
