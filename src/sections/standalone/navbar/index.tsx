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
import {AppleIcon} from '@/ui/common/icons/apple';
import {ArrowDownIcon} from '@/ui/common/icons/arrow-down';
import {GoogleIcon} from '@/ui/common/icons/google';
import {QrIcon} from '@/ui/common/icons/qr';
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
      <DialogContent className="sm:max-w-[600px]  bg-themed-grey-100 gap-[30px] rounded-[32px] p-[40px]">
        <DialogHeader>
          <DialogTitle className="sm:text-left">Log in to mywatch</DialogTitle>
          <DialogDescription className="sm:text-left flex gap-2 text-[#262626]">
            Dont have an account?
            <Link
              href="/auth/signup"
              className="underline"
            >
              Sign up
            </Link>
          </DialogDescription>
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

          <Link
            href="/dashboard"
            className="w-full"
          >
            <Button className="w-full">Log in</Button>
          </Link>

          <Link
            href="/forgot-password"
            className="mt-[6px]"
          >
            Forgot password?
          </Link>
        </div>
        <DialogFooter className="w-full flex gap-2 items-stretch">
          <Button className="w-full flex text-nowrap items-center justify-center gap-[10px] bg-white text-themed-black-primary">
            <AppleIcon className="w-6 h-6" />
            Apple
          </Button>
          <Button className="w-full flex text-nowrap items-center justify-center gap-[10px] bg-white text-themed-black-primary">
            <GoogleIcon className="w-6 h-6" />
            Google
          </Button>
          <Button className="w-full flex text-nowrap items-center justify-center gap-[10px] bg-white text-themed-black-primary">
            <QrIcon className="w-6 h-6" />
            Mobile App
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export const Navbar = () => (
  <nav className="flex justify-between gap-2 whitespace-nowrap sm:px-3 pt-4 sm:mt-9">
    <div className="mr-auto flex max-h-[50px] gap-[10px] w-full">
      <Logo />

      <span className="my-auto rounded-full sm:text-sm text-[10px] border border-themed-black-primary font-light items-center justify-center flex px-[6px] leading-4 sm:px-[10px] sm:w-[55px] sm:h-[23px]">
        beta
      </span>
    </div>

    <div className="gap-2 md:flex hidden items-center">
      <SignInDialog />

      <Button
        size="md"
        className="rounded-xl"
      >
        Join now
      </Button>

      <button className="flex ml-[30px] gap-[10px]">
        EN
        <ArrowDownIcon className="w-6 h-6" />
      </button>
    </div>
  </nav>
);
