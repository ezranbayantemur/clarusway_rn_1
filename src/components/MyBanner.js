import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MyBanner = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Çorbalar</Text>
    </View>
  );
};

export default MyBanner;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eceff1',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});
