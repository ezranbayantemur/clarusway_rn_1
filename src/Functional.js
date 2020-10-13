import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button } from 'react-native';

const App = (props) => {
    //       var,   function
    const [counter, setCounter] = useState(0);

    console.log("Render component..");

    return (
        <SafeAreaView>
            <View>
                <Text style={{ fontSize: 250 }}>{counter}</Text>

                <Button
                    title="Up!"
                    onPress={() => setCounter(1)}
                />
            </View>
        </SafeAreaView>
    )
}

export default App;