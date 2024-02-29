import {UploadIcon} from '@/ui/common/icons/upload';
import {TextField} from '@/ui/themed/fields/text';

export const CompanyProfile = () => (
  <div className="flex flex-wrap-reverse w-full h-fit sm:gap-20 gap-[14px]">
    <div className="flex flex-col gap-2 flex-1 max-w-[500px]">
      <TextField placeholder="Email" />
      <TextField placeholder="Website" />
      <TextField placeholder="Chrono24" />

      <textarea className="resize-none bg-white rounded-xl min-h-44 p-4 outline-none" />
    </div>

    <div className="md:w-32 w-auto h-fit flex mb-auto md:flex-col flex-row items-center gap-4">
      <div className="md:w-[100px] mr-2 w-[70px] aspect-square rounded-full bg-blue-950"></div>
      <div className="flex gap-2">
        Change logo
        <UploadIcon className="w-6 h-6" />
      </div>
    </div>
  </div>
);
