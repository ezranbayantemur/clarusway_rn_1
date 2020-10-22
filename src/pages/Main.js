import React from 'react';
import { SafeAreaView, View, Text, Button } from 'react-native';

const Main = (props) => {
    console.log("MAIN RENDERING...");
    return (
        <SafeAreaView>
            <View>
                <Text style={{ fontSize: 50 }}>Main</Text>
                <Button title="Go!" onPress={() => props.navigation.navigate("PostPage")} />
            </View>
        </SafeAreaView>
    )
}

export { Main }
