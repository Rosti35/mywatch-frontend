import {Account} from '@/forms/templates/edit/account';
import {SettingsLayout} from '../../_layouts/settings';

export default function Page() {
  return (
    <SettingsLayout
      title="Bank account"
      showBack
      back='Back to list'
    >
      <div className="h-full overflow-auto ">
        <Account />
      </div>
    </SettingsLayout>
  );
}
