import {PropsWithChildren, Suspense} from 'react';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense>
      <div className="flex flex-col w-full h-full">
        <div>{children}</div>

        <div className="h-[72px] sm:h-0" />
      </div>
    </Suspense>
  );
}
