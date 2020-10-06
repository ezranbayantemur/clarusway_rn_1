/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{backgroundColor: 'green', flex: 1}}>
      <View style={{backgroundColor: 'red', flex: 1}}>
        <Text>Merhaba</Text>
        <Text>Merhaba</Text>
        <Text>Merhaba</Text>
      </View>

      <View style={{backgroundColor: 'blue', flex: 1}}>
        <Text>Selam</Text>
      </View>

      <View style={{backgroundColor: 'yellow', flex: 1}}>
        <Text>Clarusway</Text>
        <Text>Clarusway</Text>
        <Text>Clarusway</Text>
        <Text>Clarusway</Text>
        <Text>Clarusway</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
