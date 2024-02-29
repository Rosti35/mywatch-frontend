import {Sidebar} from '@/sections/standalone/sidebar';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex h-screen bg-themed-grey-200">
      <div className="w-full hidden xl:block p-[10px] min-w-[270px] max-w-[270px]">
        <Sidebar />
      </div>
      <div className="w-full md:pl-[23px] pl-4">{children}</div>
    </main>
  );
}
