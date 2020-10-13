import React from 'react';
import { SafeAreaView, View, Text, Button } from 'react-native';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0
        }

        console.log("Constructor");
    }

    myFunction() {
        let myVariable = 10;

        myVariable++;

        console.log("myFunction: " + myVariable);
    }

    componentDidMount() {
        console.log("Component Did Mount")
    }

    render() {
        console.log("Render")
        return (
            <SafeAreaView>
                <View>
                    <Text style={{ fontSize: 250 }}>{this.state.counter}</Text>

                    <Button
                        title="Up!"
                        onPress={() => this.setState({ counter: this.state.counter + 1 })}
                    />

                    <Button
                        title="Check"
                        onPress={() => this.myFunction()}
                    />
                </View>
            </SafeAreaView>
        )
    }
}

export default App