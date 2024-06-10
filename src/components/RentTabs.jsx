// src/screens/RentTabs.js
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import PaidRents from "../screens/PaidRents";
import { useRoute } from "@react-navigation/native";
import UpcomingRents from "../screens/UpcomingRents";

const Tab = createMaterialTopTabNavigator();

function RentTabs() {
  const route = useRoute();
  const { initialRouteName } = route.params || {
    initialRouteName: "Paid Rents",
  };
  return (
    <Tab.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: "500",
          width: 150,
          textTransform: "none",
        },
        tabBarItemStyle: { marginHorizontal: 20 },
        tabBarStyle: { display: "flex" },
        tabBarIndicatorStyle: { width: 200 },
      }}
    >
      <Tab.Screen name="Upcoming Rents" component={UpcomingRents} />
      <Tab.Screen name="Paid Rents" component={PaidRents} />
    </Tab.Navigator>
  );
}

export default RentTabs;
