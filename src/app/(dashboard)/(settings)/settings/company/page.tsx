'use client';

import {CompanyProfile} from '@/forms/templates/edit/profile/company';
import {SettingsLayout} from '../_layouts/settings';

export default function Page() {
  return (
    <SettingsLayout title="Company profile">
      <div className="px-4 sm:px-0">
        <CompanyProfile />
      </div>
    </SettingsLayout>
  );
}
