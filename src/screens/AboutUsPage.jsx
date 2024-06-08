import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { Colors } from '../Constant';

const AboutUsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require("../assets/Images/about-img.png")}
        style={styles.aboutImage}
      />
      <Text style={styles.description}>
        Welcome to our Rental App, your reliable solution for paying rents effortlessly. Our mission is to simplify the rental payment process and provide a seamless experience for both tenants and landlords. With secure payment options and user-friendly interface, managing your rental payments has never been easier.
      </Text>
      <Text style={styles.subHeader}>Our Mission</Text>
      <Text style={styles.text}>
        We aim to provide a trustworthy platform where tenants can pay their rents conveniently and landlords can receive payments without any hassle. Our focus is on security, ease of use, and customer satisfaction.
      </Text>
      <Text style={styles.subHeader}>Our Values</Text>
      <Text style={styles.text}>
        - **Integrity**: We maintain the highest standards of integrity and transparency in all our actions.
        - **Customer First**: Our customers are at the heart of everything we do. We strive to exceed their expectations every day.
        - **Innovation**: We constantly seek innovative solutions to improve our services and provide the best experience for our users.
      </Text>
      <Text style={styles.subHeader}>Contact Us</Text>
      <Text style={styles.text}>
        Have questions or need assistance? Feel free to reach out to our support team at any time. We are here to help!
        {'\n'}{'\n'}
        Email: support@rentalapp.com
        {'\n'}
        Phone: +88 0123456789
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor:Colors.white,
    alignItems: 'center',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  aboutImage: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginBottom: 30,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 24,
  },
  subHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 24,
  },
});

export default AboutUsScreen;
