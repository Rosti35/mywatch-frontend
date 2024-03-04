import {DelieveryAddress} from '@/fake';
import {CardRoot, CardTitle, CardField} from '@/ui/common/card';
import {FlagImage, defaultCountries} from 'react-international-phone';
import {CardActions} from './shared/types';
import {ContextMenu} from './shared/menu';

const [, iso2] = defaultCountries[0];

type DelieveryAddressPreviewProps = {} & DelieveryAddress & CardActions;
export const DelieveryAddressPreview = ({
  address,
  city,
  zip_code,
  name,
  phone_number,
  title,
  ...props
}: DelieveryAddressPreviewProps) => {
  return (
    <CardRoot>
      <CardTitle actions={<ContextMenu {...props} />}>{title}</CardTitle>

      <div className="flex">
        <CardField caption="City">
          <div className="flex gap-2">
            <FlagImage iso2={iso2} />
            {city}
          </div>
        </CardField>
        <div className="ml-auto">
          <CardField caption="ZIP / Postal code">{zip_code}</CardField>
        </div>
      </div>

      <CardField caption="Address">{address}</CardField>

      <div className="flex gap-5">
        <CardField caption="Name">Nikolay Dvoryadkin</CardField>
        <div>
          <CardField caption="Phone number">+7 963 548-85-22</CardField>
        </div>
      </div>
    </CardRoot>
  );
};
