import {Navbar} from '@/sections/standalone/navbar';
import {Footer} from '@/sections/standalone/footer';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="md:px-24 px-5 pt-9 pb-32 flex flex-col gap-16 bg-themed-grey-200">
        <Navbar />
        {children}
      </main>
      <Footer />
    </>
  );
}
