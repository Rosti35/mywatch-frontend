'use client';

import {sampeDelieveryAddress} from '@/fake';
import {DelieveryAddressPreview} from '@/sections/preview/delivery';
import {SettingsLayout} from '../_layouts/settings';
import {useCardActions} from '@/hooks/use-card-actions';

export default function Page() {
  const actions = useCardActions();

  const passingProps = {...sampeDelieveryAddress, ...actions};

  return (
    <SettingsLayout
      title="Delivery addresses"
      showSaveButton={false}
    >
      <div className="h-full overflow-auto">
        <div className="overflow-auto grid grid-cols-2 gap-5">
          <DelieveryAddressPreview {...passingProps} />
          <DelieveryAddressPreview {...passingProps} />
          <DelieveryAddressPreview {...passingProps} />
        </div>
      </div>
    </SettingsLayout>
  );
}
