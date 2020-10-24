import axios from 'axios';
import React from 'react';
import { SafeAreaView, View, Text, Button } from 'react-native';

const Main = (props) => {

    const fetchData = () => {
        console.log("starting fetch..");

        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            })

        console.log("end fetch..");
    }

    return (
        <SafeAreaView>
            <View>
                <Text>Main</Text>
                <Button title="Fetch Data" onPress={fetchData} />
            </View>
        </SafeAreaView>
    );
}

export default Main;