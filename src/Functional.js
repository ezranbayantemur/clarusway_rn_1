import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, Button } from 'react-native';

const App = (props) => {
    const [counter, setCounter] = useState(0);
    const [userName, setUserName] = useState("");
    const [createDate, setCreateDate] = useState(new Date());
    
    useEffect(() => {
        console.log("USE EFFECT[]");
    }, [])
    
    
    console.log("RENDER");
    return (
        <SafeAreaView>
            <View>
                <Text style={{ fontSize: 80 }}>Count: {counter}</Text>
                <Button
                    title="up!"
                    onPress={() => setCounter(counter + 1)}
                />
            </View>
        </SafeAreaView>
    )
}

export default App;