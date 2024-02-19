import {Sidebar} from '@/sections/standalone/sidebar';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex h-screen bg-themed-grey-200">
      <div className="w-full hidden xl:block p-2 max-w-64 ">
        <Sidebar />
      </div>
      <div className="ml-5 w-full">{children}</div>
    </main>
  );
}
