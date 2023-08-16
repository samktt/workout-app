import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import theme from "../config/theme";

import UilDumbbell from "@iconscout/react-native-unicons/icons/uil-dumbbell";
import UilHome from "@iconscout/react-native-unicons/icons/uil-estate";
import UilRestaurant from "@iconscout/react-native-unicons/icons/uil-restaurant";
import UilAnalytics from "@iconscout/react-native-unicons/icons/uil-analytics";
import HomeScreen from "../screens/HomeScreen";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: "#7e7e7e",
        tabBarStyle: {
          backgroundColor: "black",
          borderTopColor: "#2C2C2E",
          borderTopWidth: 2,
          display: "flex",
        },
      }}
      initialRouteName="Workouts"
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <UilHome color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Workouts"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <UilDumbbell color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Nutrition"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <UilRestaurant color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Progress"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <UilAnalytics color={color} size={size} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <UilUser color={color} size={size} />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default AppNavigator;
