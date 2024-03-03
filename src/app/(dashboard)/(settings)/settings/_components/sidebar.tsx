import {Title} from '@/app/(dashboard)/_layout';
import {LinksList} from './links';

export const SettingsSidebar = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <span className="sm:px-0 px-4">
        <Title>Settings</Title>
      </span>

      <span className="font-normal text-sm">
        <LinksList />
      </span>
    </div>
  );
};
