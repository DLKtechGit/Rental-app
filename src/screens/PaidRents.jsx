import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import {
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Colors } from "../Constant";

const loansData = [
  {
    id: "1",
    paidOn: "27",
    month: "May, 24",
    amount: "₹ 2082.1",
    rendedDate: "27-Apr-2024",
  },
  {
    id: "2",
    paidOn: "23",
    month: "May, 24",
    amount: "₹ 2082.1",
    rendedDate: "27-Apr-2024",
  },
  {
    id: "3",
    paidOn: "22",
    month: "Dec, 23",
    amount: "₹ 2258.3",
    rendedDate: "11-Nov-2023",
  },
  {
    id: "4",
    paidOn: "11",
    month: "Nov, 23",
    amount: "₹ 2338.4",
    rendedDate: "07-Aug-2023",
  },
  {
    id: "5",
    paidOn: "25",
    month: "Jul, 23",
    amount: "₹ 2498.5",
    rendedDate: "07-Mar-2023",
  },
];

const PaidRents = () => {
  const renderLoanItem = ({ item }) => (
    <View style={styles.loanItem}>
      <View style={styles.loanInfo}>
        <Text style={styles.onepayment}> One payment</Text>
        <View style={[styles.dateContainer]}>
          <View style={styles.paidOncontainer}>
            <Text style={styles.paidOn}>Paid On</Text>
          </View>
          <Text style={styles.date}>{item.paidOn}</Text>
          <Text style={styles.month}>{item.month}</Text>
        </View>
      </View>
      <View style={styles.verticleLine}></View>
      <View style={styles.amountInfo}>
        <Text style={styles.rendedDate}>Rented On : {item.rendedDate}</Text>
        <Text style={styles.amount}>Amount Paid</Text>
        <Text style={styles.amountValue}>{item.amount}</Text>
      </View>
      <View style={styles.arrowicon}>
        <MaterialCommunityIcons
          name="chevron-right"
          size={24}
          color={Colors.secondary}
        />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterButtonText}>Year</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterButtonText}>Month</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterButtonText}>Date</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={loansData}
        renderItem={renderLoanItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.loanList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.borderColor,
  },

  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    backgroundColor: Colors.white,
  },
  filterButton: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: Colors.borderColor,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  filterButtonText: {
    fontSize: 14,
    color: Colors.primary,
  },

  loanList: {
    padding: 10,
  },
  loanItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor:Colors.white,
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    borderLeftWidth: 10,
    borderLeftColor: Colors.successColor,
    borderTopWidth: 1,
    borderTopColor: Colors.successColor,
    borderBottomWidth: 1,
    borderBottomColor: Colors.successColor,
    borderRightWidth: 1,
    borderRightColor: Colors.successColor,
  },
  loanInfo: {
    alignItems: "center",
    flex: 1,
  },

  dateContainer: {
    alignItems: "center",
    marginRight: 20,
    borderBottomEndRadius: 8,
    borderBottomStartRadius: 8,
    borderTopStartRadius: 8,
    width: 60,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  paidOn: {
    fontSize: 10,
    color: Colors.white,
  },
  date: {
    fontSize: 24,
    fontWeight: "bold",
    color:Colors.black,
  },
  month: {
    fontSize: 12,
    color: "#888",
    marginVertical: 3,
  },
  amountInfo: {
    flex: 3,
    marginLeft: 10,
  },
  rendedDate: {
    fontSize: 13,
    color: Colors.black,
  },
  amount: {
    fontSize: 14,
    color: Colors.black,
    marginVertical: 3,
  },
  amountValue: {
    fontSize: 18,
    fontWeight: "bold",
    color:Colors.black,
  },
  onepayment: {
    fontSize: 12,
    color: Colors.black,
    width: 100,
    marginBottom: 5,
  },
  verticleLine: {
    height: "100%",
    width: 1,
    backgroundColor: Colors.gray,
  },
  paidOncontainer: {
    backgroundColor: Colors.successColor,
    width: 60,
    alignItems: "center",
    borderTopEndRadius: 5,
    borderTopStartRadius: 5,
  },

  arrowicon: {
    borderRadius: 50,
    backgroundColor: Colors.borderColor,
  },
});

export default PaidRents;
