import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import {
  CompositeNavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Button, Image } from "@rneui/themed";
import React, { useLayoutEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import OrderCard from "../components/OrderCard";
import useOrders from "../hooks/useOrders";
import { RootStackParamList } from "../navigator/RootNavigator";
import { TabStackParamList } from "../navigator/TabNavigator";

export type OrdersScreenNavigationProps = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, "Orders">,
  StackNavigationProp<RootStackParamList>
>;

const OrderScreen = () => {
  const navigation = useNavigation<OrdersScreenNavigationProps>();
  const { loading, error, orders } = useOrders();

  const [ascending, setAscending] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      tabBarLabel: ({ focused, color }) => (
        <Text style={{ color: focused ? "#EB6A7C" : color, fontSize: 10 }}>
          Order
        </Text>
      ),
    });
  }, []);

  return (
    <ScrollView style={{ backgroundColor: "#EB6A7C" }}>
      <Image
        source={{ uri: "https://links.papareact.com/m51" }}
        containerStyle={{ width: "100%", height: 256 }}
        PlaceholderContent={<ActivityIndicator />}
      />
      <View className="px-5">
        <Button
          color="pink"
          onPress={() => setAscending((prev) => !prev)}
          titleStyle={{ color: "gray", fontWeight: "bold" }}
          style={{ paddingHorizontal: 20, paddingVertical: 8 }}
        >
          {ascending ? "Showing: Oldest First" : "Showing: Most Recent First"}
        </Button>

        {orders
          ?.sort((a, b) => {
            if (ascending) {
              return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1;
            } else {
              return new Date(b.createdAt) > new Date(a.createdAt) ? -1 : 1;
            }
          })
          .map((order) => (
            <OrderCard key={order.trackingId} item={order} />
          ))}
      </View>
    </ScrollView>
  );
};

export default OrderScreen;
