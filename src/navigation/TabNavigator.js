import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

// Pantallas
import HomeScreen from "../screens/HomeScreen";
import TeamScreen from "../screens/TeamScreen";
import ComponentsScreen from "../screens/ComponentsScreen";
import MapScreen from "../screens/MapScreen";
import SensorDataScreen from "../screens/SensorDataScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Home") iconName = "home";
          else if (route.name === "Team") iconName = "people";
          else if (route.name === "Components") iconName = "construct";
          else if (route.name === "Map") iconName = "map";
          else if (route.name === "SensorData") iconName = "stats-chart";

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Team" component={TeamScreen} />
      <Tab.Screen name="Components" component={ComponentsScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="SensorData" component={SensorDataScreen} />
    </Tab.Navigator>
  );
}
