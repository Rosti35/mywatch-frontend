'use client';

import {PropsWithChildren} from 'react';
import {DashboardWrapper, Title} from '../_layout';
import {LinksList} from './_components/links';

const SettingsLayout = ({children}: PropsWithChildren) => (
  <div className="flex h-full w-full gap-5 pb-[30px] pr-[40px]">{children}</div>
);

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <DashboardWrapper>
      <SettingsLayout>
        <div className="max-w-64 w-full h-full mt-[10px]">
          <Title>Settings</Title>

          <LinksList />
        </div>
        <div className="w-full flex flex-col flex-1 bg-themed-grey-100 h-full overflow-hidden lg:rounded-3xl sm:p-10 p-5 gap-7">
          {children}
        </div>
      </SettingsLayout>
    </DashboardWrapper>
  );
}
