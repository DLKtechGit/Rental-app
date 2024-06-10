import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import Icons from "react-native-vector-icons/MaterialIcons";
import { Colors } from "../Constant";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to log out?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          console.log("Logged out");
          navigation.navigate("LoginScreen");
        },
      },
    ]);
  };

  const handleMenuPress = (label) => {
    if (label === "Logout") {
      handleLogout();
    } else if (label === "Help Center") {
      navigation.navigate("Help Center");
    } else if (label === "About Us") {
      navigation.navigate("About Us");
    } else if (label === "Upcoming Rents") {
      navigation.navigate("Rent Details", {
        initialRouteName: "Upcoming Rents",
      });
    } else if (label === "Paid Rents") {
      navigation.navigate("Rent Details", { initialRouteName: "Paid Rents" });
    } else {
      console.log(`${label} pressed`);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={require("../assets/Images/userimg1.jpg")}
          style={styles.profileImage}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Nayeem Bhuiyan</Text>
          <Text style={styles.profileEmail}>
            {" "}
            <Icons name="email" /> &nbsp;Nayeem52334@gmail.com
          </Text>
          <Text style={styles.profilePhone}>
            {" "}
            <Icons name="call" /> &nbsp;016445456734
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Profile")}
          style={styles.editButton}
        >
          <Icons name="edit" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.menuContainer}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
            onPress={() => handleMenuPress(item.label)}
          >
            <Icons name={item.icon} size={24} color={Colors.secondary} />
            <Text style={styles.menuItemText}>{item.label}</Text>

            <Icons
              name="keyboard-arrow-right"
              size={24}
              color={Colors.secondary}
            />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const menuItems = [
  { label: "Paid Rents", icon: "assured-workload" },
  { label: "Upcoming Rents", icon: "currency-rupee" },
  { label: "Payment history", icon: "history" },
  { label: "Help Center", icon: "help" },
  { label: "About Us", icon: "info" },
  { label: "Privacy Policy", icon: "privacy-tip" },
  { label: "Share this App", icon: "share" },
  { label: "Logout", icon: "logout" },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.white,
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginTop: 15,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  profileEmail: {
    fontSize: 14,
    color: Colors.gray,
    marginTop: 5,
  },
  profilePhone: {
    fontSize: 14,
    color: Colors.gray,
    marginTop: 5,
  },
  editButton: {
    backgroundColor: Colors.secondary,
    padding: 10,
    borderRadius: 20,
  },
  menuContainer: {
    backgroundColor: Colors.white,
    marginTop: 15,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderColor,
  },
  menuItemText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 20,
    color: Colors.primary,
    fontWeight: "500",
  },
});

export default ProfileScreen;

// this is my profile page i need that same design ui and same design please give me a code for that dont disappointed me
