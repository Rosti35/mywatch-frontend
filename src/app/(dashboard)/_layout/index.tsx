import {ReactNode, Suspense} from 'react';

export const Title = ({children}: Readonly<{children: React.ReactNode}>) => (
  <div className="text-lg font-bold leading-[32px] tracking-tight sm:mb-[30px] mb-6">
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
