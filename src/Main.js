// Overall - 1
import React, { useState } from 'react';
import { SafeAreaView, View, Text, Alert } from 'react-native';

import InputPanel from './components/InputPanel';

const App = () => {
    const [userName, setUserName] = useState("");

    return (
        <SafeAreaView>
            <View>
                <Text style={{ fontSize: 50 }}>Hello {userName}</Text>
            </View>

            <InputPanel
                sendText={(myValue) => { setUserName(myValue) }}
            />

        </SafeAreaView>
    )
}

export default App;
