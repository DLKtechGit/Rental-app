import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { Colors } from "../Constant";

const NotificationDetails = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.BellImg}
          source={require("../assets/Images/Bell.png")}
        />
      </View>
      <View style={styles.fullContent}>
        <Text style={styles.Heading}> Your House Rent Payment is Due </Text>
        <View style={styles.messageContainer}>
          <Text style={styles.messageContent}>
            This is a friendly reminder that your house rent payment of $1,200
            is due on June 10, 2024. Please ensure that the payment is made by
            this date to avoid any late fees or penalties.
          </Text>

          <Text style={styles.lasText}>
            If you have any questions or need assistance, please do not hesitate
            to contact us.
          </Text>

          <Text style={styles.date}> Monday, 10:15 am </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: "center",
    padding: 10,
    marginTop: 15,
  },
  BellImg: {
    width: 200,
    height: 200,
  },
  Heading: {
    fontWeight: "900",
    fontSize: 15,
  },
  fullContent: {
    alignItems: "center",
  },
  messageContent: {
    alignItems: "center",
    textAlign: "left",
    marginTop: 20,
    fontSize: 15,
    color: Colors.gray,
  },
  
  messageContainer: {
    width: "100%",
    padding: 10,
  },
  lasText: {
    marginTop: 30,
    fontSize: 15,
    color: Colors.gray,
  },
  date: {
    marginTop: 50,
    textAlign: "center",
    ontSize: 15,
    color: Colors.gray,
  },
});
export default NotificationDetails;
