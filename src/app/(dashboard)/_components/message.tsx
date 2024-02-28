import Link from 'next/link';

export const Message = ({id = 1}: {id?: string | number}) => (
  <Link
    href={`/messages/${id}`}
    className="w-full"
  >
    <div className="flex gap-[14px] w-full items-center">
      <div className="w-[48px] h-[48px] rounded-full bg-zinc-700" />
      <div className="flex flex-col justify-center gap-1">
        <p className="leading-5 font-medium tracking-wide">Mywatch</p>
        <p className="leading-4 tracking-wide text-themed-grey-500 text-[14px]">
          Hi! Welcome to mywatch
        </p>
      </div>
      <span className="ml-auto text-themed-grey-400 text-[14px]">10:45</span>
    </div>
  </Link>
);
