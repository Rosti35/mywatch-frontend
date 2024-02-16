import {Address} from '@/forms/templates/edit/address';
import {Params} from 'next/dist/shared/lib/router/utils/route-matcher';
import {SettingsLayout} from '../../_layouts/settings';

export default function Page(_params: Params) {
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
