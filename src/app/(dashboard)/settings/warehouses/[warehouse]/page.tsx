import {Warehouse} from '@/forms/templates/edit/warehouse';
import {SettingsLayout} from '../../_layouts/settings';

export default function Page() {
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
