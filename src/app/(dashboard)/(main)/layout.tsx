import {PropsWithChildren} from 'react';

const LayoutScroll = ({children}: PropsWithChildren) => {
  return (
    <div className="w-full h-full">
      <div className="md:pb-[40px] md:pr-[40px] xl:pl-0 md:pt-[40px] p-4 pb-[96px] w-full h-full">
        {children}
      </div>
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
