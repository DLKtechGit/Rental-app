import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProgressBar = ({ progress, total, color, backgroundColor }) => {
  const percentage = (progress / total) * 100;

  return (
    <View style={styles.container}>
      <View style={[styles.progressBar, { backgroundColor }]}>
        <View style={[styles.filler, { width: `${percentage}%`, backgroundColor: color }]} />
      </View>
      <View style={styles.textContainer}>
        <View >
        <Text style={styles.text}>{progress}</Text>
        <Text style={styles.subText}>Paid</Text>
        </View>
        <View >
        <Text style={styles.text}>{total - progress}</Text>
        <Text style={styles.subText}>Months</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  progressBar: {
    height: 15,
    borderRadius: 10,
    overflow: 'hidden',
  },
  filler: {
    height: '100%',
    borderRadius: 10,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    paddingHorizontal:10
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft:8
  },
  subText: {
    fontSize: 12,
    color: 'grey',
    
  },
});

export default ProgressBar;
