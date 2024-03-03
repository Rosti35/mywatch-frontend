'use client';

import {Switch} from '@/ui/common/switch';
import {SettingsLayout} from '../_layouts/settings';
import {Country} from '@/forms/templates/preferences/buy/country';

export default function Page() {
  return (
    <SettingsLayout
      title="Set up your selling preferences"
      description="Specify which watches you are interested in buying, in what condition,
    at what price range and from which country. This will allow us to
    offer you only what you need!"
    >
      <Switch id="1" className='px-4 sm:px-0'>I only want to receive offers from my partners</Switch>

      <div className="w-full px-4 sm:px-0 h-full flex sm:py-[40px] overflow-auto">
        <Country />
      </div>
    </SettingsLayout>
  );
}
