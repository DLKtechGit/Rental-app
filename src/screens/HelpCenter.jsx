import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const HelpCenterScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/Images/helplogo.jpg")}
        style={styles.helpImage}
      />
      <Text style={styles.description}>
        Welcome to our Rantal App Help Center. We're here to assist you. If you have questions or need help, explore our user-friendly interface for FAQs and support. Your satisfaction is our priority.
      </Text>
      <TouchableOpacity style={[styles.button, styles.callButton]}>

        <FontAwesome name="phone" size={24} color="white" />
        <Text style={styles.buttonText}>+88 01768572658</Text>
        <MaterialCommunityIcons name="chevron-right" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.whatsappButton]}>
        <FontAwesome name="whatsapp" size={24} color="white" />
        <Text style={styles.buttonText}>+88 01768572658</Text>
        <MaterialCommunityIcons name="chevron-right" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.messengerButton]}>
        <Ionicons name="logo-facebook" size={24} color="white" />
        <Text style={styles.buttonText}>Facebook messenger</Text>
        <MaterialCommunityIcons name="chevron-right" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor:Colors.white,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 20,
  },
  helpImage: {
    width: 300,
    height: 300,
    alignSelf: 'center',
    // marginBottom: 20,
  },
  description: {
    fontSize: 14,
    color: '#888888',
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  callButton: {
    backgroundColor: '#000000',
  },
  whatsappButton: {
    backgroundColor: '#25D366',
  },
  messengerButton: {
    backgroundColor: '#0084FF',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    flex: 1,
    marginLeft: 10,
  },
});

export default HelpCenterScreen;
