import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import RestaurantesScreen from "../screens/RestaurantesScreen";

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Restaurantes" component={RestaurantesScreen} />
    </Stack.Navigator>
  );
}
