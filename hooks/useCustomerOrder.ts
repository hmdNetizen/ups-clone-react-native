import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ORDERS } from "../graphql/queries";

const useCustomerOrder = (userId: string) => {
  const { loading, error, data } = useQuery(GET_ORDERS);
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    if (!data) return;

    const orders: Order[] = data.getOrders.map(({ value }: Orderresponse) => ({
      carrier: value.carrier,
      Lng: value.Lng,
      Lat: value.Lat,
      City: value.City,
      Address: value.Address,
      createdAt: value.createdAt,
      shippingCost: value.shippingCost,
      trackingItems: value.trackingItems,
      trackingId: value.trackingId,
    }));

    const customerOrders = orders.filter(
      (order) => order.trackingItems.customer_id === userId
    );

    setOrders(customerOrders);
  }, [data, userId]);

  return { loading, error, orders };
};

export default useCustomerOrder;
