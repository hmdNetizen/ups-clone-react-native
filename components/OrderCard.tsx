import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Card, Icon } from "@rneui/themed";

type OrderCardProps = {
  item: Order;
};

const OrderCard = (props: OrderCardProps) => {
  return (
    <TouchableOpacity>
      <Card>
        <View>
          <Icon
            name="truck-delivery"
            color="#EB6A7C"
            type="material-community"
          />
        </View>
      </Card>
    </TouchableOpacity>
  );
};

export default OrderCard;
