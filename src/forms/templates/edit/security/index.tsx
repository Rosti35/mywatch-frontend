import {Switch} from '@/ui/common/switch';
import {TextField} from '@/ui/themed/fields/text';

export const Secutity = () => {
  return (
    <div className="flex flex-col gap-2 flex-1 max-w-[500px]">
      <TextField placeholder="Additional email" />
      <TextField
        placeholder="Password"
        type="password"
      />
      <TextField
        placeholder="Password confirmation"
        type="password"
      />

      <Switch
        id="tfa"
        className="mt-3"
      >
        Two-factor authentication
      </Switch>
    </div>
  );
};
