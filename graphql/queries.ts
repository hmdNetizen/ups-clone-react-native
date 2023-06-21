import { gql } from "@apollo/client";

export const GET_CUSTOMERS = gql`
  query GetCustomers {
    getCustomers {
      name
      value {
        email
        name
      }
    }
  }
`;

export const GET_ORDERS = gql`
  query GetOrders {
    getOrders {
      value {
        carrier
        createdAt
        trackingId
        shippingCost
        Address
        City
        Lng
        Lat
        trackingItems {
          customer_id
          customer {
            name
            email
          }
          items {
            item_id
            price
            name
            quantity
          }
        }
      }
    }
  }
`;
