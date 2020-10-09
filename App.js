import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Hello React Native</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
