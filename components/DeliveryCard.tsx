import { View, Text } from "react-native";
import React from "react";
import { Card, Divider, Icon } from "@rneui/themed";
import MapView, { Marker } from "react-native-maps";

type DeliveryCardProps = {
  order: Order;
  fullWidth?: boolean;
};

const DeliveryCard = ({ order, fullWidth }: DeliveryCardProps) => {
  return (
    <Card
      containerStyle={{
        backgroundColor: fullWidth ? "#EB6A7C" : "#59C1CC",
        padding: 0,
        paddingTop: 16,
        margin: fullWidth ? 0 : 20,
        borderRadius: fullWidth ? 0 : 8,
        marginVertical: fullWidth ? 0 : 8,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
      }}
    >
      <View className={`${fullWidth ? "h-full" : "h-auto"}`}>
        <Icon name="box" type="entypo" size={50} color="white" />

        <View>
          <Text className="text-center text-white font-bold text-xs uppercase">
            {order.carrier} - {order.trackingId}
          </Text>
          <Text className="text-center text-white text-lg font-bold">
            Expected Delivery: {new Date(order.createdAt).toLocaleDateString()}
          </Text>
          <Divider color="white" />
        </View>
        <View className="mx-auto p-5">
          <Text className="text-base mt-5 text-center text-white font-bold">
            Address
          </Text>
          <Text className="text-sm text-white text-center">
            {order.Address}, {order.City}
          </Text>
          <Text className="text-sm text-white text-center italic">
            Shipping Cost: £{order.shippingCost}
          </Text>
        </View>
        <Divider color="white" />
        <View className="p-5">
          {order.trackingItems.items.map((item) => (
            <View
              key={item.item_id}
              className="flex-row justify-between items-center"
            >
              <Text className="text-sm text-white italic">{item.name}</Text>
              <Text className="text-xl text-white">x {item.quantity}</Text>
            </View>
          ))}
        </View>
        <MapView
          style={{ flexGrow: 1, height: !fullWidth ? 200 : "auto" }}
          initialRegion={{
            latitude: order.Lat,
            longitude: order.Lng,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
          className="w-full"
        >
          {order.Lat && order.Lng && (
            <Marker
              coordinate={{
                latitude: order.Lat,
                longitude: order.Lng,
              }}
              title="Delivery Location"
              description={order.Address}
              identifier="destination"
            />
          )}
        </MapView>
      </View>
    </Card>
  );
};

export default DeliveryCard;
