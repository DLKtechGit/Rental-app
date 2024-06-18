import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import { Colors } from '../Constant';

const { width } = Dimensions.get('window');

const PaymentDetailScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        
        <Text style={styles.headerText}>MKB5C56677ID113748139</Text>
      </View>
      <View style={styles.amountContainer}>
        <View style={styles.amout}>
        <Text style={styles.amountText}>₹ 2082.1</Text>
        </View>
        <View style={styles.statusContainer}>
          <Text style={styles.status}>Status</Text>
          <Text style={styles.paidOn}>Paid On</Text>
        </View>
        <View style={styles.statusContainer}>
          <Text style={styles.statusValue}>Paid</Text>
          <Text style={styles.paidOnDate}>27-May-2024</Text>
        </View>
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Rent Amount</Text>
          
          <Text style={styles.detailValue}>₹ 1836.0</Text>
          </View>
        
        <View style={styles.borders}>
        <Text style={styles.detailDate}>27-Apr-2024</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Fees & Other Charges</Text>
          <Text style={styles.detailValue}>₹ 136.1</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Maintanance Fees</Text>
          <Text style={styles.detailValue}>₹ 30</Text>
        </View>
        {/* <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Interest Before Due Date</Text>
          <Text style={styles.detailValue}>₹ 80.0</Text>
        </View> */}
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Late Charges</Text>
          <Text style={styles.detailValue}>₹ 0.0</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Total Amount Paid</Text>
          <Text style={styles.detailValue}>₹ 2082.1</Text>
        </View>
      </View>
      
     <TouchableOpacity style={styles.invoiceButton} >
         <Text style={{marginTop:15,marginLeft:75,fontWeight:"bold",fontSize:15,color:Colors.white}}>            Download Invoice
         </Text>
     </TouchableOpacity>
     
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    marginTop:40
},
  header: {
    backgroundColor: '#00a15e',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  backButton: {
    color: '#fff',
    fontSize: 25,
    marginRight: 10,
  },
  headerText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',

  },
  amountContainer: {
    backgroundColor: '#fff',
    padding: 20,
    margin: 15,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 5,
  },
  amountText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00a15e',
    marginBottom:5
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  status: {
    fontSize: 14,
    color: '#666',
  },
  paidOn: {
    fontSize: 14,
    color: '#666',
  },
  statusValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  paidOnDate: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  detailsContainer: {
    backgroundColor: '#fff',
    padding: 20,
    marginHorizontal: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 5,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    borderBottomWidth:1,
    borderBottomColor:Colors.borderColor,
  },
  detailLabel: {
    fontSize: 16,
    color: '#000',
  },
  detailValue: {
    fontSize: 16,
    color: '#000',
    marginBottom:10

  },
  detailDate: {
    fontSize: 14,
    color: '#666',
    alignSelf: 'flex-start',
    marginVertical: 5,
  },
  amout:{
    borderBottomWidth:1,
    width:"100%",
    borderBottomColor:Colors.borderColor,
    alignItems:"center"
  },
  borders:{
    borderBottomWidth:1,
    borderBottomColor:Colors.borderColor
  },
  invoiceButton:{
    backgroundColor:Colors.successColor,
    height:50,
    alignItems:"flex-start",
    // padding: 20,
    marginHorizontal: 15,
    borderRadius: 10,
    marginBottom: 15,
  }
});

export default PaymentDetailScreen;
