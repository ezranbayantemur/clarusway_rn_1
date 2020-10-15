import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, Button } from 'react-native';

const App = (props) => {
    const [counter, setCounter] = useState(0);
    const [myNumber, setNumber] = useState(0);
    const [createDate, setCreateDate] = useState(new Date());

    useEffect(() => {
        console.log("USE EFFECT[]");
    }, [])

    useEffect(() => {
        console.log("useEffect counter!")
    }, [counter])

    useEffect(() => {
        console.log("useEffect myNumber!")
    }, [myNumber])


    return (
        <SafeAreaView>
            <View>
                <Text style={{ fontSize: 80 }}>Count: {counter}</Text>
                <Button
                    title="up!"
                    onPress={() => setCounter(counter + 1)}
                />
                <Button
                    title="change number"
                    onPress={() => setNumber(myNumber + 2)}
                />
            </View>
        </SafeAreaView>
    )
}

export default App;
