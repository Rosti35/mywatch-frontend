import {Checkbox} from '@/ui/common/checkbox';

export const Condition = () => (
  <div className="flex flex-col gap-3">
    <p className="text-md font-semibold">Condition</p>
    <span className="space-y-2">
      <Checkbox>Brand new</Checkbox>
      <Checkbox>Pre-owned</Checkbox>
      <Checkbox>No matter</Checkbox>
    </span>

    <p className="text-md font-semibold">Set</p>
    <span className="space-y-2">
      <Checkbox>Original box</Checkbox>
      <Checkbox>Original papers</Checkbox>
      <Checkbox>No matter</Checkbox>
    </span>
  </div>
);
