'use client';

import {Dealer, sampleDealer} from '@/fake';
import {TabContent, TabRoot, TabTriggerWithBadge} from '@/ui/themed/tabs';
import Link from 'next/link';
import {FlagImage} from 'react-international-phone';
import {RatingBadge} from './_components/rating-badge';
import {TableHeader, TableRow} from '@/ui/common/table';
import {DashboardPageLayout} from '../_layout';
import {FilterSelect} from '../_components/filter';
import {Button} from '@/ui/themed/button';
import {PlusIcon} from '@/ui/common/icons/plus';
import {CheckIcon} from '@/ui/common/icons/check';

const Filters = () => (
  <div className="flex w-full gap-4 items-stretch flex-1">
    <FilterSelect>Location</FilterSelect>
    <FilterSelect>Rating</FilterSelect>
    <FilterSelect>Sort by</FilterSelect>
  </div>
);

type DealerCatalogItemProps = {} & Dealer;
const DealerCatalogItem = ({name, location, iso2, stock, id}: DealerCatalogItemProps) => {
  return (
    <TableRow>
      <div className="w-full bg-themed-grey-200 flex items-center">
        <Link
          href={`dealers/${id}`}
          className="font-bold flex items-center tracking-wide w-full hover:underline gap-1"
        >
          {name}
          <CheckIcon className="w-4 h-4 rounded-full bg-themed-black-primary text-white" />
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
      <div className="w-full bg-red-900  gap-3 flex items-center">
        <Button
          size="md"
          className="h-[50px] min-w-[50px] flex items-center justify-center p-0"
        >
          <PlusIcon className="w-6 h-6 m-auto" />
        </Button>
        <Button
          size="md"
          className="bg-white text-red-500 hover:bg-red-200"
        >
          Block
        </Button>
      </div>
    </TableRow>
  );
};

export default function Page() {
  return (
    <DashboardPageLayout title="Out trusted dealers">
      <TabRoot
        defaultValue="dealers"
        className="gap-[30px]"
      >
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
          <div className="flex flex-col gap-[16px]">
            <Filters />

            <div>
              <TableHeader>
                <span className="mt-1">Dealer</span>
                <span className="mt-1">Rating</span>
                <span className="mt-1">Location</span>
                <span className="mt-1">Current stock</span>
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
