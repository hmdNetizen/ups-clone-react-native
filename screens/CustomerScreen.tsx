import {
  View,
  Text,
  ActivityIndicator,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import {
  CompositeNavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { TabStackParamList } from "../navigator/TabNavigator";
import { StackNavigationProp } from "@react-navigation/stack";
import { RooStackParamList } from "../navigator/RootNavigator";
import { Image, Input } from "@rneui/themed";

export type CustomerScreenNavigationProps = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, "Customers">,
  StackNavigationProp<RooStackParamList>
>;

const CustomerScreen = () => {
  const navigation = useNavigation<CustomerScreenNavigationProps>();

  const [textInput, setTextInput] = useState<string>("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <ScrollView className="bg-[#59C1CC]">
      <Image
        source={{
          uri: "https://i.imgur.com/uU8GTZM.jpeg",
        }}
        containerStyle={{ width: "100%", height: 256 }}
        PlaceholderContent={<ActivityIndicator />}
      />
      <Input
        placeholder="Search by customer"
        value={textInput}
        onChangeText={setTextInput}
        containerStyle={{
          backgroundColor: "#fff",
          paddingTop: 20,
          paddingBottom: 0,
          paddingRight: 40,
          paddingLeft: 40,
        }}
      />
    </ScrollView>
  );
};

export default CustomerScreen;
