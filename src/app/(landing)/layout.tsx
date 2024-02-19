import {Navbar} from '@/sections/standalone/navbar';
import {Footer} from '@/sections/standalone/footer';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="flex flex-col px-100 pb-[132px] pt-9 space-y-[60px] bg-themed-grey-200">
        <Navbar />
        {children}
      </main>
      <Footer />
    </>
  );
}
