import React from 'react';
import { SafeAreaView, View, Text, Button } from 'react-native';

const number = 55;

const First = (props) => {
    return (
        <SafeAreaView>
            <View>
                <Text style={{ fontSize: 40 }}>First</Text>
                <Text style={{ fontSize: 40 }}>{number}</Text>
                <Button
                    title="Go!"
                    onPress={() => props.navigation.navigate('SecondPage', {
                        myNumber: number
                    })}
                />
            </View>
        </SafeAreaView>
    );
}

export default First;