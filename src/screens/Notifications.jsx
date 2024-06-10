import React from 'react';
import { View, Text, StyleSheet, FlatList,TouchableOpacity ,ScrollView} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../Constant';
import { useNavigation } from '@react-navigation/native';

const notifications = [
  // {
  //   id: '1',
  //   icon: 'event',
  //   message: 'Reminder: You have 1 invitation tonight at 17pm',
  //   time: '2h 17min ago',
  //   iconColor: '#00C853'
  // },
  {
    id: '2',
    icon: 'maps-home-work',
    message: 'Reminder: Your house rent is due. Please pay by the end of the month.',
    time: 'Yesterday, 17:35 pm',
    iconColor: '#FFA000'
  },
  {
    id: '3',
    icon: 'directions-car',
    message: 'Reminder: Your car rent is due. Please pay by the end of the month.',
    time: 'Sunday, 06:15 pm',
    iconColor: '#00B0FF'
  },
  
];


const NotificationItem = ({ item,navigation}) => (
  <TouchableOpacity onPress={()=>navigation.navigate("Notification Details")} style={styles.notificationItem}>
    <View style={[styles.iconContainer, { backgroundColor: item.iconColor }]}>
      <Icons name={item.icon} size={24} color={Colors.white} />
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.message}>{item.message}</Text>
      <Text style={styles.time}>{item.time}</Text>
    </View>
  </TouchableOpacity>
);

const NotificationsScreen = () => {
  const navigation = useNavigation()


  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <NotificationItem item={item} navigation={navigation} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.borderColor,
    padding: 10,
    marginTop:15
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    elevation: 2,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.10,
    shadowRadius: 1,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  message: {
    fontSize: 16,
    color: Colors.black,
  },
  time: {
    fontSize: 12,
    color:Colors.gray,
    marginTop: 5,
  },
});

export default NotificationsScreen;
