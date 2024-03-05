import {Navbar} from '@/sections/standalone/navbar';
import {Footer} from '@/sections/standalone/footer';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col overflow-auto h-full">
      <main className="flex flex-col px-4 md:px-100 pb-[132px] sm:space-y-[60px] space-y-[36px] bg-themed-grey-200">
        <Navbar />
        {children}
      </main>
      <Footer />
    </div>
  );
}
