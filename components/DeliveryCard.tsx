import { View, Text } from "react-native";
import React from "react";

type DeliveryCardProps = {
  order: Order;
};

const DeliveryCard = ({ order }: DeliveryCardProps) => {
  return (
    <View>
      <Text>DeliveryCard</Text>
    </View>
  );
};

export default DeliveryCard;
