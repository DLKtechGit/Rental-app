import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Colors } from "../Constant"; // Assuming you have a Colors file

function StatisticsScreen() {
  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <Text style={styles.headerText}>Dashboard</Text>
      </View> */}

      <View style={styles.profileContainer}>
        <Image
          source={require("../assets/Images/userimg1.jpg")}
          style={styles.profileImage}
        />
        <View style={styles.profileDetails}>
          <Text style={styles.name}>Eugene Griffin</Text>

          <Text style={styles.details}> <Icon name="email"  /> &nbsp; eugenegriffin@gmail.com</Text>
          <Text style={styles.status}> <Icon name="call"/> &nbsp; 87483483349 </Text>
        </View>
      </View>

      <View style={styles.statsContainer}>
        <View style={[styles.card, styles.elevation]}>
          <Text style={styles.statNumber}>8</Text>
          <Text style={styles.statLabel}>Total Paid Rents</Text>
        </View>
        <View style={[styles.card, styles.elevation]}>
          <Text style={styles.statNumber}>10</Text>
          <Text style={styles.statLabel}>Upcoming Rent</Text>
        </View>
        <View style={[styles.card, styles.elevation]}>
          <Text style={styles.statNumber}>20,000</Text>
          <Text style={styles.statLabel}>Total Amount</Text>
        </View>
      </View>

      <View style={styles.bikeContainer}>
        <Image
          source={require("../assets/Images/home.jpg")}
          style={styles.bikeImage}
        />
        <Text style={styles.date}>Thu, 23 July 2019</Text>
        <View style={{flexDirection:"row"}}>
        <Text style={styles.bikeDetails}>Rental  : </Text>
        <Text style={styles.house} >House </Text>
        </View>
        <View style={styles.bikeStats}>
            <View style={styles.daysLeft}>
          <Text style={styles.bikeStat}>20</Text>
          <Text style={styles.bikeStat}> Days left  </Text>
          </View>
          <View style={styles.verticleLine}></View>
          <View style={styles.daysLeft}>
          <Text style={styles.bikeStat}>6000</Text>
          <Text style={styles.bikeStat}> Price per month  </Text>
          </View>   
          <View style={styles.verticleLine}></View>       
          <View style={styles.daysLeft}>
          <Text style={styles.bikeStat}>163</Text>
          <Text style={styles.bikeStat}> Payment History </Text>
          </View>        
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  header: {
    alignItems: "center",
    marginTop: 40,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
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
    color:Colors.secondary
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
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
marginTop:20    
  },
  card: {  
    backgroundColor: 'white',  
    borderRadius: 8,  
     width:115,
     height:115,
    marginTop: 20,  
    justifyContent:"center",
    gap:10
  },  
  elevation: {  
    shadowColor: '#52006A',  
    elevation: 20,  
  },  
  statNumber: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign:"center",
  },
  statLabel: {
    fontSize: 14,
    color: "#777",
    textAlign:"center",
},
  bikeContainer: {
    backgroundColor: "#F8EEF6",
    borderRadius: 10,
    // padding: 10,
    marginTop:40,
    height:380,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20
  },
  bikeImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  date: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 5,
    color:Colors.primary,
    marginLeft:10,
    marginTop:10
  },
  time: {
    fontSize: 14,
    color: "#777",
  },
  bikeDetails: {
    fontSize: 14,
    fontWeight: "bold",
    marginLeft:10,
    color:Colors.primary
  },
  price: {
    fontSize: 14,
    color: "orange",
    marginVertical: 5,
    color:Colors.white
  },
  bikeStats: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    padding:10
    // borderWidth:1
  },
  bikeStat: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign:'center',
    color:Colors.primary
  },
  bottomTab: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 60,
    backgroundColor: "#f9f9f9",
    borderRadius: 30,
    position: "absolute",
    bottom: 20,
    left: 10,
    right: 10,
  },
  house:{
color:Colors.secondary,
marginLeft:10,
},
  daysLeft:{
    marginTop:25,
},
verticleLine:{
    height: '70%',
    width: 1,
    backgroundColor: Colors.gray,
    marginTop:25
  },
  bileheder:{
    paddingLeft:10
  }
});

export default StatisticsScreen;
