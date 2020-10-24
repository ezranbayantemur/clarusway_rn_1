import axios from 'axios';
import React, { useState } from 'react';
import { SafeAreaView, View, Text, FlatList, TouchableOpacity } from 'react-native';

import Button from './components/Button'

const Main = (props) => {

    return (
        <SafeAreaView>
            <View>

                <Button title="Suggest New Restaurant" />
            </View>
        </SafeAreaView>
    );
}

export default Main;