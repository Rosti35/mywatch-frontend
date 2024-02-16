import {Sidebar} from '@/sections/standalone/sidebar';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="lg:p-2 flex h-screen bg-themed-grey-200">
      <Sidebar />
      <div className="lg:ml-5 w-full">{children}</div>
    </main>
  );
}
