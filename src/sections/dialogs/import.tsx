import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/ui/common/dialog';

import {Button} from '@/ui/themed/button';
import {TextField} from '@/ui/themed/fields/text';
import {TabContent, TabRoot, TabTrigger, TabTriggerContainer} from '@/ui/themed/tabs';
import Link from 'next/link';
import {PropsWithChildren} from 'react';

export function ImportDialog({children}: PropsWithChildren) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-themed-grey-100 gap-[30px] rounded-[32px] p-[40px]">
        <DialogHeader>
          <DialogTitle>Import from other platforms</DialogTitle>
          <DialogDescription className="leading-6 tracking-wide">
            Just send an invitation and start making quick, convenient transactions
          </DialogDescription>
        </DialogHeader>
        <TabRoot
          defaultValue={'chrono'}
          className="flex flex-col gap-[16px]"
        >
          <TabTriggerContainer className="bg-themed-grey-200">
            <TabTrigger value="chrono">Chrono24</TabTrigger>
            <TabTrigger value="xml">XML Import</TabTrigger>
          </TabTriggerContainer>
          <TabContent value="chrono">
            <TextField placeholder="Url" />
          </TabContent>

          <Link
            href={'/import'}
            className="w-full"
          >
            <Button className="w-full">Import</Button>
          </Link>
        </TabRoot>
      </DialogContent>
    </Dialog>
  );
}
