import {PropsWithChildren} from 'react';

const LayoutScroll = ({children}: PropsWithChildren) => {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="md:pb-[40px] flex flex-col md:pr-[40px] xl:pl-0 md:pt-[40px] p-4">
        {children}
      </div>

      <div className="h-48" />
    </div>
  );
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <LayoutScroll>{children}</LayoutScroll>;
}
