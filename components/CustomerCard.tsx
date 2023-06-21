import { useNavigation } from "@react-navigation/native";
import { Card, Icon } from "@rneui/themed";
import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import useCustomerOrder from "../hooks/useCustomerOrders";
import { CustomerScreenNavigationProps } from "../screens/CustomerScreen";

type CustomerCardProps = {
  userId: string;
  email: string;
  name: string;
};

const CustomerCard = ({ email, name, userId }: CustomerCardProps) => {
  const { error, loading, orders } = useCustomerOrder(userId);
  const navigation = useNavigation<CustomerScreenNavigationProps>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("MyModal", { name, userId })}
    >
      <Card containerStyle={{ padding: 20, borderRadius: 12 }}>
        <View>
          <View className="flex-row justify-between">
            <View>
              <Text className="text-2xl font-bold">{name}</Text>
              <Text className="text-sm color-[#59C1CC]">ID: {userId}</Text>
            </View>
            <View className="flex-row justify-end items-center">
              <Text className="color-[#59C1CC]">
                {loading ? "loading..." : `${orders.length} x`}
              </Text>
              <Icon
                name="box"
                type="entypo"
                size={50}
                color="#59C1CC"
                style={{ marginLeft: "auto", marginBottom: 20 }}
              />
            </View>
          </View>
        </View>
        <Card.Divider />
        <Text>{email}</Text>
      </Card>
    </TouchableOpacity>
  );
};

export default CustomerCard;
