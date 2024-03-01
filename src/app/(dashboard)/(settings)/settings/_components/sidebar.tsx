import {Title} from '@/app/(dashboard)/_layout';
import {LinksList} from './links';

export const SettingsSidebar = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <Title>Settings</Title>

      <span className="font-normal text-sm">
        <LinksList />
      </span>
    </div>
  );
};
