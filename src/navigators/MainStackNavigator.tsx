import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Text } from "react-native";

import HomeScreen from "../components/home/HomeScreen";

const MainStack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={HomeScreen} />
    </MainStack.Navigator>
  );
};

export default MainStackNavigator;
