import {PhoneField} from '@/ui/themed/fields/phone';
import {TextField} from '@/ui/themed/fields/text';

export const Account = () => (
  <div className="flex flex-col gap-3">
    <TextField
      id="email"
      type="email"
      placeholder="E-mail"
    />
    <TextField
      id="password"
      type="password"
      placeholder="Password"
    />
    <PhoneField placeholder="Phone" />
    <TextField
      id="confirmPassword"
      type="password"
      placeholder="Confirm"
    />
  </div>
);
