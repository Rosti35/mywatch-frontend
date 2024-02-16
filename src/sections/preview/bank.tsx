import {Bank} from '@/fake';
import {CardField, CardRoot, CardTitle} from '@/ui/common/card';
import {ContextMenu} from './shared/menu';
import {CardActions} from './shared/types';

type BankAccountPreviewProps = {} & Bank & CardActions;
export const BankAccountPreview = ({
  company,
  bic_code,
  account_number,
  ...props
}: BankAccountPreviewProps) => {
  return (
    <CardRoot>
      <CardTitle actions={<ContextMenu {...props} />}>{company}</CardTitle>

      <CardField caption="BIC code">{bic_code}</CardField>
      <CardField caption="Account number">{account_number}</CardField>
    </CardRoot>
  );
};
