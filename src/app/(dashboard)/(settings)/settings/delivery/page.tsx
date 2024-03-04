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
      <div className="h-full px-4 pb-4 sm:p-0">
        <div className="grid md:grid-cols-2 grid-cols-1 sm:gap-5 gap-[10px]">
          <DelieveryAddressPreview {...passingProps} />
          <DelieveryAddressPreview {...passingProps} />
          <DelieveryAddressPreview {...passingProps} />
        </div>
      </div>
    </SettingsLayout>
  );
}
