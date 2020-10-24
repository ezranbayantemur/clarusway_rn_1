import axios from 'axios';
import React, { useState } from 'react';
import { SafeAreaView, View, Text, FlatList, TouchableOpacity } from 'react-native';

import { Button, RestaurantCard } from './components'

const Main = (props) => {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <RestaurantCard />
                <Button title="Suggest New Restaurant" />
            </View>
        </SafeAreaView>
    );
}

export default Main;