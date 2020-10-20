import React from 'react';
import { SafeAreaView, View, Text, Button } from 'react-native';

const Second = (props) => {
    const userNumber = props.route.params.myNumber

    return (
        <SafeAreaView>
            <View>
                <Text style={{ fontSize: 40 }}>Second</Text>
                <Text style={{ fontSize: 40 }}>Number: {userNumber}</Text>
                <Button
                    title="Back"
                    onPress={() => props.navigation.goBack()}
                />
            </View>
        </SafeAreaView>
    );
}

export default Second;