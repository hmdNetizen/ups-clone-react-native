type Customer = {
  name: string;
  email: string;
};

type CustomerList = {
  name: ID;
  value: Customer;
};

type Items = {
  item_id: ID;
  name: string;
  price: string;
  quantity: number;
};

type TrackingItem = {
  customer_id: ID;
  items: [Items];
  customer: Customer;
};

type Orderresponse = {
  value: Order;
};

type CustomerResponse = {
  name: ID;
  value: Customer;
};

type Order = {
  carrier: string;
  createdAt: string;
  shippingCost: number;
  Address: string;
  trackingId: string;
  trackingItems: TrackingItem;
  Lat: number;
  Lng: number;
  City: string;
};
