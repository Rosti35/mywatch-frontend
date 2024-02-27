'use client';

import {NotificationSwitch} from '@/sections/notification';
import {SettingsLayout} from '../_layouts/settings';

export default function Page() {
  return (
    <SettingsLayout title="Notification settings">
      <NotificationSwitch
        label="Comments"
        className="pb-[19px] border-b border-b-themed-grey-200"
      >
        These are notifications for comments on your posts and replies to your comments.
      </NotificationSwitch>

      <NotificationSwitch
        label="Reminders"
        className="py-[19px]"
      >
        These are notifications for comments on your posts and replies to your comments.
      </NotificationSwitch>

      <NotificationSwitch
        label="More activity about you"
        className="py-5 border-t border-t-themed-grey-200"
      >
        These are notifications for comments on your posts and replies to your comments.
      </NotificationSwitch>
    </SettingsLayout>
  );
}
