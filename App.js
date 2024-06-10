import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./src/screens/LoginScreen";
import SignupScreen from "./src/screens/SignupScreen";
import ForgotPassword from "./src/screens/ForgotPassword";
import Dashboard from "./src/screens/Dashboard";
import BottomTab from "./src/components/BottomTab";
import Menus from "./src/screens/Menus";
import Notifications from "./src/screens/Notifications";
import ProfileScreen from "./src/screens/ProfilePage";
import HelpCenter from "./src/screens/HelpCenter";
import AboutUsScreen from "./src/screens/AboutUsPage";
import NotificationDetails from "./src/screens/NotificationDetails";
import UpcomingRents from "./src/screens/UpcomingRents";
import PaidRents from "./src/screens/PaidRents";
import RentTabs from "./src/components/RentTabs";
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignupScreen"
          component={SignupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="BottomTab"
          component={BottomTab}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Menu"
          component={Menus}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Notifications"
          component={Notifications}
          options={{ headerShown: false }}
        />

        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Help Center" component={HelpCenter} />
        <Stack.Screen name="About Us" component={AboutUsScreen} />
        <Stack.Screen
          name="Notification Details"
          component={NotificationDetails}
        />

        <Stack.Screen name="Rent Details" component={RentTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
