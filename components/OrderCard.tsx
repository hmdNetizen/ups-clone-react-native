import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Card, Icon } from "@rneui/themed";

type OrderCardProps = {
  item: Order;
};

const OrderCard = ({ item }: OrderCardProps) => {
  return (
    <TouchableOpacity>
      <Card containerStyle={{ paddingHorizontal: 20, borderRadius: 8 }}>
        <View className="flex-row items-center justify-between">
          <View>
            <Icon
              name="truck-delivery"
              color="#EB6A7C"
              type="material-community"
            />
            <Text>{new Date(item.createdAt).toDateString()}</Text>
          </View>
          <View>
            <Text className="text-gray-400" style={{ fontSize: 10 }}>
              {item.carrier} - {item.trackingId}
            </Text>
            <Text className="text-gray-500 text-xl">
              {item.trackingItems.customer.name}
            </Text>
          </View>
          <View className="flex-row items-center">
            <Text className="text-sm text-[#EB6A7C]">
              {item.trackingItems.items.length} x
            </Text>
            <Icon
              name="box"
              type="feather"
              containerStyle={{ marginLeft: 8 }}
            />
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

export default OrderCard;
