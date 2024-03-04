import {ReactNode, Suspense} from 'react';

export const Title = ({children}: Readonly<{children: React.ReactNode}>) => (
  <div className="sm:text-lg text-md sm:px-0 sm:mt-0 mt-[25px] font-semibold sm:leading-[32px] leading-none sm:tracking-tight tracking-[-0.5px] sm:mb-[30px] mb-[20px]">
    {children}
  </div>
);

export function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Suspense fallback={<></>}>{children}</Suspense>;
}

export function DashboardPageLayout({
  children,
  title,
}: Readonly<{
  children: React.ReactNode;
  title: string | ReactNode;
}>) {
  return (
    <div className="flex flex-col h-full">
      <Title>{title}</Title>

      {children}
    </div>
  );
}
