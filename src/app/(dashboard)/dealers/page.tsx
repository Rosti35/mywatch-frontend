'use client';

import {Dealer, sampleDealer} from '@/fake';
import {CountriesSelect} from '@/forms/countries-select';
import {Select} from '@/ui/themed/fields/select';
import {TabContent, TabRoot, TabTriggerWithBadge} from '@/ui/themed/tabs';
import Link from 'next/link';
import {FlagImage} from 'react-international-phone';
import {RatingBadge} from './_components/rating-badge';
import {TableHeader, TableRow} from '@/ui/common/table';
import {DashboardPageLayout} from '../_layout';

const Filters = () => (
  <div className="flex w-full gap-4 items-stretch flex-1">
    <span className="w-full">
      <CountriesSelect placeholder="Location" />
    </span>
    <span className="w-full">
      <Select
        placeholder="Rating"
        options={[]}
      />
    </span>
    <span className="w-full">
      <Select
        placeholder="Sort by rating: lower first"
        options={[]}
      />
    </span>
  </div>
);

type DealerCatalogItemProps = {} & Dealer;
const DealerCatalogItem = ({name, location, iso2, stock, id}: DealerCatalogItemProps) => {
  return (
    <TableRow>
      <div className="w-full bg-themed-grey-200 flex items-center">
        <Link
          href={`dealers/${id}`}
          className="font-bold w-full hover:underline"
        >
          {name}
        </Link>
      </div>
      <div className="w-full bg-themed-grey-200 flex items-center">
        <p className="w-full">
          <RatingBadge />
        </p>
      </div>
      <div className="w-full bg-themed-grey-200 flex items-center">
        <p className="w-full flex items-center gap-2">
          <FlagImage iso2={iso2} />
          {location}
        </p>
      </div>
      <div className="w-full bg-themed-grey-200 flex items-center">
        <p className="w-full">{stock}</p>
      </div>
      <div className="w-full bg-themed-grey-200 gap-3 flex items-center">
        <button className="min-h-[50px] px-8 text-white bg-themed-black-primary cursor-pointer hover:bg-themed-black-primary/80 rounded-full">
          Invite
        </button>
        <button className="min-h-[50px] px-8 bg-white text-red-500 hover:bg-red-200  cursor-pointer rounded-full">
          Block
        </button>
      </div>
    </TableRow>
  );
};

export default function Page() {
  return (
    <DashboardPageLayout title="Out trusted dealers">
      <TabRoot defaultValue="dealers">
        <div className="relative w-fit items-center whitespace-nowrap h-[50px] gap-4 flex">
          <TabTriggerWithBadge
            value="dealers"
            count={0}
          >
            All dealers
          </TabTriggerWithBadge>
          <TabTriggerWithBadge
            value="partners"
            count={3}
          >
            My partners
          </TabTriggerWithBadge>
          <TabTriggerWithBadge
            value="black_list"
            count={3}
          >
            Black list
          </TabTriggerWithBadge>
        </div>

        <TabContent
          disableTransition
          value="dealers"
        >
          <div className="flex flex-col gap-5">
            <Filters />

            <div>
              <TableHeader>
                <span>Dealer</span>
                <span>Rating</span>
                <span>Location</span>
                <span>Current stock</span>
                <span></span>
              </TableHeader>

              <div>
                <DealerCatalogItem {...sampleDealer} />
                <DealerCatalogItem {...sampleDealer} />
                <DealerCatalogItem {...sampleDealer} />
                <DealerCatalogItem {...sampleDealer} />
              </div>
            </div>
          </div>
        </TabContent>
      </TabRoot>
    </DashboardPageLayout>
  );
}
