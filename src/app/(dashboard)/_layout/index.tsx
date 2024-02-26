import {ReactNode, Suspense} from 'react';

export const Title = ({children}: Readonly<{children: React.ReactNode}>) => (
  <div className="text-lg font-bold leading-[32px] tracking-tight mb-[30px]">{children}</div>
);

export const DashboardWrapper = ({children}: Readonly<{children: React.ReactNode}>) => (
  <div className="h-full flex overflow-hidden">
    <div className="flex-col lg:flex w-full h-full overflow-auto flex">{children}</div>
  </div>
);

export function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <DashboardWrapper>
      <Suspense fallback={<></>}>{children}</Suspense>
    </DashboardWrapper>
  );
}

export function DashboardPageLayout({
  children,
  title,
}: Readonly<{
  children: React.ReactNode;
  title: string | ReactNode;
}>) {
  return (
    <div className="flex flex-col pt-[40px] h-full pr-[40px]">
      <Title>{title}</Title>

      <div className="h-full mb-[40px]">{children}</div>
    </div>
  );
}
