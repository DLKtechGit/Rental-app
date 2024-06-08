import React from 'react';
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity, Button ,ScrollView} from 'react-native';
import { Colors } from '../Constant';
import Icons from 'react-native-vector-icons/MaterialIcons';



const ProfileScreen = () => {
  return (
    <View style={styles.container}>
        <ScrollView >
      <TouchableOpacity style={styles.profileImageContainer}>
        <Image
          source={require("../assets/Images/userimg1.jpg")}
          style={styles.profileImage}
        />
        <View style={styles.cameraIconContainer}>
          <Text style={styles.cameraIcon}>📷</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.input} value="Nayeem Bhuiyan" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} value="nayeem**@gmail.com" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Phone Number</Text>
        <TextInput style={styles.input}  value="01225483021" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Address</Text>
        <TextInput style={styles.input} value="Dhaka, Bangladesh" />
      </View>
      <TouchableOpacity style={styles.changePasswordContainer}>
        <Text style={styles.changePasswordText}>Change Password</Text>
        <Icons name='keyboard-arrow-right' color={Colors.secondary} size={20}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.white,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 20,
  },
  profileImageContainer: {
    alignSelf: 'center',
    marginBottom: 20,
    position: 'relative',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  cameraIconContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: Colors.secondary,
    borderRadius: 15,
    padding: 5,
  },
  cameraIcon: {
    color: Colors.white,
    fontSize: 18,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 15,
    color: Colors.primary,
    marginBottom: 5,
    fontWeight:"500",
    marginLeft:5
  },
  input: {
    backgroundColor: Colors.white,
    padding: 10,
    borderColor: Colors.borderColor,
    borderWidth: 1,
    color:Colors.gray,
    marginVertical: 2,
    // backgroundColor: "#F4F7FA",
    borderRadius: 10,
    elevation: 2,
    
  },
  changePasswordContainer: {
    gap:180,
    flexDirection:"row",
    alignItems: 'center',
    height:50,
    borderWidth:2,
    borderRadius:10,
   justifyContent:"start",
    borderColor:Colors.borderColor,
marginVertical:15
  },
  changePasswordText: {
    color: Colors.secondary,
    fontWeight:"bold",
    fontSize:15,
    marginLeft:15
  },
  saveButton: {
    backgroundColor: Colors.primary,
    marginTop:50,
    borderRadius: 5,
    padding: 15,
  },
  saveButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ProfileScreen;
