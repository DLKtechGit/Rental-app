import React from "react";
import {
  Dimensions,
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Colors } from "../Constant"; // Assuming you have a Colors file
import house from "../assets/Images/home.jpg";
import store from "../assets/Images/shop.jpg";
import { useNavigation } from "@react-navigation/native";
import Carousel from "react-native-reanimated-carousel";

const rentdata = [
  {
    id: "1",
    image: house,
    date: "Thu, 23 July 2024",
    property: "House1",
    daysLeft: "20",
    price: "3000",
    paymentHistory: "39",
    paidRent: "30",
    upcomingRent: "15",
  },
  {
    id: "2",
    image: store,
    date: "Thu, 10 June 2024",
    property: "House2",
    daysLeft: "10",
    price: "4000",
    paymentHistory: "39",
    paidRent: "20",
    upcomingRent: "13",
  },
  {
    id: "3",
    image: house,
    date: "Thu, 02 May 2024",
    property: "Shope1",
    daysLeft: "30",
    price: "5000",
    paymentHistory: "29",
    paidRent: "10",
    upcomingRent: "11",
  },
  {
    id: "4",
    image: house,
    date: "Thu, 02 May 2024",
    property: "Shope2",
    daysLeft: "30",
    price: "5000",
    paymentHistory: "29",
    paidRent: "10",
    upcomingRent: "11",
  },
];

const StatisticsScreen = () => {
  const navigation = useNavigation();
  const width = Dimensions.get("window").width;

  const images = [
    {
      image: require("../assets/Images/slider2.jpg"),
    },
    {
      image: require("../assets/Images/slider4.jpg"),
    },
    {
      image: require("../assets/Images/slider5.jpg"),
    },
    {
      image: require("../assets/Images/slider6.jpg"),
    },
  ];

  const handlenavigate = (property) => {
    navigation.navigate("Rent Details", {
      initialRouteName: "Upcoming Rents",
      property,
    });
  };

  const dataItems = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => handlenavigate(item.property)}
        style={styles.card}
      >
        <View style={styles.header}>
          <Text style={styles.headerText}>{item.property}</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Rent Details")}>
            <Text style={styles.headerLink}>{item.date}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.amountContainer}>
          <View style={styles.amountSection}>
            <Text style={styles.amountLabel}>Paid Rents</Text>
            <Text style={styles.amountValue}>{item.paidRent}</Text>
          </View>
          <View style={styles.amountSection}>
            <Text style={styles.amountLabel}>Upcoming Rent</Text>
            <Text style={styles.amountValue}>{item.upcomingRent}</Text>
          </View>
          <View style={styles.amountSection}>
            <Text style={styles.amountLabel}>Rent Amount</Text>
            <Text style={styles.amountValue}>₹ {item.price}</Text>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.overdueText}>
            <Text style={styles.overdueDays}>{item.daysLeft} Days </Text> left
            for payment
          </Text>
          <View>
            <Text style={styles.makePayment}>MAKE PAYMENT</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.fixedContent}>
        <View style={styles.profileContainer}>
          <Image
            source={require("../assets/Images/userimg1.jpg")}
            style={styles.profileImage}
          />
          <View style={styles.profileDetails}>
            <Text style={styles.name}>Eugene Griffin</Text>
            <Text style={styles.details}>
              <Icon name="email" /> &nbsp; eugenegriffin@gmail.com
            </Text>
            <Text style={styles.status}>
              <Icon name="call" /> &nbsp; 87483483349{" "}
            </Text>
          </View>
        </View>

        <View style={styles.carouselContainer}>
          <Carousel
            loop
            width={width}
            height={width / 2}
            autoPlay={true}
            data={images}
            scrollAnimationDuration={1000}
            renderItem={({ item }) => (
              <View style={{ justifyContent: "center", paddingHorizontal: 10 }}>
                <Image
                  source={item.image}
                  style={styles.sliderImg}
                  resizeMode="cover"
                />
              </View>
            )}
          />
        </View>
      </View>

      <ScrollView  style={styles.scrollViewContent}>
        <View style={styles.statscContainer}>
          <View style={styles.leftLayout}>
            <View style={styles.statsCard1}>
              <Text style={styles.statsCount}>30</Text>
              <Text style={styles.statsText}> Total Paid Rents</Text>
            </View>

            <View style={styles.statsCard2}>
              <View>
                <Text style={styles.statsCount}>₹ 20.k</Text>
                <Text style={styles.statsText}> Outstanting Amount</Text>
              </View>
            </View>
          </View>
        </View>

        <FlatList
          data={rentdata}
          renderItem={dataItems}
          keyExtractor={(item) => item.id}
          style={{ marginTop: 10, paddingHorizontal: 10 }}
        />
        
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fixedContent: {
    backgroundColor: Colors.white,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: Colors.white,
    height: 110,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 15,
  },
  profileDetails: {
    marginLeft: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 5,
    color: Colors.secondary,
  },
  details: {
    fontSize: 14,
    color: Colors.primary,
    marginLeft: 3,
    marginVertical: 3,
  },
  status: {
    fontSize: 14,
    color: Colors.gray,
    marginLeft: 5,
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 15,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginTop: 20,
    borderTopWidth: 1.5,
    borderTopColor: Colors.borderColor,
    borderLeftWidth: 1.5,
    borderLeftColor: Colors.borderColor,
    borderRightWidth: 1.5,
    borderRightColor: Colors.borderColor,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderColor,
    paddingBottom: 10,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.black,
    marginTop: 5,
  },
  headerLink: {
    fontSize: 14,
    color: Colors.secondary,
    fontWeight: "bold",
    marginTop: 5,
  },
  amountContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  amountSection: {
    alignItems: "center",
  },
  amountLabel: {
    fontSize: 14,
    color: Colors.gray,
  },
  amountValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.black,
    marginTop: 15,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: Colors.borderColor,
    paddingTop: 15,
  },
  overdueText: {
    fontSize: 14,
    color: Colors.successColor,
  },
  overdueDays: {
    fontWeight: "bold",
  },
  makePayment: {
    fontSize: 14,
    color: Colors.secondary,
    fontWeight: "bold",
  },
  sliderImg: {
    width: "100%",
    height: 100,
    borderRadius: 5,
  },
  carouselContainer: {
    paddingVertical: 10,
    marginBottom: 100,
  },
  scrollViewContent: {
    flex: 1,
    marginBottom: 10,
  },
  statscContainer: {
    width: "100%",
    padding: 15,
    flexDirection: "column",
    backgroundColor: Colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
  leftLayout: {
    gap: 10,
    flexDirection: "row",
  },
  statsCard1: {
    width: "50%",
    height: 110,
    paddingTop: 20,
    backgroundColor:"#B9E0EC",
    borderRadius: 20,
  },
  statsCard2: {
    width: "50%",
    height: 110,
    paddingTop: 20,
    backgroundColor: "#727474",
    borderRadius: 20,
  },
  statsCount: {
    color: Colors.white,
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
  },
  statsText: {
    color: Colors.white,
    justifyContent: "center",
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
  },
});

export default StatisticsScreen;
