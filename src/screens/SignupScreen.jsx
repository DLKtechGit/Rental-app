import React from "react";
import { useState } from "react";
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
import IconUser from "react-native-vector-icons/FontAwesome";
import PasIcon from "react-native-vector-icons/Entypo";
import IconPhone from "react-native-vector-icons/Foundation";
import { useNavigation } from "@react-navigation/native";
// import LoginScreen from "./LoginScreen";

const SignupScreen = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassoword] = useState(" ");
  const [email, setEmail] = useState("");
  const navigation = useNavigation();

  const [showPassword, setShowPassword] = useState(false);
  const [showconPassoword, setShowConPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const toggleShowConfirmPassoword = () => {
    setShowConPassword(!showconPassoword);
  };
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={{ marginTop: 50 }}>
          <Image
            style={styles.img}
            source={require("../assets/Images/signlogo.png")}
          />

          <View style={styles.logtex}>
            <Text style={{ fontSize: 15 }}> Hi there!</Text>
            <Text style={styles.logtexin}>Let's Get Started</Text>
          </View>

          <View style={{ padding: 18 }}>
            <View style={{ marginTop: 15 }}>
              <View style={styles.emailInp}>
                <IconUser style={styles.icons} name="user" size={25} />
                <TextInput
                  value={email}
                  style={styles.input}
                  placeholder="User Name"
                  placeholderTextColor="#aaa"
                />
              </View>
            </View>

            <View style={{ marginTop: 10 }}>
              <View style={styles.emailInp}>
                <Icon style={styles.icons} name="email" size={25} />
                <TextInput
                  onChange={setEmail}
                  value={email}
                  style={styles.input}
                  placeholder="Email address"
                  placeholderTextColor="#aaa"
                />
              </View>
            </View>

            <View style={{ marginTop: 10 }}>
              <View style={styles.emailInp}>
                <IconPhone style={styles.icons} name="telephone" size={25} />
                <TextInput
                  // value={email}
                  style={styles.input}
                  placeholder="Mobile Number"
                  placeholderTextColor="#aaa"
                  keyboardType="numeric"
                />
              </View>
            </View>

            <View style={{ marginTop: 10 }}>
              <View style={styles.emailInp}>
                <PasIcon color={Colors.primary} name="lock" size={25} />
                <TextInput
                  onChange={setPassword}
                  secureTextEntry={!showPassword}
                  value={password}
                  style={styles.input}
                  placeholder="Password"
                  placeholderTextColor="#aaa"
                />
                <PasIcon
                  name={showPassword ? "eye" : "eye-with-line"}
                  size={18}
                  style={{ marginTop: 10 }}
                  onPress={toggleShowPassword}
                />
              </View>
            </View>

            <View style={{ marginTop: 10 }}>
              <View style={styles.emailInp}>
                <PasIcon color={Colors.primary} name="lock" size={25} />
                <TextInput
                  onChange={setConfirmPassoword}
                  secureTextEntry={!showconPassoword}
                  value={confirmPassword}
                  style={styles.input}
                  placeholder="Confirm Password"
                  placeholderTextColor="#aaa"
                />
                <PasIcon
                  name={showconPassoword ? "eye" : "eye-with-line"}
                  size={18}
                  style={{ marginTop: 7 }}
                  onPress={toggleShowConfirmPassoword}
                />
              </View>
            </View>

            <View style={{ marginTop: 8 }}>
              <Pressable style={styles.logbutton}>
                <Text
                  style={{ color: "#ffff", fontWeight: "bold", fontSize: 18 }}
                >
                  {" "}
                  Create account
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
              <Text style={{ textAlign: "center", marginTop: 15 }}>
                Already have an account?
              </Text>
              <Pressable>
                <Text
                  onPress={() => navigation.navigate("LoginScreen")}
                  style={{
                    textAlign: "center",
                    marginTop: 15,
                    color: Colors.primary,
                  }}
                >
                  Login
                </Text>
              </Pressable>
            </View>

            <View>
              <Text> </Text>
            </View>
          </View>
        </View>
      </ScrollView>
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
    width: 400,
    height: 200,
  },
  logtex: {
    justifyContent: "center",
    alignItems: "center",
  },
  logtexin: {
    fontSize: 25,
    fontWeight: "900",
    color: Colors.primary,
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
});

export default SignupScreen;
