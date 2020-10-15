import React from 'react';
import { SafeAreaView, View, Text, Button } from 'react-native';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
            userName: "",
            createDate: new Date()
        }

        console.log("CONSTRUCTOR");
    }

    componentDidMount() {
        console.log("COMPONENT DID MOUNT");
    }

    render() {
        console.log("RENDER");
        return (
            <SafeAreaView>
                <View>
                    <Text style={{ fontSize: 80 }}>Count: {this.state.counter}</Text>
                    <Button
                        title="up!"
                        onPress={() => this.setState({
                            counter: this.state.counter + 1
                        })}
                    />
                </View>
            </SafeAreaView>
        )
    }
}

export default App