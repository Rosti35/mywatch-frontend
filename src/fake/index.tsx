export const sampleBank = {
  company: 'Some Bank',
  details: 'Some details',
  bic_code: '123456',
  account_number: '123456',
};

export const sampleWarehouse = {
  address_name: 'Warehouse name 1',
  city: 'Some City',
  address: 'Bolshaya Moskovskaya 126',
  details: 'details',
};

export const sampeDelieveryAddress = {
  city: 'Some City',
  zip_code: '123456',
  address: 'Some address',
  name: 'Some Name',
  phone_number: '123456',
  title: 'Some title',
};

export type Bank = typeof sampleBank;
export type DelieveryAddress = typeof sampeDelieveryAddress;
export type Warehouse = typeof sampleWarehouse;
