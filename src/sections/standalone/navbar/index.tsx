import {Logo} from '@/ui/common/branding/logo';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/ui/common/dialog';
import {Button} from '@/ui/themed/button';
import {TextField} from '@/ui/themed/fields/text';
import Link from 'next/link';

export function SignInDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="md"
          className="bg-transparent rounded-xl ml-auto hover:bg-themed-grey-300 text-black"
        >
          Log in
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-themed-grey-100 gap-[30px] rounded-[32px] p-[40px]">
        <DialogHeader>
          <DialogTitle>Log in to mywatch</DialogTitle>
          <DialogDescription>Dont have an account? Sign up</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-[10px]">
          <TextField
            placeholder="E-mail"
            type="email"
          />

          <TextField
            placeholder="Password"
            type="password"
          />

          <Button>Log in</Button>

          <Link
            href="/forgot-password"
            className="mt-[6px]"
          >
            Forgot password?
          </Link>
        </div>
        <DialogFooter className="w-full items-stretch">
          <Button className="w-full bg-white text-themed-black-primary">Apple</Button>
          <Button className="w-full bg-white text-themed-black-primary">Google</Button>
          <Button className="w-full bg-white text-themed-black-primary">Mobile App</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export const Navbar = () => (
  <nav className="flex justify-between gap-2 whitespace-nowrap px-3 mt-9">
    <div className="mr-auto flex max-h-[50px] gap-[10px] w-full">
      <Logo />

      <span className="my-auto rounded-full border border-themed-black-primary text-sm font-light items-center justify-center flex px-[10px] w-[55px] h-[23px]">
        beta
      </span>
    </div>

    <div className="gap-2 md:flex hidden">
      <SignInDialog />

      <Button
        size="md"
        className="rounded-xl"
      >
        Join now
      </Button>
    </div>
  </nav>
);
