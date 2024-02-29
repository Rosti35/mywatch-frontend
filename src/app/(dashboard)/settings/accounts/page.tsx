'use client';

import {sampleBank} from '@/fake';
import {SettingsLayout} from '../_layouts/settings';
import {useCardActions} from '@/hooks/use-card-actions';
import {BankAccountPreview} from '@/sections/preview/bank';

export default function Page() {
  const actions = useCardActions();

  const passingProps = {...sampleBank, ...actions};

  return (
    <SettingsLayout title="Bank accounts">
      <div className="h-full">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
          <BankAccountPreview {...passingProps} />
          <BankAccountPreview {...passingProps} />
          <BankAccountPreview {...passingProps} />
        </div>
      </div>
    </SettingsLayout>
  );
}
