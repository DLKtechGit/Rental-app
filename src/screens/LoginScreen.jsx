import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Zocial";
import PasIcon from "react-native-vector-icons/Entypo";
import { useState } from "react";
import { Colors } from "../Constant";
import { useNavigation } from "@react-navigation/native";
// import SignupScreen from "./SignupScreen";
// import ForgotPassword from "./ForgotPassword";
// import Dashboard from "./Dashboard";
export default function LoginScreen() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigation = useNavigation();

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ marginTop: 60 }}>
          <Image
            style={styles.mainImg}
            source={require("../assets/Images/homelogo-1.jpg")}
          />
          <View style={styles.logtex}>
            <Text style={styles.logtexin}>Welcome Back!</Text>
            <Text> Login to your account</Text>
          </View>

          <View style={{ padding: 20 }}>
            <View style={{ marginVertical: 15 }}>
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
            <View style={{ marginTop: 8 }}>
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
                  style={{ marginTop: 7 }}
                  onPress={toggleShowPassword}
                />
              </View>
              <Pressable onPress={() => navigation.navigate('ForgotPassword')}>
                <Text
                  style={{
                    textAlign: "right",
                    marginRight: 10,
                    color: Colors.primary,
                  }}
                >
                  {" "}
                  Forgot Password?
                </Text>
              </Pressable>
            </View>
            <View style={{ marginTop: 10 }}>
              <Pressable style={styles.logbutton} onPress={()=> navigation.navigate('BottomTab')}>
                <Text
                  style={{ color: "#ffff", fontWeight: "bold", fontSize: 18 }}
                >
                  {" "}
                  Login
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
                New on our platform ?
              </Text>
              <Pressable onPress={() => navigation.navigate('SignupScreen')}>
                <Text
                  style={{
                    textAlign: "center",
                    marginTop: 15,
                    color: Colors.primary,
                  }}
                >
                  Create an account
                </Text>
              </Pressable>
            </View>
            <View>
              <Text> </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mainImg: {
    width: 370,
    height: 300,
  },

  logtex: {
    justifyContent: "center",
    alignItems: "center",
  },
  logtexin: {
    fontSize: 30,
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
    marginTop: 8,
  },
  input: {
    width: "80%",
  },
  icons: {
    color: Colors.primary,
  },
});
