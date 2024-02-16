'use client';

import {NotificationSwitch} from '@/sections/notification';
import {SettingsLayout} from '../_layouts/settings';

export default function Page() {
  return (
    <SettingsLayout title="Notification settings">
      <NotificationSwitch
        label="Comments"
        className="pb-5  border-b border-b-themed-grey-200"
      >
        These are notifications for comments on your posts and replies to your comments.
      </NotificationSwitch>

      <NotificationSwitch
        label="Reminders"
        className="py-5"
      >
        These are notifications for comments on your posts and replies to your comments.
      </NotificationSwitch>

      <NotificationSwitch
        label="Comments"
        className="py-5 border-t border-t-themed-grey-200"
      >
        These are notifications for comments on your posts and replies to your comments.
      </NotificationSwitch>
    </SettingsLayout>
  );
}
