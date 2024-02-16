import {Address} from '@/forms/templates/edit/address';
import {SettingsLayout} from '../../_layouts/settings';

export default function Page() {
  return (
    <SettingsLayout
      title="Address"
      showBack
      back="Back to list"
    >
      <Address />
    </SettingsLayout>
  );
}
