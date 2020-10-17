// Overall - 1
import React from 'react';
import { SafeAreaView, View, Text, Alert } from 'react-native';

import InputPanel from './components/InputPanel';

const App = () => {
    return (
        <SafeAreaView>
            <View>
                <Text style={{ fontSize: 50 }}>Hello World</Text>
            </View>

            <InputPanel />

        </SafeAreaView>
    )
}

export default App;
