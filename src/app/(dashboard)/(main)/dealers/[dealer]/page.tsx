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
import {WatchPreview} from '@/sections/demo/watch-card';
import {
  DealerCompanyName,
  DealerProfile,
  DealerProfileAvatar,
  DealerVerification,
} from '@/ui/themed/dealer';
import {SubrouteTitle} from '@/ui/themed/links';
import {AddToBlacklistDialog} from '@/sections/dialogs/block';

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
    <div className="flex flex-col gap-[24px] sm:pt-[40px] sm:pl-[23px] sm:pr-[40px]  p-4 py-5">
      <div className="w-full flex gap-[70px]">
        <div className="w-full flex flex-col text-wrap sm:gap-[30px] gap-[18px]">
          <div className="flex flex-col sm:gap-[14px]">
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
            <button className="flex items-center sm:text-sm justify-center sm:h-button-lg transition rounded-full bg-themed-black-primary text-themed-grey-100 hover:opacity-85 gap-[10px] text-sm sm:w-fit w-full h-[50px] px-[24px]">
              <PlusIcon className="w-6 h-6" />
              Add to my partners
            </button>
            <button className="flex w-fit sm:max-w-[151px] items-center sm:text-sm justify-center sm:h-button-lg transition rounded-full bg-[#F5F5F5] text-themed-black-primary hover:opacity-85 gap-[10px] text-sm sm:flex-auto flex-1 sm:w-fit h-[50px] px-[24px]">
              Sent message
            </button>
            <AddToBlacklistDialog>
              <button className="flex items-center sm:max-w-[132px] sm:text-sm justify-center sm:h-button-lg transition rounded-full bg-transparent border-red-500 text-red-500 border hover:opacity-85 gap-[10px] text-sm sm:w-fit sm:flex-auto flex-1 w-fit h-[50px] px-[24px]">
                To black list
              </button>
            </AddToBlacklistDialog>
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

      <p className="sm:text-lg text-md font-bold tracking-tight sm:mt-[12px]">Now on sale</p>
      <WatchPreview />
      <WatchPreview />
    </div>
  );
}
