'use client';

import {Secutity} from '@/forms/templates/edit/security';
import {SettingsLayout} from '../_layouts/settings';

export default function Page() {
  return (
    <SettingsLayout title="Security settings">
      <Secutity />
    </SettingsLayout>
  );
}
