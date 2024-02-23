import Link from 'next/link';

export default function Page() {
  return (
    <div className="bg-themed-grey-200 flex h-screen flex-col gap-2 [&>*]:bg-themed-black-primary [&>*]:text-white [&>*]:w-fit [&>*]:p-1 [&>*]:rounded-md p-2">
      <Link href="/dashboard">Dashoboard</Link>
      <Link href="/dashboard?new=true">Dashoboard(new user)</Link>
      <Link href="/upload">Docs upload</Link>
      <Link href="/archive">Archive</Link>
      <Link href="/sell">Sell</Link>
      <Link href="/buy">Buy</Link>
      <Link href="/auth/signup">Sign up</Link>
      <Link href="/dealers">Dealers</Link>
      <Link href="/dealers/1">Dealer</Link>
      <Link href="/settings/company">Settings</Link>
      <Link href="/stock">Stock</Link>
      <Link href="/stock">Stock (Choose Model)</Link>
    </div>
  );
}
