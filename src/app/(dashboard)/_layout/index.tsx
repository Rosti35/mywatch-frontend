export const Title = ({children}: Readonly<{children: React.ReactNode}>) => (
  <div className="text-lg font-bold leading-10 mb-[30px]">{children}</div>
);

export const DashboardWrapper = ({children}: Readonly<{children: React.ReactNode}>) => (
  <div className="h-full flex overflow-hidden">
    <div className="flex-col lg:flex w-full h-full pt-[30px] flex">{children}</div>
  </div>
);

export function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <DashboardWrapper>{children}</DashboardWrapper>;
}

export function DashboardPageLayout({
  children,
  title,
}: Readonly<{
  children: React.ReactNode;
  title: string;
}>) {
  return (
    <div className="overflow-hidden flex flex-col ">
      <Title>{title}</Title>

      {children}
    </div>
  );
}
