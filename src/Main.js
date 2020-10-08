import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';

import MyBanner from './components/MyBanner';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <MyBanner
          title="Çorbalar"
          desc="Birbirinden leziz çorbalar!"
          color="#e57373"
          isActive={false}
        />

        <MyBanner
          title="Ara Sıcaklar"
          desc="Lezzetli aparetifler!"
          color="#81d4fa"
        />

        <MyBanner
          title="Ana Yemekler"
          desc="Doyurucu lezzetler!"
          color="#ffd54f"
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
