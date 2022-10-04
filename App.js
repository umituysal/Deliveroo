import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import BasketScreen from "./screens/BasketScreen";
import PreparingOrderScreen from "./screens/PreparingOrderScreen";
import { Provider } from "react-redux";
import { store } from "./store";
import DeliveryScreen from "./screens/DeliveryScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Restaurant" component={RestaurantScreen} />
          <Stack.Screen
            name="Basket"
            options={{
              presentation: "modal",
              headerShown: false,
            }}
            component={BasketScreen}
          />
          <Stack.Screen
            options={{
              presentation: "fullScreenModal",
              headerShown: false,
            }}
            name="PreparingOrderScreen"
            component={PreparingOrderScreen}
          />
          <Stack.Screen
            options={{
              presentation: "fullScreenModal",
              headerShown: false,
            }}
            name="Delivery"
            component={DeliveryScreen}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
