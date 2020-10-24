import axios from 'axios';
import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button, FlatList } from 'react-native';

const Main = (props) => {
    const [userData, setUserData] = useState([]);

    const fetchData_Then = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(({ data }) => {
                setUserData(data);
            })
    }

    const fetchData_Await = async () => {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUserData(data);
    }


    function promiseFunction(number) {
        return new Promise((resolve, reject) => {
            if (number > 5) {
                resolve("Sayı beşten büyük!");
            }
            else {
                reject("Sayı beşten küçük..");
            }
        })
    }

    const checkNumber = () => {
        promiseFunction(1)
            .then(response => {
                console.log("response: ");
                console.log(response);
            })
            .catch(error => {
                console.log("error: ");
                console.log(error);
            })
    }

    return (
        <SafeAreaView>
            <View>
                <Button title="Fetch Data With Then " onPress={fetchData_Then} />
                <Button title="Fetch Data With Await " onPress={fetchData_Await} />
                <Button title="Number" onPress={checkNumber} />

                <FlatList
                    data={userData}
                    renderItem={({ item }) => <Text>{item.name}</Text>}
                />

            </View>
        </SafeAreaView>
    );
}

export default Main;