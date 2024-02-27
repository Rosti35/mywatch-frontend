import {Logo} from '@/ui/common/branding/logo';
import {Button} from '@/ui/themed/button';

export const Navbar = () => (
  <nav className="flex justify-between gap-2 whitespace-nowrap px-3 mt-9">
    <div className="mr-auto flex max-h-[50px] gap-[10px] w-full">
      <Logo />

      <span className="my-auto rounded-full border border-themed-black-primary text-sm font-light items-center justify-center flex px-[10px] w-[55px] h-[23px]">
        beta
      </span>
    </div>

    <Button
      size="md"
      className="bg-transparent rounded-xl ml-auto hover:bg-themed-grey-300 text-black"
    >
      Log in
    </Button>

    <Button
      size="md"
      className="rounded-xl"
    >
      Join now
    </Button>
  </nav>
);
