import type {Metadata} from 'next';
import {Onest} from 'next/font/google';

import {cn} from '@/lib/cn';

import 'react-international-phone/style.css';
import '@/css/globals.css';

const onest = Onest({subsets: ['cyrillic']});

export const metadata: Metadata = {
  title: 'MyWatch',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(onest.className, 'bg-themed-grey-100  text-[#262626] md:h-screen md:overflow-hidden sm:text-sm text-[14px] tracking-wide')}>
        {children}
      </body>
    </html>
  );
}
