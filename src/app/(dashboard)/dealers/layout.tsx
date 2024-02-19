export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="p-4 h-full flex gap-5 overflow-auto">
      <div className="flex-col lg:flex gap-2 w-full h-full pr-5">{children}</div>
    </div>
  );
}
