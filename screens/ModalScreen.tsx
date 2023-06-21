import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Platform,
  FlatList,
} from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";
import { StatusBar } from "react-native";
import {
  CompositeNavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { TabStackParamList } from "../navigator/TabNavigator";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigator/RootNavigator";
import useCustomerOrder from "../hooks/useCustomerOrders";
import DeliveryCard from "../components/DeliveryCard";

type ModalScreenNavigationProps = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList>,
  StackNavigationProp<RootStackParamList, "MyModal">
>;

type ModalScreenRootProps = RouteProp<RootStackParamList, "MyModal">;

const ModalScreen = () => {
  const navigation = useNavigation<ModalScreenNavigationProps>();
  const {
    params: { name, userId },
  } = useRoute<ModalScreenRootProps>();

  const { loading, error, orders } = useCustomerOrder(userId);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className={`absolute right-5 z-10 ${
            Platform.OS === "android" ? "top-0" : "top-5"
          }`}
        >
          <Icon name="closecircle" type="antdesign" />
        </TouchableOpacity>
        <View>
          <View>
            <Text>{name}</Text>
            <Text>deliveries</Text>
          </View>
        </View>
      </View>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.trackingId}
        renderItem={({ item: order }) => <DeliveryCard order={order} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default ModalScreen;
