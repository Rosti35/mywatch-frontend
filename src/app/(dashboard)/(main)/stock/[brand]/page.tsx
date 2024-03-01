import Link from 'next/link';
import {CardRoot} from '@/ui/common/card';
import {GoBack} from '@/app/(dashboard)/_components/go-back';
import {DashboardPageLayout} from '@/app/(dashboard)/_layout';

const Title = () => (
  <GoBack
    label="Back to brands"
    href="/stock"
  >
    Choose model
  </GoBack>
);

export default function Page() {
  return (
    <DashboardPageLayout title={<Title />}>
      <div className="flex flex-col gap-[30px]">
        <div className="flex flex-col gap-[30px]">
          <CardRoot className="p-[30px] bg-themed-grey-100">
            <p className="text-md font-bold leading-8 mb-1">Rolex Daytona</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(k => (
                <Link
                  href="/stock/brand/add"
                  key={k}
                  className="w-full"
                >
                  <CardRoot
                    className="bg-white p-0 py-4 pr-4 w-full flex-row gap-[10px]"
                    key={k}
                  >
                    <div className="min-w-[100px] min-h-[100px] bg-zinc-500/10" />
                    <div className="flex flex-col gap-[3px] justify-center">
                      <p className="font-semibold text-sm">Rolex</p>
                      <p className="leading-5 tracking-wide">Daytona Stainless Steel Black Dial</p>
                      <p className="text-themed-grey-400">Ref. 116520-0015</p>
                    </div>
                  </CardRoot>
                </Link>
              ))}
            </div>
          </CardRoot>
        </div>
      </div>
    </DashboardPageLayout>
  );
}
