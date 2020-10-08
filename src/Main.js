import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';

import MyBanner from './components/MyBanner';

const food_data = [
  {
    id: 0,
    title: 'Çorbalar',
    desc: 'Birbirinden leziz çorbalar!',
    color: '#e57373',
    isActive: false,
  },
  {
    id: 1,
    title: 'Ara Sıcaklar',
    desc: 'Lezzetlei aparetifler',
    color: '#81d4fa',
    isActive: true,
  },
  {
    id: 2,
    title: 'Ana Yemekler',
    desc: 'Doyurucu lezzetler',
    color: '#ffd54f',
    isActive: false,
  },
  {
    id: 3,
    title: 'Alkolsüz İçecekler',
    desc: 'Buz gibi serinletici lezzetler',
    color: '#cfd8dc',
    isActive: true,
  },
  {
    id: 4,
    title: 'Alkollü İçecekler',
    desc: 'Buz gibi serinletici alkollü lezzetler',
    color: '#c5e1a5',
    isActive: true,
  },
];

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        {food_data.map((food) => {
          return (
            <MyBanner
              title={food.title}
              desc={food.desc}
              color={food.color}
              isActive={food.isActive}
            />
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default App;
