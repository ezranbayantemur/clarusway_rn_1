import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';

import MyBanner from './components/MyBanner';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <MyBanner />
      </View>
    </SafeAreaView>
  );
};

export default App;
