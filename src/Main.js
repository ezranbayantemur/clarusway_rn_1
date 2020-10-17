// Overall - 1
import React from 'react';
import { SafeAreaView, View, Text, Alert } from 'react-native';

import Button from './components/Button';

const App = () => {

    function sayHello() {
        alert("Hello there!")
    }

    return (
        <SafeAreaView>
            <View>
                <Text style={{ fontSize: 50 }}>Hello World</Text>
            </View>

            <Button
                sayingHello={() => sayHello()}
                color="#81d4fa"
                banner="Press me!!"
            />

            <Button
                sayingHello={() => {
                    Alert.alert("Clarusway", "Fullstack 4ever!")
                }}
                color="#81d4fa"
                banner="Press me and say hi!!"
            />


        </SafeAreaView>
    )
}

export default App;
