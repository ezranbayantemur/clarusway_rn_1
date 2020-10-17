// Overall - 1
import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';

import Button from './components/Button';

const App = () => {
    return (
        <SafeAreaView>
            <View>
                <Text style={{ fontSize: 50 }}>Hello World</Text>
            </View>

            <Button color="#81d4fa" banner="Press me!!" />

        </SafeAreaView>
    )
}

export default App;
