// Overall - 1
import React from 'react';
import { SafeAreaView, View, Text, Alert } from 'react-native';

import MyInput from './components/MyInput';

const App = () => {
    return (
        <SafeAreaView>
            <View>
                <Text style={{ fontSize: 50 }}>Hello there</Text>

                <MyInput
                    title="Set Name"
                    getName={(myValue) => alert("Girilen değer: " + myValue)}
                />

            </View>
        </SafeAreaView>
    )
}

export default App;
