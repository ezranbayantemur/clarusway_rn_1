import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <SafeAreaView>
                <View>
                    <Text>Merhaba</Text>
                </View>
            </SafeAreaView>
        )
    }
}

export default App