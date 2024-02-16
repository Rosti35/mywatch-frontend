import {Warehouse} from '@/fake';
import {CardField, CardRoot, CardTitle} from '@/ui/common/card';
import {ContextMenu} from './shared/menu';
import {CardActions} from './shared/types';
import {FlagImage, defaultCountries} from 'react-international-phone';

const [, iso2] = defaultCountries[0];

type WarehousePreviewProps = {} & Warehouse & CardActions;
export const WarehousePreview = ({
  address_name,
  city,
  address,
  details,
  ...props
}: WarehousePreviewProps) => {
  return (
    <CardRoot>
      <CardTitle actions={<ContextMenu {...props} />}>{address_name}</CardTitle>

      <CardField caption="City">
        <div className="flex gap-2">
          <FlagImage iso2={iso2} />
          {city}
        </div>
      </CardField>

      <CardField caption="Address">{address}</CardField>
      <CardField caption="Details">{details}</CardField>
    </CardRoot>
  );
};
