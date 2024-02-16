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
      <body className={cn(onest.className, 'bg-themed-black-primary')}>{children}</body>
    </html>
  );
}
