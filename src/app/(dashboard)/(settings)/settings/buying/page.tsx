'use client';

import {TabContent, TabRoot, TabTriggerWithBadge} from '@/ui/themed/tabs';

import {Brand} from '@/forms/templates/preferences/buy/brand';
import {Country} from '@/forms/templates/preferences/buy/country';
import {Condition} from '@/forms/templates/preferences/buy/condition';
import {Partners} from '@/forms/templates/preferences/buy/partners';
import {SettingsLayout} from '../_layouts/settings';
import {Price} from '@/forms/templates/edit/price';

const description = `
Specify which watches you are interested in buying, in what condition,
at what price range and from which country. This will allow us to
offer you only what you need!
`;

export default function Page() {
  return (
    <SettingsLayout
      title="Set up your buying preferences"
      description={description}
    >
      <TabRoot
        className="flex gap-0 flex-col overflow-auto sm:overflow-hidden h-full"
        defaultValue="brand"
      >
        <div className="w-full sm:w-fit items-center px-4 lg:px-0 whitespace-nowrap overflow-auto min-h-[50px] sm:[&>*]:h-[50px] [&>*]:h-[40px] gap-[14px] h-fit flex">
          <TabTriggerWithBadge
            value="brand"
            count={2}
          >
            Brand
          </TabTriggerWithBadge>
          <TabTriggerWithBadge
            value="location"
            count={3}
          >
            Location
          </TabTriggerWithBadge>
          <TabTriggerWithBadge
            value="condition_and_set"
            count={0}
          >
            Condition & set
          </TabTriggerWithBadge>
          <TabTriggerWithBadge
            value="price"
            count={0}
          >
            Price
          </TabTriggerWithBadge>
          <TabTriggerWithBadge
            value="partners"
            count={0}
          >
            My partners
          </TabTriggerWithBadge>
        </div>

        <div className="mt-[30px] overflow-hidden sm:px-0 px-4 h-full flex flex-col">
          <TabContent
            disableTransition
            value="brand"
          >
            <Brand />
          </TabContent>
          <TabContent
            disableTransition
            value="location"
          >
            <Country />
          </TabContent>
          <TabContent
            disableTransition
            value="condition_and_set"
          >
            <Condition />
          </TabContent>
          <TabContent
            disableTransition
            value="price"
          >
            <Price />
          </TabContent>
          <TabContent
            disableTransition
            value="partners"
          >
            <Partners />
          </TabContent>
        </div>
      </TabRoot>
    </SettingsLayout>
  );
}
