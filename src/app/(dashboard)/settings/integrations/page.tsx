import {IntegrationCard} from './_components/integration-card';
import {WhatsappIcon} from '@/ui/common/icons/whapsapp';
import {TelegramIcon} from '@/ui/common/icons/telegram';
import {SettingsLayout} from '../_layouts/settings';

export default function Page() {
  return (
    <SettingsLayout title="Integrations">
      <div className="overflow-auto grid grid-cols-2 gap-5">
        <IntegrationCard
          integration="Whatsapp"
          connected
        >
          <WhatsappIcon className="w-6 h-6" />
        </IntegrationCard>
        <IntegrationCard
          integration="Telegram"
          connected={false}
        >
          <TelegramIcon className="w-6 h-6" />
        </IntegrationCard>
      </div>
    </SettingsLayout>
  );
}
