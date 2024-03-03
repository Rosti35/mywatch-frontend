import {BlacklistStatus} from '@/sections/dealer/status/blacklisted';
import {PartnersStatus} from '@/sections/dealer/status/partners';
import {RatingStatus} from '@/sections/dealer/status/rating';
import {TotalDealsStatus} from '@/sections/dealer/status/total-deals';
import {CardRoot} from '@/ui/common/card';
import {PlusIcon} from '@/ui/common/icons/plus';
import {FlagImage, defaultCountries} from 'react-international-phone';
import {WhatsappIcon} from '@/ui/common/icons/whapsapp';
import {TelegramIcon} from '@/ui/common/icons/telegram';
import {MailIcon} from '@/ui/common/icons/mail';
import {LinkIcon} from '@/ui/common/icons/link';
import Link from 'next/link';
import {ArrowLeftIcon} from '@radix-ui/react-icons';
import {WatchPreview} from '@/sections/demo/watch-card';
import {Button} from '@/ui/themed/button';
import {
  DealerCompanyName,
  DealerProfile,
  DealerProfileAvatar,
  DealerVerification,
} from '@/ui/themed/dealer';
import {SubrouteTitle} from '@/ui/themed/links';

const [, iso2] = defaultCountries[0];

const Dealer = () => {
  return (
    <DealerProfile avatar={<DealerProfileAvatar />}>
      <DealerCompanyName />
      <DealerVerification />
    </DealerProfile>
  );
};

const ContactsCard = () => {
  return (
    <CardRoot className="gap-6 p-[30px] bg-themed-grey-100">
      <div className="text-md font-bold leading-7">Contacts</div>

      <div className="flex flex-col gap-4">
        <p className="flex items-center ml-[3px] gap-[10px]">
          <FlagImage
            iso2={iso2}
            size={30}
          />
          Switzerland, Stadthausquai 11, Zürich
        </p>

        <p className="font-semibold leading-4 tracking-wide text-[18px]">+41 44 298 11 44</p>
        <p className="flex items-center gap-2 leading-8">
          <MailIcon className="w-6 h-6" />
          info@ineichen.com
        </p>
        <a
          href="#"
          className="text-blue-500 leading-3"
        >
          https://ineichen.com
        </a>
        <div className="flex gap-[24px]">
          <span className="flex items-center tracking-wide gap-2">
            Chrono24
            <LinkIcon className="w-5 h-5 text-themed-grey-400" />
          </span>
          <span className="flex items-center gap-2 tracking-wide">
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

export default function Page() {
  return (
    <div className="flex flex-col gap-[24px]">
      <div className="w-full flex gap-[70px]">
        <div className="w-full flex flex-col text-wrap sm:gap-[30px] gap-[18px]">
          <div>
            <SubrouteTitle
              href="/dealers"
              back="Back"
            />

            <Dealer />
          </div>

          <p className="md:leading-6 sm:text-sm text-[14px] leading-[21px] md:tracking-wide">
            Released in 1963, Cosmograph Daytona watches have long gone beyond just a work of
            watchmaking and have become a legend. It is the name of the model, which is strongly
            associated with the famous race track, and the characteristic graphic dial that made it
            iconic
          </p>

          <div className="flex sm:gap-[10px] gap-2 flex-wrap text-nowrap">
            <Button
              size="md"
              className="gap-[10px] text-sm sm:w-fit w-full px-[24px]"
            >
              <PlusIcon className="w-6 h-6" />
              Add to my partners
            </Button>
            <Button
              size="md"
              className="text-themed-black-primary text-sm sm:w-fit w-1/2 flex-1 bg-white"
            >
              Sent message
            </Button>
            <Button
              size="md"
              className="border border-red-600 text-sm bg-transparent sm:w-fit w-1/2  text-red-600"
            >
              To black list
            </Button>
          </div>
        </div>
        <div className="max-w-[400px] hidden md:block min-w-[400px] w-full">
          <ContactsCard />
        </div>
      </div>
      <div className="md:flex sm:mt-0 mt-1 sm:[&>*]>h-auto [&>*]:h-[135px] grid grid-cols-2 sm:gap-5 gap-2 text-nowrap">
        <TotalDealsStatus />
        <RatingStatus />
        <BlacklistStatus />
        <PartnersStatus />
      </div>

      <p className="sm:text-lg text-md font-bold sm:mt-[20px]">Now on sale</p>
      <WatchPreview />
      <WatchPreview />
    </div>
  );
}
