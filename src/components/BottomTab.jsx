import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Colors } from "../Constant";
import Dashboard from "../screens/Dashboard";
import Icons from "react-native-vector-icons/MaterialIcons";
import Notify from "react-native-vector-icons/Entypo";
import SignupScreen from "../screens/SignupScreen";
import LoginScreen from "../screens/LoginScreen";
import Menus from "../screens/Menus";
import Notifications from "../screens/Notifications";

const Tab = createBottomTabNavigator();
export default function BottomTab() {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        tabBarActiveTintColor: Colors.secondary,
        // headerShown:false,
        tabBarStyle: {
          marginBottom: 3,
          backgroundColor: Colors.white,
          height: 70,
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          borderColor: Colors.secondary,
        },
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({ colour, size, focused }) => (
            <Icons
              name="dashboard"
              color={focused ? Colors.secondary : Colors.primary}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Menus"
        component={Menus}
        options={{
          tabBarLabel: "Menus",
          tabBarIcon: ({ colour, size, focused }) => (
            <Icons
              name="menu"
              color={focused ? Colors.secondary : Colors.primary}
              size={30}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: "Notification",
          tabBarIcon: ({ colour, size, focused }) => (
            <Notify
              name="bell"
              color={focused ? Colors.secondary : Colors.primary}
              size={30}
            />
          ),
          tabBarBadge: 2,
        }}
      />
    </Tab.Navigator>
  );
}
