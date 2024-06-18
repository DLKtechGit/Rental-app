import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
  Modal
} from "react-native";
import {
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Colors } from "../Constant";
import { useState } from "react";
import DropDownPicker from 'react-native-dropdown-picker';
import DatePicker from 'react-native-modern-datepicker';
import { useNavigation, useRoute } from "@react-navigation/native";



const House1 = [
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
const House2 = [
  {
    id: "1",
    paidOn: "10",
    month: "june, 24",
    amount: "₹ 3022",
    rendedDate: "10-may-2024",
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
]

const Shope1 = [
  {
    id: "1",
    paidOn: "11",
    month: "Apr, 24",
    amount: "₹ 3112",
    rendedDate: "10-Dec-2024",
  },
  {
    id: "2",
    paidOn: "23",
    month: "May, 24",
    amount: "₹ 2082.1",
    rendedDate: "27-Apr-2024",
  },
  
]

const Shope2 = [
  {
    id: "1",
    paidOn: "11",
    month: "Apr, 24",
    amount: "₹ 3112",
    rendedDate: "10-Dec-2024",
  },
]




const PaidRents = ({property }) => {

  const [value, setValue] = useState(property||"");
  const [items, setItems] = useState([
    { label: 'House1', value: 'House1' },
    { label: 'House2', value: 'House2' },
    { label: 'Shope1', value: 'Shope1' },
    { label: 'Shope2', value: 'Shope2' },
    
  ]);
  const [open, setOpen] = useState(false);
  const [dropDownOpen,SetdropDownOpen] = useState(false)
  const [date, setDate] = useState("");
  const [paidData,setPaidData] = useState([])
  const route = useRoute()
  // const {property,initialRouteName } = route.params
const navigation= useNavigation()



  const handleOnPress = () => {
    setOpen(!open);
  };


console.log("value",value);

useEffect(()=>{
if(value === "House1"){
  setPaidData(House1)
}
else if(value === "House2"){
  setPaidData(House2)
}
else if(value === "Shope1"){
  setPaidData(Shope1)
}
else if(value === "Shope2"){
  setPaidData(Shope2)
}
console.log("paiddata",paidData);
},[value])

console.log('para',property);



  const renderLoanItem = ({ item }) => (
    <TouchableOpacity onPress={()=>navigation.navigate("Payed Details")}>
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
    </TouchableOpacity>

  );


  return (
    <View style={styles.container}>
      
      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.filterButton} onPress={handleOnPress}>
          <Text style={styles.filterButtonText}>Filter by yrs/mon</Text>
        </TouchableOpacity>
        

      <View style={drop.dropCOntainer}>
        <DropDownPicker
        open={dropDownOpen}
        value={value}
        items={items}
        setOpen={SetdropDownOpen}
        setValue={setValue}
        setItems={setItems}
        style={drop.dropdown}
        dropDownContainerStyle={drop.listItem}
        placeholder="Select property"
        
      />
      </View>

      </View>
      {paidData.length > 0?(
      <FlatList

        data={paidData}
        renderItem={renderLoanItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.loanList}

      />):(
        <View style={styles.noRecordsContainer}>
          <Text style={styles.noRecordsText}>  No Record Found</Text>
          <Text style={styles.noRecordsText}> Please select a property for find your Rents</Text>
          </View>
      )}

            <Modal animationType="slide" transparent={true} visible={open}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <DatePicker
              mode="monthYear"
              selectorStartingYear={2000}
              onMonthYearChange={(selectedDate) => setDate(selectedDate)}
            />
            <TouchableOpacity style={styles.closeButton} onPress={handleOnPress}>
              <Text style={{color:Colors.white,textAlign:"center",padding:5}}> Close </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

    </View>



    

  );
};


const drop = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    padding: 16,

  },
  label: {
    fontSize: 15,
    marginBottom: 8,
    zIndex:1

  },
  
  listItem: {
    borderColor:Colors.borderColor,
    textAlign:"center",
    width:180,
    zIndex:1,

    
  },
  dropdown: {
    backgroundColor: Colors.borderColor,
    borderColor:Colors.borderColor,
    width:180,
    height: 30,

  },
 
  selectedValue: {
    marginTop: 16,
    fontSize: 16,

  },
  dropCOntainer:{
    zIndex:1
  }
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.borderColor,
  },


  filterButton: {
    marginHorizontal: 5,
    backgroundColor: Colors.borderColor,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
width:100,

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
    // marginTop:20,
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
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    backgroundColor: Colors.white,
    zIndex:1
  },
  filterButton: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: Colors.borderColor,
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  filterButtonText: {
    fontSize: 14,
    color: Colors.primary,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    padding:"3%"
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    width: "100%",
    padding:10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeButton:{
    backgroundColor:Colors.primary,
    width:100,
    height:30,
    borderRadius:10,
    },
    noRecordsContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    noRecordsText: {
      fontSize: 18,
      color: Colors.gray,
    }
    

 
});

export default PaidRents;


