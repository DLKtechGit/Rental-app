import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ProgressBarAndroid,
  StatusBar,
} from "react-native";
import { Colors } from "../Constant";
import Arrow from "react-native-vector-icons/MaterialIcons";
import CircularProgress from "../components/CircleBar";
import ProgressBar from "../components/PercentageBar";
import BottomTab from "../components/BottomTab";

function Dashboard() {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.hedText}> Dashboard </Text>
      </View>

      <View style={{ padding: 10 }}>
        {/*  ============================ Boady Top layput ========================= */}


        <View style={{ display: "flex", flexDirection: "row", marginTop: 10 }}>
          <View style={styles.leftLayout}>
            <View style={{ paddingLeft: 15, paddingTop: 20 }}>
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: 25 }}
              >
                20
              </Text>
              <Text style={{ color: "white" }}> Total Paid Rents</Text>
            </View>

            <View style={styles.leftLayout2}>
              <View style={{ paddingLeft: 15, paddingTop: 20 }}>
                <Text
                  style={{ color: "white", fontWeight: "bold", fontSize: 25 }}
                >
                  20
                </Text>
                <Text style={{ color: "white" }}> Total Amount</Text>
              </View>
            </View>
          </View>

          <View style={{ paddingLeft: 50, paddingTop: 30 }}>
            <CircularProgress
              percentage={60}
              radius={80}
              strokeWidth={10}
              color={Colors.primary}
            />
          </View>
        </View>

        {/* ========================== Boady center Layout =============================== */}

        <View style={styles.bodycenter}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 180,
              marginTop: 15,
            }}
          >
            <Text style={{ fontWeight: "900", fontSize: 16 }}>
              {" "}
              Rent Paid LIst
            </Text>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text
                style={{
                  fontWeight: "900",
                  fontSize: 16,
                  color: Colors.primary,
                }}
              >
                {" "}
                View all{" "}
              </Text>
              <Arrow
                color={Colors.primary}
                size={20}
                name="keyboard-arrow-right"
              />
            </View>
          </View>
          <View style={styles.progress}>
            <ProgressBar
              progress={10}
              total={12}
              color={Colors.primary}
              backgroundColor="#e0e0e0"
            />
          </View>
        </View>

        {/* ======================== Body Bottom Layout ================= */}
        <View>
          <View style={styles.mainTextBottom}>
            <Text style={{ fontWeight: "900", fontSize: 16 }}>
              {" "}
              Payment History
            </Text>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text
                style={{
                  fontWeight: "900",
                  fontSize: 16,
                  color: Colors.primary,
                }}
              >
                {" "}
                View all{" "}
              </Text>
              <Arrow
                color={Colors.primary}
                size={20}
                name="keyboard-arrow-right"
              />
            </View>
          </View>

          <View style={{ flexDirection: "row", gap: 15, paddingTop: 20 }}>
            <View style={styles.bottomLayout1}>
              <Text
                style={{
                  color: "white",
                  fontWeight: "900",
                  textAlign: "center",
                  marginTop: 10,
                }}
              >
                December
              </Text>
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontWeight: "900",
                  fontSize: 20,
                }}
              >
                1
              </Text>
            </View>

            <View style={styles.bottomLayout2}></View>

            <View style={styles.bottomLayout3}></View>
          </View>
        </View>
      </View>
      <StatusBar />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "start",
  },
  navbar: {
    width: "100%",
    height: 120,
    // flex:1,
    backgroundColor: Colors.primary,
  },
  hedText: {
    marginTop: 70,
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginLeft: 20,
    fontFamily: "sans-serif",
  },
  leftLayout: {
    width: 140,
    height: 100,
    backgroundColor: Colors.primary,
    borderRadius: 20,
    marginTop: 15,
    gap: 28,
  },
  leftLayout2: {
    width: 140,
    height: 100,
    backgroundColor: "#A3D7E7",
    borderRadius: 20,
    marginTop: 10,
  },
  bodycenter: {
    borderColor: "#F2F4F4",
    borderTopWidth: 10,
    marginTop: 60,
    width: "auto",
    borderBottomWidth: 10,
    height: 210,
  },
  progress: {
    backgroundColor: "#E9FAFA",
    borderRadius: 20,
    marginTop: 25,
    padding: 5,
  },
  bottomLayout1: {
    width: 110,
    height: 110,
    backgroundColor: Colors.primary,
    borderRadius: 15,
  },
  bottomLayout2: {
    width: 110,
    height: 110,
    backgroundColor: "#A3D7E7",
    borderRadius: 15,
  },
  bottomLayout3: {
    width: 110,
    height: 110,
    backgroundColor: "#D5F5F5",
    borderRadius: 15,
  },
  mainTextBottom: {
    display: "flex",
    flexDirection: "row",
    gap: 160,
    marginTop: 15,
  },
  mainTextTop:{
    display: "flex", flexDirection: "row", gap: 200
  }
   
});
export default Dashboard;





// // import React from 'react';
// import { View, Text, StyleSheet, Image } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import { Colors } from '../Constant'; // Adjust the import path according to your project structure

// function StatisticsScreen() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.headerText}>Statistic</Text>
//       </View>

//       <View style={styles.profileContainer}>
//         <Image
//           source={{ uri: 'https://via.placeholder.com/100' }}
//           style={styles.profileImage}
//         />
//         <View style={styles.profileDetails}>
//           <Text style={styles.name}>Eugene Griffin</Text>
//           <Text style={styles.details}>28 years old   78 kg</Text>
//           <Text style={styles.status}>Reliable</Text>
//         </View>
//       </View>

//       <View style={styles.statsContainer}>
//         <View style={styles.statBox}>
//           <Text style={styles.statNumber}>1 560</Text>
//           <Text style={styles.statLabel}>km</Text>
//         </View>
//         <View style={styles.statBox}>
//           <Text style={styles.statNumber}>78</Text>
//           <Text style={styles.statLabel}>hours</Text>
//         </View>
//         <View style={styles.statBox}>
//           <Text style={styles.statNumber}>2,6k</Text>
//           <Text style={styles.statLabel}>calories</Text>
//         </View>
//       </View>

//       <View style={styles.bikeContainer}>
//         <Image
//           source={{ uri: 'https://via.placeholder.com/150' }}
//           style={styles.bikeImage}
//         />
//         <Text style={styles.date}>Thu, 23 July 2019</Text>
//         <Text style={styles.time}>16:00 - 21:00</Text>
//         <Text style={styles.bikeDetails}>Rental: Duke Bike</Text>
//         <Text style={styles.price}>Price: 40$/per hour</Text>
//         <View style={styles.bikeStats}>
//           <Text style={styles.bikeStat}>163 km</Text>
//           <Text style={styles.bikeStat}>5 hours</Text>
//           <Text style={styles.bikeStat}>350 calories</Text>
//         </View>
//       </View>

//       <View style={styles.bottomTab}>
//         <Icon name="bar-chart" size={30} color={Colors.primary} />
//         <Icon name="search" size={30} color={Colors.primary} />
//         <Icon name="person" size={30} color={Colors.primary} />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: Colors.background,
//     padding: 10,
//   },
//   header: {
//     alignItems: 'center',
//     marginVertical: 10,
//   },
//   headerText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: Colors.text,
//   },
//   profileContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 10,
//   },
//   profileImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//   },
//   profileDetails: {
//     marginLeft: 10,
//   },
//   name: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: Colors.text,
//   },
//   details: {
//     fontSize: 14,
//     color: Colors.text,
//   },
//   status: {
//     fontSize: 14,
//     color: Colors.success,
//   },
//   statsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginVertical: 10,
//   },
//   statBox: {
//     alignItems: 'center',
//     backgroundColor: Colors.secondary,
//     padding: 10,
//     borderRadius: 10,
//   },
//   statNumber: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: Colors.background,
//   },
//   statLabel: {
//     fontSize: 14,
//     color: Colors.background,
//   },
//   bikeContainer: {
//     backgroundColor: '#f9f9f9',
//     borderRadius: 10,
//     padding: 10,
//     marginVertical: 10,
//   },
//   bikeImage: {
//     width: '100%',
//     height: 150,
//     borderRadius: 10,
//   },
//   date: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginVertical: 5,
//     color: Colors.text,
//   },
//   time: {
//     fontSize: 14,
//     color: Colors.text,
//   },
//   bikeDetails: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     marginVertical: 5,
//     color: Colors.text,
//   },
//   price: {
//     fontSize: 14,
//     color: Colors.primary,
//     marginVertical: 5,
//   },
//   bikeStats: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 10,
//   },
//   bikeStat: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: Colors.text,
//   },
//   bottomTab: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     height: 60,
//     backgroundColor: '#f9f9f9',
//     borderRadius: 30,
//     position: 'absolute',
//     bottom: 20,
//     left: 10,
//     right: 10,
//   },
// });

// export default StatisticsScreen;

