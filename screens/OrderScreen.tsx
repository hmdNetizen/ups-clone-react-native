import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import {
  CompositeNavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { TabStackParamList } from "../navigator/TabNavigator";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigator/RootNavigator";
import DeliveryCard from "../components/DeliveryCard";

export type OrderScreenNavigationProps = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, "Orders">,
  StackNavigationProp<RootStackParamList>
>;

type OrderScreenRouteProps = RouteProp<RootStackParamList, "Order">;

const OrderScreen = () => {
  const navigation = useNavigation<OrderScreenNavigationProps>();
  const {
    params: { order },
  } = useRoute<OrderScreenRouteProps>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: order.trackingItems.customer.name,
      headerTitleStyle: { color: "black" },
      headerTintColor: "#EB6A7C",
      headerBackTitle: "Deliveries",
    });
  }, [order]);
  return (
    <View className="-mt-2">
      <DeliveryCard order={order} fullWidth />
    </View>
  );
};

export default OrderScreen;
