import {PropsWithChildren, Suspense} from 'react';

const LayoutScroll = ({children}: PropsWithChildren) => {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-col h-full md:pr-[40px] xl:pl-0 md:pt-[40px] p-4">{children}</div>

      <div className="h-[76px] sm:h-[40px]" />
    </div>
  );
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LayoutScroll>
      <Suspense>{children}</Suspense>
    </LayoutScroll>
  );
}
