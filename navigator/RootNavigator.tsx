import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";

type RooStackParamList = {
  Main: undefined;
  MyModal: { userId: string; name: string };
  Order: any;
};

const RootStack = createStackNavigator<RooStackParamList>();

const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Group>
        <RootStack.Screen name="Main" component={TabNavigator} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootNavigator;
