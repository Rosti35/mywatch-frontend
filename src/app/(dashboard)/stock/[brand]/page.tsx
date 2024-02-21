import Link from 'next/link';
import {ArrowLeftIcon} from '@radix-ui/react-icons';
import {CardRoot} from '@/ui/common/card';

export default function Page() {
  return (
    <div className="flex flex-col gap-[30px] mt-[10px]">
      <div className="flex flex-col gap-4 ">
        <Link
          href="/stock"
          className="w-fit flex items-center gap-2"
        >
          <ArrowLeftIcon className="w-6 h-6" />
          Back to brands
        </Link>

        <p className="text-lg font-semibold leading-8">Choose model</p>
      </div>

      <div className="flex flex-col gap-[30px] pb-[30px] pr-[40px]">
        <CardRoot className="p-[30px] bg-themed-grey-100">
          <p className="text-md font-bold leading-8 mb-5">Rolex Daytona</p>

          <div className="grid grid-cols-3 gap-5">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(k => (
              <Link
                href="/stock/brand/add"
                key={k}
              >
                <CardRoot
                  className="bg-white p-0 py-4 pr-4 w-fit flex-row gap-[10px]"
                  key={k}
                >
                  <div className="min-w-[100px] min-h-[100px] bg-zinc-500/10" />
                  <div className="flex flex-col gap-[3px] justify-center">
                    <p className="font-semibold text-sm">Rolex</p>
                    <p>Daytona Stainless Steel Black Dial</p>
                    <p className="text-themed-grey-400">Ref. 116520-0015</p>
                  </div>
                </CardRoot>
              </Link>
            ))}
          </div>
        </CardRoot>
        <CardRoot className="p-[30px] bg-themed-grey-100">
          <p className="text-md font-semibold leading-8 mb-5">Choose model</p>

          <div className="grid grid-cols-3 gap-5">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(k => (
              <Link
                href="/add"
                key={k}
              >
                <CardRoot className="bg-white p-0 py-4 pr-4 w-fit flex-row gap-[10px]">
                  <div className="min-w-[100px] flex-1 ml-auto min-h-[100px] bg-zinc-700" />
                  <div className="flex flex-col gap-[6px] justify-center">
                    <p className="font-semibold text-sm">Rolex</p>
                    <p>Daytona Stainless Steel Black Dial</p>
                    <p className="text-themed-grey-400">Ref. 116520-0015</p>
                  </div>
                </CardRoot>
              </Link>
            ))}
          </div>
        </CardRoot>
      </div>
    </div>
  );
}
