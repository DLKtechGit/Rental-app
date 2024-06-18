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
          <View>
          <Image
            style={styles.img}
            source={require("../assets/Images/signlogo.png")}
          />
          </View>
        

          <View style={styles.logtex}>
            <Text style={{ fontSize: 15,color:Colors.secondary,fontWeight:"bold"}}> Hi there!</Text>
            <Text style={styles.logtexin}>Let's Get Started</Text>
          </View>

          <View style={{padding:15}}>
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
              <Text style={{ textAlign: "center", marginTop: 15,color:Colors.gray }}>
                Already have an account?
              </Text>
              <Pressable>
                <Text
                  onPress={() => navigation.navigate("LoginScreen")}
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
    justifyContent:"center"
  },
  img: {
    width: "100%",
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

  // i want to build one application that application have  a two modules 1.admin and 2.parents that application is specially for the childerens that application normaly in the play store every one can able to install this application then login as a parent and then and fill the name and important details about the childeren  parents can able to discribe about our childeres dis ability like hadwritting is not comming properly the spoken is not comming prperly and mentally not strong and stable etc.. like this kind of irregular activitys form childrens and that parants can discribe about the childern and find a exact solution for that problem by this appliction this is usage for this application and then after Parents Concerned about our childrent then prents can able to attend simple assesment about the childrens problem they a some predefined questions form the applicaton parents can able to choose the following yes or no questions for that simple qrustion about our student for best treatmant and theropy  for that problem then show the assesment result to the parents and at the same time perfect Therapiesrecomended to the parets regording about the assesment result for that childers problem they have a perfect treatment and theropys for that and recomended a specific theropi for childers problem  that thyopy like a video actrivitis or meterials or images this a theropys that theropys then that application set the goal for that childerns  problem after that treatment application can assign a acctivities and video guide for childerns all that proceess are predefineded  children can go throw the video or meterials guide and give istroction to their childerns and follow that video for better result about that problem that goal of the video is full filling the parents about their childers promblem that video guide will solve the childrens problem if children and parents followd their videa guide instruction  and this is a major process and then completion of the video guide or meterial guide then show feedback to theri parents that application will show some qustions about the improvement of the childerns problem if children parents can answer the questions b ased on yes or no and give me some comments then application can genetate a repord cat based on the feedback result if that particular childeren got ta good improve ment that student can leave the goal the got a better result no need to follow more or else if childern did not got a improvement aplication can reassaigin the goal and activities and video guides and metetials based on the feedback result then chillderen can able to follow the instruction if once childern got a improvement then quite the proccess if children is not got improvement then again and agin they will continue to this proccess till got improvement 