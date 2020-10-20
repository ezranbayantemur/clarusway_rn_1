import React from 'react';
import { SafeAreaView, View, Text, Button } from 'react-native';

const First = (props) => {
    return (
        <SafeAreaView>
            <View>
                <Text style={{ fontSize: 40 }}>First Hello</Text>
                <Button
                    title="Go!"
                    onPress={() => props.navigation.navigate('SecondPage')}
                />
            </View>
        </SafeAreaView>
    );
}

export default First;