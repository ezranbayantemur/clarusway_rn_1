import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, View, TextInput } from 'react-native';

const MyInput = (props) => {
    const [name, setName] = useState("");

    const sendValue = () => {
        setName("");
        props.getName(name)
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    value={name}
                    onChangeText={(value) => setName(value)}
                />
            </View>

            <TouchableOpacity
                onPress={sendValue}
                style={styles.buttonContainer}
            >
                <Text>{props.title}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default MyInput;

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#dcedc8',
        padding: 10,
        margin: 10,
        borderRadius: 5
    },
    inputContainer: {
        backgroundColor: '#eceff1',
        padding: 10,
        margin: 10,
        borderRadius: 5

    },
    container: {
        backgroundColor: '#bdbdbd',
        padding: 10,
        margin: 10,
        borderRadius: 5
    }
})