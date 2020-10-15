import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, Button, Alert } from 'react-native';

const App = (props) => {
    const [orderCount, setOrderCount] = useState(0);

    useEffect(() => {
        Alert.alert("CLARUSWAY", "Hoşgeldiniz")
    }, [])

    useEffect(() => {
        if (orderCount > 10) {
            Alert.alert("CLARUSWAY", "10'dan fazla seçim yapıyorsunuz.")
        }
    }, [orderCount])

    return (
        <SafeAreaView>
            <View>
                <Text style={{ fontSize: 50 }}>Count {orderCount}</Text>
                <Button
                    title="Select Order"
                    onPress={() => setOrderCount(orderCount + 1)}
                />
            </View>
        </SafeAreaView>
    )
}

export default App;
