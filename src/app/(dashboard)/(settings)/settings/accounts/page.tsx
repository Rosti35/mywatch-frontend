'use client';

import {sampleBank} from '@/fake';
import {SettingsLayout} from '../_layouts/settings';
import {useCardActions} from '@/hooks/use-card-actions';
import {BankAccountPreview, BankAccountPreviewBTC} from '@/sections/preview/bank';
import {EmptyCard} from '@/ui/common/card';
import Link from 'next/link';

export default function Page() {
  const actions = useCardActions();

  const passingProps = {...sampleBank, ...actions};

  return (
    <SettingsLayout
      title="Bank accounts"
      showSaveButton={false}
    >
      <div className="h-full px-4 sm:px-0">
        <div className="grid md:grid-cols-2 grid-cols-1 sm:gap-5 gap-[10px]">
          <BankAccountPreview {...passingProps} />
          
          <BankAccountPreviewBTC {...passingProps} />
          <BankAccountPreview {...passingProps} />
          <Link href="/settings/accounts/1">
            <EmptyCard />
          </Link>
        </div>
      </div>
    </SettingsLayout>
  );
}
