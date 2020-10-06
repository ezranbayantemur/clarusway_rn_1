/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={{width: 40, height: 40, backgroundColor: 'red'}} />
        <View style={{width: 40, height: 40, backgroundColor: 'blue'}} />
        <View style={{width: 40, height: 40, backgroundColor: 'green'}} />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#e0e0e0',
    justifyContent: 'center', // 'space-between', 'space-around', 'space-evenly',
    alignItems: 'flex-start', // flex-start, flex-end
  },
});
