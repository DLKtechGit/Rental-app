import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";
import { Colors } from "../Constant";
import Icon from "react-native-vector-icons/Zocial";
import { useNavigation } from "@react-navigation/native";
// import LoginScreen from "./LoginScreen";

const ForgotPassword = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <ScrollView>
          <View style={{ alignItems: "center" }}>
            <Image
              style={styles.img}
              source={require("../assets/Images/ForgotPassword.jpg")}
            />
          </View>

          <View style={styles.logtex}>
            <Text style={styles.logtexin}>Mail Address Here</Text>
            <Text
              style={{
                fontSize: 13,
                width: 250,
                textAlign: "center",
                color: "#aaa",
                marginTop: 7,
              }}
            >
              {" "}
              Enter the email addres accosiated with your account
            </Text>
          </View>

          <View style={{ marginTop: 40 }}>
            <View style={styles.emailInp}>
              <Icon style={styles.icons} name="email" size={25} />
              <TextInput
                style={styles.input}
                placeholder="Email address"
                placeholderTextColor="#aaa"
              />
            </View>
          </View>

          <View style={{ marginTop: 8 }}>
            <Pressable style={styles.logbutton}>
              <Text
                style={{ color: "#ffff", fontWeight: "bold", fontSize: 18 }}
              >
                {" "}
                Recover Password
              </Text>
            </Pressable>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 5,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ textAlign: "center", marginTop: 15, color: "#aaa" }}>
              Already have an account?
            </Text>
            <Pressable>
              <Text
                onPress={() => navigation.navigate('LoginScreen')}
                style={{
                  textAlign: "center",
                  marginTop: 15,
                  color: Colors.secondary,
                  fontWeight:"bold"
                }}
              >
                Login
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 250,
    height: 250,
  },
  emailInp: {
    width: "auto",
    height: 50,
    padding: 8,
    marginVertical: 8,
    backgroundColor: "#F4F7FA",
    borderRadius: 15,
    elevation: 5,
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },

  logbutton: {
    backgroundColor: Colors.primary,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: 20,
  },
  newBtn: {
    backgroundColor: "#C2F5F5",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: 20,
  },
  input: {
    width: "80%",
  },
  icons: {
    color: Colors.primary,
    marginTop: 2,
  },
  logtex: {
    justifyContent: "center",
    alignItems: "center",
  },
  logtexin: {
    fontSize: 23,
    fontWeight: "900",
    color: Colors.primary,
  },
  logbutton: {
    backgroundColor: Colors.primary,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: 20,
  },
});

export default ForgotPassword;
