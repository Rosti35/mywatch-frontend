import {Logo} from '@/ui/common/branding/logo';

export const Navbar = () => (
  <nav className="flex justify-between gap-2 h-12 whitespace-nowrap px-3">
    <div className="mr-auto flex gap-[10px]">
      <span>
        <Logo />
      </span>

      <span className="my-auto rounded-full border border-themed-black-primary text-sm font-light items-center justify-center flex px-[10px] w-[55px] h-[23px]">
        beta
      </span>
    </div>

    <button className="ml-auto transition rounded-full px-6 hover:bg-black hover:text-white">
      Log in
    </button>

    <button className="rounded-full transition text-white bg-black px-6">Join now</button>
  </nav>
);
