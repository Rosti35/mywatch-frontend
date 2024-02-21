import {sampleDealer} from '@/fake';
import {BlacklistStatus} from '@/sections/dealer/status/blacklisted';
import {PartnersStatus} from '@/sections/dealer/status/partners';
import {RatingStatus} from '@/sections/dealer/status/rating';
import {TotalDealsStatus} from '@/sections/dealer/status/total-deals';
import {CardRoot, CardTitle} from '@/ui/common/card';
import {PlusIcon} from '@/ui/common/icons/plus';
import {TimeIcon} from '@/ui/common/icons/time';
import {FlagImage, defaultCountries} from 'react-international-phone';
import {RatingBadge} from '../_components/rating-badge';
import {WhatsappIcon} from '@/ui/common/icons/whapsapp';
import {TelegramIcon} from '@/ui/common/icons/telegram';
import {MailIcon} from '@/ui/common/icons/mail';
import {LinkIcon} from '@/ui/common/icons/link';
import Link from 'next/link';
import {ArrowLeftIcon} from '@radix-ui/react-icons';

const [, iso2] = defaultCountries[0];

type DealerProfileProps = {
  name: string;
};

const DealerProfile = ({name}: DealerProfileProps) => {
  return (
    <div className="flex h-20 gap-5 items-center">
      <div className="h-20 w-20 rounded-full bg-blue-500" />

      <div className="flex flex-col justify-center">
        <p className="text-lg font-bold leading-10">{name}</p>

        <p>
          Out premium dealer <span className="text-themed-grey-400 ml-4">Since 2023</span>
        </p>
      </div>
    </div>
  );
};

const ContactsCard = () => {
  return (
    <CardRoot className="gap-6 p-[30px] bg-themed-grey-100">
      <CardTitle actions>Contacts</CardTitle>

      <div className="flex flex-col gap-4">
        <p className="flex items-center gap-2">
          <FlagImage iso2={iso2} />
          Switzerland, Stadthausquai 11, Zürich
        </p>

        <p className="font-semibold text-[18px]">+41 44 298 11 44</p>
        <p className="flex items-center gap-2">
          <MailIcon className="w-6 h-6" />
          info@ineichen.com
        </p>
        <a
          href="#"
          className="text-blue-500"
        >
          https://ineichen.com
        </a>
        <div className="flex gap-4">
          <span className="flex items-center gap-2">
            Chrono24
            <LinkIcon className="w-5 h-5 text-themed-grey-400" />
          </span>
          <span className="flex items-center gap-2">
            Instagram
            <LinkIcon className="w-5 h-5 text-themed-grey-400" />
          </span>
        </div>
      </div>
      <div className="flex gap-[10px] h-10">
        <button className="bg-white rounded-full items-center flex justify-center gap-2 px-6 w-full">
          <WhatsappIcon
            className="w-6 h-6 mr-auto"
            variant="colored"
          />
          <span className="mx-auto">Whatsapp</span>
        </button>
        <button className="bg-white rounded-full items-center justify-between flex px-6 w-full">
          <TelegramIcon
            className="w-6 h-6 mr-auto"
            variant="colored"
          />
          <span className="mx-auto">Telegram</span>
        </button>
      </div>
    </CardRoot>
  );
};

const BuyWatch = () => (
  <div className="pl-[30px] text-nowrap max-w-[200px] w-full flex flex-col">
    <div>
      <p className="text-[14px]">Price</p>
      <p className="text-[26px] font-semibold">35 000 $</p>
    </div>

    <div className="mt-[10px] flex items-center gap-2">
      <TimeIcon className="w-6 h-6 text-themed-grey-400" />
      10:59:59
    </div>

    <div className="mt-[20px]">
      <button className=" h-[50px] bg-themed-black-primary text-white rounded-full w-full">
        Want to buy
      </button>
    </div>

    <div className="mt-auto text-sm">
      <p className="text-[14px]">Warehouse</p>
      <p className="flex items-center gap-2">
        <FlagImage iso2={iso2} />
        Some warehouse
      </p>
    </div>
  </div>
);

const WatchPreview = () => {
  return (
    <div className="bg-white p-5 rounded-3xl flex">
      <div className="min-w-[240px] h-[240px] rounded-3xl bg-zinc-500" />

      <div className="flex flex-col px-6 py-6 border-r w-full border-r-themed-grey-200">
        <div className="space-y-1">
          <p>Rolex</p>
          <p className="font-bold text-[20px]">Daytona Stainless Steel Black Dial</p>
        </div>

        <div className="mt-5 flex gap-[30px]">
          <div>
            <p className="text-[14px] text-themed-grey-600">Year</p>
            <p>2023</p>
          </div>
          <div>
            <p className="text-[14px] text-themed-grey-600">Package</p>
            <p>Box and papers</p>
          </div>
          <div>
            <p className="text-[14px] text-themed-grey-600">Condition</p>
            <p>Brand new</p>
          </div>
          <div>
            <p className="text-[14px] text-themed-grey-600">Reference</p>
            <p>112312</p>
          </div>
        </div>

        <div className="mt-auto flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-800" />
          <div>
            Ineichen Zuriсh
            <RatingBadge />
          </div>
        </div>
      </div>

      <BuyWatch />
    </div>
  );
};

export default function Page() {
  return (
    <div className="flex flex-col gap-[30px] pb-[40px] pr-[40px]">
      <div className="w-full flex gap-[70px]">
        <div className="w-full flex flex-col text-wrap gap-[30px]">
          <Link
            href="/dealers"
            className="w-fit flex items-center gap-2"
          >
            <ArrowLeftIcon className="w-6 h-6" />
            Back to list
          </Link>
          <DealerProfile name={sampleDealer.name} />

          <p className="leading-7">
            Released in 1963, Cosmograph Daytona watches have long gone beyond just a work of
            watchmaking and have become a legend. It is the name of the model, which is strongly
            associated with the famous race track, and the characteristic graphic dial that made it
            iconic
          </p>

          <div className="flex gap-3 mt-auto flex-wrap text-nowrap">
            <button className="h-[60px] rounded-full flex items-center gap-[10px] px-6 bg-themed-black-primary text-white">
              <PlusIcon className="w-6 h-6" /> Add to my partners
            </button>
            <button className="h-[60px] rounded-full px-6 text-themed-black-primary bg-white">
              Sent message
            </button>
            <button className="h-[60px] rounded-full border border-red-600 px-6 text-red-600">
              To black list
            </button>
          </div>
        </div>
        <div className="max-w-[400px] min-w-[400px] w-full">
          <ContactsCard />
        </div>
      </div>
      <div className="flex gap-5 text-nowrap">
        <TotalDealsStatus />
        <RatingStatus />
        <BlacklistStatus />
        <PartnersStatus />
      </div>

      <p className="text-lg font-bold mt-[20px]">Now on sale</p>
      <WatchPreview />
      <WatchPreview />
    </div>
  );
}
